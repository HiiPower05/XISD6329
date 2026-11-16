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

<img width="1678" height="852" alt="Screenshot 2026-11-16 155407" src="https://github.com/user-attachments/assets/f8b18208-3d4f-4b94-8f68-9f295668b9dc" />

<img width="1665" height="840" alt="Screenshot 2026-11-16 155557" src="https://github.com/user-attachments/assets/b53eff88-6ee3-4ed5-97d1-9bbd832f949b" />

<img width="1661" height="842" alt="Screenshot 2026-11-16 155641" src="https://github.com/user-attachments/assets/47fd941a-5711-4729-9c97-964ec956c21a" />



-  Querying database with SELECT for the menu
<img width="1917" height="866" alt="Screenshot 2026-11-15 143523" src="https://github.com/user-attachments/assets/62031132-4e5f-44d2-bfe0-995963890de7" />

- Postman GET of the menu_items from the Supabase database request. 200 OK.
<img width="1442" height="937" alt="Screenshot 2026-11-15 144449" src="https://github.com/user-attachments/assets/3e73ab74-eb87-4d79-b844-0e5a7786fa38" />

- Postman POST request of create_guest_order request with successful result.
<img width="1445" height="973" alt="Screenshot 2026-11-15 153823" src="https://github.com/user-attachments/assets/d36572a4-0609-445c-a47d-3917a1d57fa7" />

- SQL definition of create_guest_order.
<img width="1917" height="870" alt="Screenshot 2026-11-15 144711" src="https://github.com/user-attachments/assets/7621d518-42b8-4a18-92ed-d94595ad09f2" />

- check if create_guest_order exists.
<img width="1917" height="867" alt="Screenshot 2026-11-15 143539" src="https://github.com/user-attachments/assets/459fb207-d61f-4029-8f96-fe77f934b03b" />

-  RPC execution permissions.
<img width="1917" height="870" alt="Screenshot 2026-11-15 144711" src="https://github.com/user-attachments/assets/79854b73-31de-4e19-aef9-e0149bae993d" />

<img width="1438" height="981" alt="Screenshot 2026-11-15 153553" src="https://github.com/user-attachments/assets/0bd875b1-d24f-48d2-b3eb-ba66cc3cef88" />




