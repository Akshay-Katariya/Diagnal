
# Diagnal React Native Workshop 

**Functional Requirements** 
1.	App must implement lazy loading of contents - image grid must load gradually as the user scrolls down. Data for the first page can be loaded during app load.
 
2.	Client Side Search must be implemented. Search results must be rendered on to the main view itself without refreshing/reloading the page or taking the user to a new page. 
 
3.	The listing page must have three vertically scrollable columns which is not horizontally scrollable with no visible scroll bars.


## Installation 📲

Environment setup:

Node: v18.16.0

OpenJDK: 11

    npm install
    cd android && ./gradlew clean && cd ..
    npx react-native run-android

## Publishing the App 🚀

- The app is built using GitHub Actions and utilizes GitHub CI/CD for building the Android app. 
- The signed APK is published under the release section of the GitHub repository. Please refer to the repository's release section to download the latest signed APK for Android.

[Download APK](https://github.com/Akshay-Katariya/Diagnal/releases)

## Screenshots 📱

These screenshot shows represent following use case

 1. Lazy loading of `FlatList` component
 2. Pagination with local JSON file
 3. Custom header with transparent bottom
 4. Search implementation without navigating to new page
 5. Handled edge case scenario:
	 1. Ellipsis effect on `Text` to handle long text 
	 2. Implemented `placeholder_for_missing_posters.png` for missing poster image


<img src="https://github.com/Akshay-Katariya/Diagnal/assets/11885459/2aefc3ae-d4c9-4a5f-aea5-82b77fa559ee" width="300" height="600">
<img src="https://github.com/Akshay-Katariya/Diagnal/assets/11885459/900368c2-0961-4946-9e68-bc27db22b713" width="300" height="600">
<img src="https://github.com/Akshay-Katariya/Diagnal/assets/11885459/5103817e-39d8-4d9d-8b62-7dbb7775bb81" width="300" height="600">
<img src="https://github.com/Akshay-Katariya/Diagnal/assets/11885459/22ccf4d3-2806-4122-82cd-a7757a2f579a" width="300" height="600">
<img src="https://github.com/Akshay-Katariya/Diagnal/assets/11885459/6b1dff7d-8fd4-4edf-9064-f776d518ad18" width="300" height="600">




