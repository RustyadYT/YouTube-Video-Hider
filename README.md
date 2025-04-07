# YouTube Gorilla Tag Hider

![GitHub release (latest by date)](https://img.shields.io/github/v/release/YOUR_USERNAME/YOUR_REPO_NAME)
![GitHub license](https://img.shields.io/github/license/YOUR_USERNAME/YOUR_REPO_NAME)

A Chrome extension designed to hide YouTube videos and shorts related to **Gorilla Tag**, with the ability to block other custom keywords as well. Perfect for users who want to filter out Gorilla Tag content and curate a better YouTube browsing experience.

## Features
- **Block Gorilla Tag Content**: Automatically hides videos and shorts containing "Gorilla Tag" or "#gorillatag" by default.
- **Custom Keyword Blocking**: Add additional keywords to block beyond Gorilla Tag content (e.g., other games or topics).
- **Manage Keywords**: Add, import, export, or clear blocked keywords using a user-friendly popup interface.
- **Dark/Light Mode**: Toggle between dark and light themes for a comfortable viewing experience.
- **Dynamic Filtering**: Hides content in real-time as you browse YouTube, even when new videos load.
- **Modern UI**: Clean popup design with rounded corners for easy keyword management.

## Installation

### From the Chrome Web Store (Coming Soon)
This extension will be available on the Chrome Web Store. Stay tuned for the link!

### Manual Installation
1. Clone or download this repository:
   ```bash
   git clone https://github.com/RustyadYT/YouTube-Video-Hider.git
Open Chrome and navigate to chrome://extensions/.
Enable Developer Mode (toggle in the top-right corner).
Click "Load unpacked" and select the folder containing the extension files.
The "YouTube Gorilla Tag Hider" extension should now appear in your extensions list.

Usage
Click the extension icon in Chrome to open the popup.
The extension comes preloaded with default keywords ("Gorilla Tag" and "#gorillatag") to block Gorilla Tag content.
Add new keywords to block additional content (e.g., "example keyword") using the input field and "Add Keyword" button.
Use the buttons to:
Export Keywords: Save your keyword list as a JSON file.
Import Keywords: Load a previously exported keyword list.
Clear All Keywords: Reset the list (default Gorilla Tag keywords will still apply).
Toggle between dark and light mode using the "Dark Mode" checkbox.
Visit YouTube (www.youtube.com), and the extension will automatically hide videos and shorts related to Gorilla Tag or other blocked keywords.
Files
manifest.json: Extension configuration.
popup.html / popup.css / popup.js: Popup UI for managing keywords and settings.
content.js: Script that runs on YouTube pages to hide videos and shorts.
background.js: Background script to initialize default settings.
icon16.png, icon48.png, icon128.png: Extension icons (add your own icons).
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For questions or feedback, feel free to reach out:

GitHub: RustyLabs

Discord: rustylabs
