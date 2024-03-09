
# Financial Asset Viewer

This web application front-end for a financial asset viewer is designed with a focus on providing users with an intuitive and visually appealing experience. Users can interactively view a list of financial assets and access detailed information for each individual asset.

## Installation

To run the application locally, follow these steps:

1. Clone the repository from GitHub:

```bash
git clone https://github.com/samuelkurdz/financial-assets.git
```

2. Navigate to the project directory:

```bash
cd financial-assets
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5700` to view the application.

## Technology Stack

The application is built using React.js, a popular front-end library known for its efficiency and flexibility.
React.js allows for the creation of reusable UI components, facilitating the development of a responsive and interactive user interface.
Additionally, React.js provides excellent support for state management, making it ideal for handling dynamic data.

For styling, the application utilizes TailwindCSS for basic styling and responsiveness.
However, for more complex styling needs and to ensure consistency across the application, RadixUI and Shadcn/UI was employed.

## Features

- **Intuitive User Interface:** The application features an intuitive and visually appealing user interface, ensuring ease of use for users.
- **List of Assets:** Users can view a list of all financial assets, displayed in a clear and organized manner.
- **Asset Details:** Detailed information for each asset is accessible, allowing users to gain a comprehensive understanding of individual assets.
- **Responsive Design:** The application is fully responsive and works seamlessly on both desktop and mobile devices, providing users with a consistent experience across different screen sizes.

## Documentation

### Assumptions

- The financial asset data provided by the API endpoint (mentioned below) is assumed to be static and does not require real-time updates.
- The application is developed with a focus on front-end functionality and does not include backend components such as authentication or data persistence.
- The application is developed to be fully responsive and to work seamlessly on both desktop and mobile devices, with a consistent experience.
- The application is developed with the aim of being easily installed as a Mobile App.

### API Endpoint

The application fetches financial asset data from the provided [API endpoint](https://gist.github.com/jesperborgstrup/a57aff4d66392b6c89473c57ef3eadf4/raw/a95a48ad51d90dbbc88f74155deda9fcda76f992/assets.json) to populate the list of assets.
The data is then displayed to users in the user interface.

## Bonus Features

- **Sorting and Filtering:** Users can sort the list of assets by different criteria and filter assets based on specific criteria.
- **Search Functionality:** Users can search for specific assets by entering keywords or phrases.
- **Pagination:** Pagination functionality allows users to navigate through large lists of assets efficiently.
- **Android Embeddability:** Guidelines or documentation on integrating the application into an Android environment are provided for enhanced versatility.

### Android Embeddability with Progressive Web App (PWA)
The Financial Asset Viewer application implements Android Embeddability through the use of Progressive Web App (PWA) technology.
PWAs leverage modern web capabilities to provide a native app-like experience across different platforms, including Android devices.

Here's how you can install the application from the browser and create an APK using PWABuilder:

### *Installation from Browser:*
1. Open Browser: Navigate to the Financial Asset Viewer application using any web browser on your Android device.

2. Add to Home Screen: Tap on the browser's menu options (typically represented by three dots) and select `Add to Home Screen`, `Install App` or `Install Financial Asset Viewer.`.
This action will create a shortcut icon on your device's home screen for quick access to the application.

3. Launch Application: Once added to the home screen, tap on the Financial Asset Viewer icon to launch the application.
The application will open in full-screen mode, providing a native app-like experience.

### *Creating APK using PWABuilder:*
1. Access PWABuilder: Visit the PWABuilder website (https://www.pwabuilder.com/) using any web browser.

2. Enter Application URL: Enter the URL of the Financial Asset Viewer application into the provided field on the PWABuilder website.

3. Generate APK: Follow the on-screen instructions to generate the APK file for the application. PWABuilder will guide you through the process, including selecting configuration options and customizing the app icon.

4. Download APK: Once the APK generation process is complete.
 - The APK can be uploaded to PlayStore if desired
 - Or install onto your Android device.
   - Download the APK file to your Android device.
   - Install APK: Open the APK file on your Android device to initiate the installation process. Follow the prompts to install the Financial Asset Viewer application on your device.
   - Launch Application: Once installed, locate the Financial Asset Viewer icon in your device's app drawer and tap on it to launch the application.



---
Other option is using a Hybrid implementation such as React Native.
Using Progressive Web App (PWA) technology offers several advantages over hybrid implementations like React Native or Ionic for the Financial Asset Viewer application:

1. **Universal Compatibility**: PWAs work seamlessly across all platforms without requiring separate codebases or platform-specific optimizations, ensuring consistent user experiences.

2. **Effortless Installation and Updates**: PWAs can be installed directly from the browser with a simple click and are automatically updated in the background, eliminating the need for manual updates.

3. **Optimized Performance and Accessibility**: PWAs leverage modern web technologies to deliver fast and responsive experiences, even on low-end devices or slow networks, while adhering to web standards for accessibility.

In summary, PWA offers a robust and cost-effective solution for the Financial Asset Viewer application, providing cross-platform compatibility, streamlined installation and updates, and enhanced performance and accessibility compared to hybrid implementations like React Native or Ionic.

## Conclusion

The Financial Asset Viewer solution.