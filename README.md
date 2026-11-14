# XISD6329 - Web & Mobile Application Project

## Project Overview
This repository contains the source code and documentation for the XISD6329 web and mobile application project. The solution combines a responsive web platform with a cross-platform mobile application.

## Repository Structure
- `/assets`: Shared branding icons and global graphic assets.
- `/docs`: Project planning documents, sitemaps, wireframes, and test reports.
- `/mobile-app`: Mobile application source code and assets.
- `/website`: Website component including CSS, JavaScript, media, and secondary pages.
- `index.html`: Main landing page for the web application.

## Youtube Video of Application
https://youtu.be/Wfi2iJAvAio


## Technologies Used
- **HTML5 & CSS3:** Website structure, responsive layout, and styling.
- **JavaScript:** Website navigation, user interactions, and application logic.
- **Supabase:** Backend services, including user authentication and database operations.
- **React & Vite:** Separate frontend implementation retained in the `src` directory.
- **Capacitor:** Mobile application integration.
- **Git & GitHub:** Version control and collaboration.

## Run the web app

The primary web application is the vanilla JavaScript website.

1. Clone the repository.
2. Install the project dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Open the local URL displayed by Vite.

The website uses hash-based navigation and supports the Home, Menu, Blog, Raffle, Admin, and Help sections.

Supabase provides the authentication backend. Users can register, sign in with an email and password, and sign out. Authentication session changes are handled through Supabase's authentication state listener.

The website also includes menu browsing, search and filters, a shopping cart, and order-related functionality. Database operations and checkout functionality depend on the configured Supabase project and its database functions.

## Frontend files

### Primary website
- `index.html`: Main website entry point.
- `website/css/style.css`: Website layout and responsive styling.
- `website/js/script.js`: Screen rendering, navigation, interactions, authentication, and order-related logic.
- `website/js/supabase-client.js`: Supabase client initialization.

### Additional frontend implementation
- `src/`: Separate React implementation retained in the repository. It is not loaded by the root `index.html` and is not the primary website entry point.

### Mobile application
- `mobile-app/`: Cross-platform mobile application source code and Capacitor configuration.


## Images

- PostMan API test
  <img width="860" height="422" alt="image" src="https://github.com/user-attachments/assets/6714d064-2f47-458f-8f4f-d7e3f0778dbe" />

- GitHub Automated test
<img width="857" height="391" alt="image" src="https://github.com/user-attachments/assets/1f4f247f-a5bf-422b-967d-c3a6b2a8021e" />

- Supabase for storing our users data and ordering,
<img width="1172" height="530" alt="image" src="https://github.com/user-attachments/assets/8633b9d3-6f60-4c20-9d0e-08534e00b172" />

- Database Schema
<img width="976" height="440" alt="image" src="https://github.com/user-attachments/assets/80157991-8660-4bd4-a108-af81d9232a47" />

<img width="982" height="705" alt="image" src="https://github.com/user-attachments/assets/db999a24-7ddb-44ee-8bd8-c2af08eb95f3" />

<img width="977" height="495" alt="image" src="https://github.com/user-attachments/assets/a4a71969-4537-40aa-bb56-01433c112c96" />

- Website loads through API from Supabase
<img width="977" height="441" alt="image" src="https://github.com/user-attachments/assets/d0cf444f-eb13-42be-aa34-ae33155cbdaa" />

- Ordering
<img width="855" height="675" alt="image" src="https://github.com/user-attachments/assets/94ebc321-fec0-443e-b8c7-fd305cba0099" />

- Admin Reference of Order
<img width="857" height="392" alt="image" src="https://github.com/user-attachments/assets/79ca6a00-9e8d-426c-86b2-38e6b6103dcc" />




