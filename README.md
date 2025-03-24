# Image Swapper Chrome Extension

🖼️ Replace images on any website with your own CDN-hosted versions.

## Features
- Swap website image paths with a custom match/replace pattern
- Support for hosted image packs (e.g., GitHub Pages, Netlify)
- Automatic fallback to original image if custom one is missing
- Works with both `<img>` tags and CSS background images

## How It Works
1. Install the extension in Chrome (Load Unpacked)
2. Open the extension popup
3. Enter:
   - Match path: `https://example.com/foo/bar/`
   - Replace with: `https://yourcdn.com/custom/`
4. Visit a supported website — images will be swapped on-the-fly.

## Hosting Your Pack
We recommend:
- GitHub Pages
- Netlify Drop
- FileGarden

## License
MIT
