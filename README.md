# XISD6329 - Web & Mobile Application Project

Project: Happy Hippo Café

## Project Overview
Happy Hippo Café is a web and mobile application developed to provide customers with a convenient way to interact with the café. The application brings together several functions, including browsing the menu, viewing café information, managing a shopping cart, placing orders, and accessing additional content such as blogs and raffles.

The project also includes administrative functionality that allows authorised users to manage and view information related to the café, including orders and menu content.

The main purpose of the project is to create a functional digital platform that improves how customers interact with the café while providing administrative tools to support its operations.

The solution consists of a responsive website and an Android application. The website uses HTML, CSS and JavaScript, while Capacitor is used to integrate the web application into an Android project.

## Repository Structure
- `/assets`: Shared branding icons and global graphic assets.
- `/docs`: Project planning documents, sitemaps, wireframes, and test reports.
- `/mobile-app`: Mobile application source code and assets.
- `/website`: Website component including CSS, JavaScript, media, and secondary pages.
- `index.html`: Main landing page for the web application.

## Youtube Video of Application Demonstration
https://youtu.be/Wfi2iJAvAio

## Purpose and Objectives
The Happy Hippo Café application was developed to provide customers with an accessible and interactive digital café experience.

The main objectives of the application are to:
- Digital Menu: Provide customers with an accessible digital menu to browse café products and view relevant information.
- Shopping Cart and Checkout: Allow customers to add products to their cart, manage quantities, and proceed to checkout.
- User Authentication: Enable customers to register, sign in, and manage their accounts.
- Database Integration: Store and retrieve customer and order information using an online database.
- Administrative Functionality: Provide administrators with tools to manage café information, products, orders, and other application content.
- Cross-Platform Accessibility: Make the application accessible through both a web application and an Android application.
The overall goal was to develop a functional application that goes beyond a static café website. Instead of simply displaying information, the application allows customers to interact with its features, manage their shopping experience, and perform relevant actions. It also provides administrative functionality to support the management of café operations.

## Main Features

Customer functionality

Menu browsing

View available menu items.

Browse menu categories.

Search for products.

Filter menu items.

Shopping cart and ordering

Add products to the shopping cart.

Adjust item quantities.

Review the cart before checkout.

Submit orders through the Supabase backend.

Support guest checkout without requiring a registered account.

User authentication

Register an account.

Sign in using email and password.

Sign out.

Maintain authentication sessions through Supabase.

Additional content

Browse café blog content.

Access raffle functionality.

View help and frequently asked questions.

Access café information.

Administrative functionality

The application also includes an administrative section with functionality for viewing and managing different parts of the café platform.

This includes:

Overview and order information.

Menu management.

Order management.

Blog management.

FAQ management.

Café information.

Raffle management.

Reports and statistics.

## Innovative Features added
Guest checkout through a database function

One of the important additions is the ability to submit an order without requiring the customer to register or sign in.

This functionality uses a PostgreSQL function called create_guest_order in Supabase. The function accepts customer and order information, validates the submitted items, checks product availability and prices, calculates the order total including VAT, and creates the order and its associated order items.

This allows customers to place orders without first creating an account.

Database-driven menu

The menu retrieves information from the Supabase database instead of relying entirely on hardcoded product information.

This allows menu information to be managed through the backend and retrieved by the website through API requests.

Integrated web and Android application

Capacitor allows the existing web application to be packaged as an Android application. This means the project can provide a mobile application without having to recreate the entire website using a separate native Android interface.

Administrative order management

The administrative functionality provides a way to view customer orders and manage information associated with the café.

Dynamic administrative information

The administrative overview includes statistics and information derived from application data, allowing the administrator to see more than just static placeholder content.

# Design Consideraations
The application uses a café-inspired visual design intended to create a comfortable and consistent experience.

Colour scheme and typography

The design uses a warm, cream-based colour palette, including the background colour #fbf5ed.

The typography combines:

Playfair for a more distinctive editorial style.

DM Mono and sans-serif typography for supporting information and interface elements.

The intention was to create a design that feels appropriate for a café rather than a generic business management application.

Usability and navigation

The application separates functionality into different sections so that users can find the features they need.

The customer-facing sections focus on browsing, ordering and accessing café information. Administrative functionality is separated into its own area.

The interface also considers responsive layouts so that the website can be used on different screen sizes.

Consistency

The web and mobile versions share the same general visual identity and application functionality. Capacitor allows the mobile application to use the existing web interface.

Functional design

The application was developed with the intention that buttons and interface elements should perform meaningful actions. This includes retrieving information from the database, updating the cart and submitting orders.


## Technologies Used
Technology

Purpose

HTML5

Website structure

CSS3

Styling, layout and responsive design

JavaScript

Application functionality and interactions

Supabase

Hosted database and authentication

PostgreSQL

Database queries, functions and data management

Postman

Testing API requests

Capacitor

Integrating the website into an Android application

Kotlin

Android application source code

Git

Version control

GitHub

Source code hosting and collaboration

GitHub Actions

Automated workflow execution

Vite

Development server and production build tooling

React

Separate frontend implementation retained in the src directory

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




