document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = new URL(tabs[0].url);
    const hostname = url.hostname;

    chrome.storage.sync.get([hostname], (result) => {
      const config = result[hostname] || {};
      document.getElementById("enabled").checked = config.enabled || false;
      document.getElementById("matchPath").value = config.match || "";
      document.getElementById("replacePath").value = config.replace || "";
    });

    document.getElementById("settingsForm").onsubmit = (e) => {
      e.preventDefault();
      const enabled = document.getElementById("enabled").checked;
      const match = document.getElementById("matchPath").value;
      const replace = document.getElementById("replacePath").value;

      chrome.storage.sync.set({
        [hostname]: { enabled, match, replace }
      }, () => {
        alert("Saved!");
      });
    };
  });
});