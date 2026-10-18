# XISD6329 - Web & Mobile Application Project

## Project Overview
This repository contains the source code and documentation for the XISD6329 web and mobile application project. The solution combines a responsive web platform with a cross-platform mobile application.

## Repository Structure
- `/assets`: Shared branding icons and global graphic assets.
- `/docs`: Project planning documents, sitemaps, wireframes, and test reports.
- `/mobile-app`: Mobile application source code and assets.
- `/website`: Website component including CSS, JavaScript, media, and secondary pages.
- `index.html`: Main landing page for the web application.

## Technologies Used
- **HTML5 & CSS3:** Semantic markup and responsive layout styling.
- **JavaScript:** Client-side scripting and interactive elements.
- **Git & GitHub:** Version control and collaboration.

## Run the web app

Open `index.html` in a browser. No Node.js, npm, build step, or server is required. Sign in with any valid-looking email and a password, or choose **Guest Explorer**; either takes you to Home. Navigate through Home, Menu, Blog, Raffle, Admin, and Help. The app uses hash routes, so the screens work from a local file.

Menu search and filters, the cart, raffle entry demo, blog filters, admin tabs, and FAQ accordions run in the browser. Demo login, cart, and raffle state use local storage. Authentication, checkout, and admin data are not connected to a backend.

## Frontend files

- `index.html`: Vanilla app entry point.
- `website/css/style.css`: Shared layout and responsive styling.
- `website/js/script.js`: Screen templates, hash navigation, demo data, and interactions.
- `src/`: Original React/Figma export retained as reference; it is not loaded by the vanilla app.