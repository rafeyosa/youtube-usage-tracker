# YouTube Usage Tracker (Chrome Extension)

A Chrome extension that tracks how many times YouTube has been opened and the total time spent watching videos. The timer only runs when a video is playing and pauses when the video is stopped or the tab is closed.

## Features
- Tracks how many times YouTube is opened
- Measures total watch time in real-time
- Stops counting when a video is paused or YouTube is closed
- Displays tracked data in a popup UI
<img width="293" alt="Screenshot 2025-03-04 at 18 26 40" src="https://github.com/user-attachments/assets/86e6ae27-ff2c-4c77-ae9a-3d841d7aa04e" />

## Installation
- Open Google Chrome and navigate to chrome://extensions/.
- Enable Developer mode (toggle at the top right corner).
- Click Load unpacked and select the extension folder.
- The extension should now be installed and ready to use.

## Usage
- Open YouTube and play a video.
- Click on the extension icon to view usage stats.
- The popup will show:
    - Times YouTube has been opened
    - Total time watched (in hh:mm:ss format)
- Close the popup and continue watching; the timer updates automatically.

## Permissions Required
- storage: To store watch time and open count.
- tabs: To detect when YouTube is opened or closed.
- host_permissions: To interact with https://www.youtube.com/*

## Future Improvements
- Add daily, weekly, and monthly stats
- Provide options to reset or export data
- Support for dark mode UI

## Contributing
Pull requests are welcome! If you find any issues or have suggestions, feel free to open an issue.

Happy tracking! 🎥📊
