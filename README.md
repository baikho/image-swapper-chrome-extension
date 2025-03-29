# Image Swapper Chrome Extension

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-brightgreen?logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/ekeiepkjobedldgohmeniidbnfcgkphf)
![GitHub repo size](https://img.shields.io/github/repo-size/baikho/image-swapper-chrome-extension)
![GitHub last commit](https://img.shields.io/github/last-commit/baikho/image-swapper-chrome-extension)
![GitHub issues](https://img.shields.io/github/issues/baikho/image-swapper-chrome-extension)
![GitHub pull requests](https://img.shields.io/github/issues-pr/baikho/image-swapper-chrome-extension)
![License](https://img.shields.io/github/license/baikho/image-swapper-chrome-extension)
[![Stars](https://img.shields.io/github/stars/baikho/image-swapper-chrome-extension?style=social)](https://github.com/baikho/image-swapper-chrome-extension/stargazers)

| ![Image Swapper Icon](https://github.com/user-attachments/assets/5246828e-fa9d-4f9b-8cd7-442802b8292a) | 🖼️ **Replace images on any website with your own CDN-hosted versions.** |
|------------------------------------|------------------------------------------------------------------------|

## Features
- Swap website image paths with a custom match/replace pattern
- Support for hosted image packs (e.g., GitHub Pages, Netlify)
- Automatic fallback to original image if custom one is missing
- Works with both `<img>` tags and CSS background images

## How It Works
1. Install the extension in Chrome from the [Chrome Web Store](https://chromewebstore.google.com/detail/image-swapper/ekeiepkjobedldgohmeniidbnfcgkphf) or by loading it unpacked via `chrome://extensions/`
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
