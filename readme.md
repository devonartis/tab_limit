# Tab Limit Manager Chrome Extension

## Description

Tab Limit Manager is a Chrome extension designed to help users manage their browser tabs more effectively. It allows users to set a maximum number of tabs (between 5 and 10) and prevents opening additional tabs beyond this limit. When the limit is reached, the extension displays a warning popup to inform the user.

## Features

- Set a custom tab limit (between 5 and 10 tabs)
- Automatically closes new tabs that exceed the set limit
- Displays a warning popup when the tab limit is reached
- Easy-to-use interface for adjusting the tab limit

## Installation

1. Download or clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory containing the extension files.
5. The Tab Limit Manager extension should now appear in your list of installed extensions.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. The popup will display your current tab limit.
3. To change the limit:
   - Enter a new value between 5 and 10 in the "New max tabs" input field.
   - Click the "Update" button.
   - The "Current max tabs" display will update to show your new limit.
4. To set the maximum limit of 10 tabs:
   - Enter "10" in the "New max tabs" input field.
   - Click the "Update" button.
   - The "Current max tabs" display will change to 10.
5. When you try to open a tab beyond your set limit:
   - The new tab will automatically close.
   - A warning popup will appear, informing you that you've reached your tab limit.

## Files

- `manifest.json`: Contains metadata about the extension and its capabilities.
- `background.js`: Handles the core functionality of monitoring tabs and enforcing the limit.
- `popup.html` and `popup.js`: Provide the user interface for viewing and changing the tab limit.
- `warning.html` and `warning.js`: Display the warning message when the tab limit is reached.

## Customization

You can customize the extension by modifying the following files:
- Adjust the styling in `popup.html` and `warning.html` to change the appearance of the popups.
- Modify `background.js` to change how the extension behaves when the limit is reached.
- Edit `popup.js` to alter how users interact with the tab limit settings.

## Troubleshooting

If you encounter any issues:
1. Ensure that the extension is enabled in `chrome://extensions/`.
2. Try refreshing the extension by clicking the refresh icon on the extension card in `chrome://extensions/`.
3. If problems persist, uninstall and reinstall the extension.

## Contributing

Contributions to improve Tab Limit Manager are welcome. Please feel free to submit pull requests or open issues to suggest improvements or report bugs.


## License

This project is open source and available under the MIT License. For more details, see the [LICENSE](https://github.com/devonartis/tab_limit/blob/main/license.txt) file in the repository.