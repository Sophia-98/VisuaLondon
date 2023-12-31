# VisuaLondon

**Website:** [Click Here](https://visualondon.netlify.app/)

## Description

VisuaLondon is dedicated to creating captivating visuals and interactivity, aimed at engaging the audience and visitors, rather than overwhelming them with excessive information. VisuaLondon offers a unique perspective on web applications centered around travel and attractions. It not only provides stunning visuals and an immersive experience but also delivers valuable information, including key facts and activity details for each attraction.

VisuaLondon was created using technologies such as React, react-three-fiber, react-spring, and netlify.

- **React-three-fiber:** A React library version of three.js, creates and displays 3D animations and graphics using WebGL, allowing users to explore the map with zoom and rotation. As part of the map, clouds were also incorporated to add to the atmospheric ambiance.

- **React-spring:** Utilized for seamless animations, including popups and parallax effects.

- **Netlify:** Handles deployment needs. React was chosen for its popularity and code reusability, emphasizing modularity and code splitting. This structure facilitates debugging and maintenance, making it easy to identify and address any issues.

React Props were extensively used to pass relevant information to the user interface, depending on their interactions and selections. Hooks such as useState and useEffect were also a vital part of the structure, making it much easier to reuse code within a JavaScript file. To maximize code reusability, a data array was incorporated to efficiently manage all the information presented on the website, reducing redundancy, and streamlining maintenance.

To further enhance the user experience, preloading was incorporated, as some images loaded before others, which lowered the overall user experience. This involved creating an image array assigned to specific pages, ensuring that images loaded seamlessly during the loading screen when users accessed a particular page.

Recognizing the prevalence of mobile usage, the website was optimized for mobile devices. While parallax effects may not be practical on smaller screens, the website was adapted by making location images static and neatly stacked when the website reaches a certain width. This adjustment ensures continued functionality on the map page, catering to the limitations of mobile screens and touch interactions.

## Individual Pages

Almost each section of the website has its own corresponding CSS file for clarity and easy maintenance.

- **Data/images.js:** These are data arrays that are called and reused throughout the site. Images.js is primarily used for preloading images.

- **Index.js:** React-router-dom configurations for site navigation.

- **Loader.js:** Applied to almost all pages, uses promises to load all images under the category in images.js. The category is called through props in the parent module. This doesn’t work within the map canvas since it renders its textures separately.

- **Start.js:** The intro to the website that notifies the user of the website and warns them that hardware acceleration needs to be turned on for the best experience.

- **Map.js:** Configures camera animation and loader. The map is made up with many different components:

  - **mapPlane.js:** Renders the map plane.
  - **Controls.js:** Map control configurations that restrict the camera on how far it can pan to depending on zoom level. If this isn’t configured, the 3D Canvas can go on infinitely.
  - **Sky.js:** Cloud and cloud animation configurations. These are produced through react-three-fiber/drei library.
  - **Icon.js:** Module that is reused for all icons on the map. The image URL is passed as a prop from the parent element and is positioned appropriately.

- **Navigation.js:** Reused module for the nav menu on all pages, including the nav overlay. Styling and title are changed through the passing of props.

- **Loader.js:** Uses promises to load images during the loading screen.

- **Overlay.js:** Parent module to both hover and parallax. Will pass props to hover and will only show parallax if overlay is opened.

  - **Hover.js:** Hover animation and configuration for the popups.
  - **Parallax.js:** Uses props passed down from the parent to determine what information from data.js to display. Parallax only shows on wider screens and is static on mobile/smaller windows.

## Location Components

- All locations have a styling file and all share borough.css.

- All location JS files configure the location and strength of the parallax effect through react spring and have mobile configuration through using hooks to keep track of the window size.

- The `_redirects` file in public is used for Netlify redirection on the deployed site. Otherwise, it will lose its path during refresh.

- The `.env` file is used to configure the program not to generate sourcemap, as these produced errors.
