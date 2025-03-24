function tryReplace(originalUrl, matchPath, replacePath) {
  if (!originalUrl.includes(matchPath)) return null;
  return originalUrl.replace(matchPath, replacePath);
}

function replaceImageSrc(img, matchPath, replacePath) {
  const customUrl = tryReplace(img.src, matchPath, replacePath);
  if (!customUrl) return;

  const testImg = new Image();
  testImg.onload = () => {
    img.src = customUrl;
  };
  testImg.src = customUrl;
}

function replaceBackground(el, matchPath, replacePath) {
  const style = window.getComputedStyle(el);
  const bg = style.backgroundImage;
  const match = bg.match(/url\(["']?(.*?)["']?\)/);
  if (!match || !match[1].includes(matchPath)) return;

  const customUrl = tryReplace(match[1], matchPath, replacePath);
  if (!customUrl) return;

  const testImg = new Image();
  testImg.onload = () => {
    el.style.backgroundImage = `url("${customUrl}")`;
  };
  testImg.src = customUrl;
}

(function () {
  const hostname = window.location.hostname;
  chrome.storage.sync.get([hostname], (result) => {
    const config = result[hostname];
    if (!config || !config.enabled || !config.match || !config.replace) return;

    // Replace existing DOM immediately
    document.querySelectorAll("img").forEach(img => replaceImageSrc(img, config.match, config.replace));
    document.querySelectorAll("*").forEach(el => replaceBackground(el, config.match, config.replace));

    // MutationObserver to catch new DOM changes (including late-loaded images)
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) {
            if (node.tagName === "IMG") {
              replaceImageSrc(node, config.match, config.replace);
            } else {
              // Check child imgs and backgrounds
              node.querySelectorAll?.("img").forEach(img => replaceImageSrc(img, config.match, config.replace));
              node.querySelectorAll?.("*").forEach(el => replaceBackground(el, config.match, config.replace));
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
})();
