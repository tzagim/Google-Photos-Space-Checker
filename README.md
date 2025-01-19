# Google-Photos-Space-Checker
## Description

The "Google-Photos-Space-Checker" is a JavaScript tool designed to help users identify and locate photos in their Google Photos library that are taking up storage space. By automating the process, the tool iterates through the user's photo collection and checks for specific target strings, such as "Details" and "This item doesn't take up storage in your Google Account," which are indicative of photos occupying storage space.

The script utilizes the Google Photos web interface, simulating user actions to navigate through the library and pause periodically to ensure the page updates correctly. When a photo is found that takes up storage space, the tool displays an alert notifying the user of the discovery.

The "Google-Photos-Space-Checker" project offers a convenient way to identify storage-consuming photos, allowing users to manage their photo library efficiently and reclaim valuable storage space. With easy customization of target strings, the tool can be adapted to various languages and versions of Google Photos, making it accessible to a broader user base.

## Working method and customization:
The tool detects the browser language and according to this language it searches for the relevant string, therefore it is important that the interface language of Google Photos is the same as the browser language.

### Translation
If you want to contribute a new language you need to translate the 4 relevant lines: `details`, `take_space`, `alerts`, `warnings`.

currently supports:
* English
* Hebrew

## Features
* Automates the process of finding photos occupying storage space in Google Photos.
* Customizable target strings to support multiple languages and versions of Google Photos.
* Simple and efficient tool to manage photo library and free up storage space.
* Open-source project available for contribution and enhancement.

## Tutorial:

### Step 1: Open Google Photos and Developer Console
Log in to your Google Photos account using your preferred browser and open all the pages that allow you to browse the photos you want to search (these could be albums, archives, or search results; the pages should display the photos in a way that allows you to navigate between them using the left and right arrow keys). Press Ctrl + Shift + J (Windows/Linux) or Cmd + Option + J (Mac) to open the browser's developer console.

### Step 2: Copy and Paste the Script
Copy the entire content of the script.js file from the cloned repository and paste it into the Developer Console. Press Enter to execute the script. The tool will now start iterating through your Google Photos library, looking for photos that occupy storage space.

### Step 3: Wait for the Results
The script will automatically click through your photos and pause periodically to ensure proper page updates. If a photo occupying storage space is found, an alert will pop up notifying you of the discovery.


## Caution and Responsiblity
Use the "Google-Photos-Space-Checker" tool responsibly and comply with Google's terms of service. Remember that you are responsible for any actions taken with the script. Exercise caution while using it to avoid unintended consequences.

## Credits
The original idea by [rsps1008](https://github.com/rsps1008/Google-Photos-Space-Finder)