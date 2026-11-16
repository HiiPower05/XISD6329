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

The Happy Hippo Café application provides a range of customer-facing and administrative features designed to support the café's digital operations.

### 1. Customer Functionality

**Menu Browsing**
- View available menu items.
- Browse products by category.
- Search for specific products.
- Filter menu items.

**Shopping Cart and Ordering**
- Add products to the shopping cart.
- Adjust item quantities.
- Review cart contents before checkout.
- Submit orders through the Supabase backend.
- Complete guest checkout without requiring a registered account.

**User Authentication**
- Register a new account.
- Sign in using an email address and password.
- Sign out securely.
- Maintain authentication sessions through Supabase.

**Additional Content and Features**
- Browse café blog articles and content.
- Access raffle functionality.
- View help information and frequently asked questions (FAQs).
- Access general café information.

### 2. Administrative Functionality

The application includes a dedicated administrative section that allows authorised administrators to view and manage different aspects of the café platform.

The administrative features include:

- **Overview:** View general application information and order summaries.
- **Menu Management:** Manage café menu items and products.
- **Order Management:** View and manage customer orders.
- **Blog Management:** Manage blog articles and content.
- **FAQ Management:** Manage frequently asked questions and answers.
- **Café Information:** Update information about the café.
- **Raffle Management:** Manage raffle-related information and entries.
- **Reports and Statistics:** View information and statistics relating to café operations.

These features provide customers with the functionality needed to interact with the café while giving administrators a centralised area for managing the platform.

## Innovative Features Added

The application includes several features that extend its functionality beyond a basic café website.

### 1. Guest Checkout Through a Database Function

One of the key additions is the ability for customers to submit orders without registering or signing in.

This functionality uses a PostgreSQL database function called `create_guest_order`, hosted through Supabase. The function:

- Accepts customer details and order information.
- Validates submitted order items.
- Checks product availability and pricing.
- Calculates the order total, including VAT.
- Creates the order and its associated order items in the database.

This provides customers with a more convenient ordering experience by removing the requirement to create an account before placing an order.

### 2. Database-Driven Menu

The menu retrieves product information from the Supabase database rather than relying entirely on hardcoded information.

This allows menu information to be managed through the backend and retrieved by the website through API requests. It also provides a foundation for administrators to maintain menu information without having to modify the application's frontend code.

### 3. Integrated Web and Android Application

Capacitor was used to package the existing web application as an Android application.

This approach allows the project to provide a mobile application while reusing the existing website's interface and functionality, rather than recreating the entire application using a separate native Android interface.

### 4. Administrative Order Management

The administrative section provides functionality for viewing customer orders and managing information associated with the café.

This gives administrators a centralised area to oversee important aspects of the platform rather than relying exclusively on the customer-facing interface.

### 5. Dynamic Administrative Information

The administrative overview includes statistics and information derived from application data.

This provides administrators with a more useful overview of café operations, allowing them to view information such as order summaries and other relevant statistics instead of relying entirely on static placeholder content.

---

## Design Considerations

The application uses a café-inspired visual design intended to create a comfortable, accessible, and consistent user experience.

### 1. Colour Scheme and Typography

The design uses a warm, cream-based colour palette, including the background colour `#fbf5ed`.

The typography combines:

- **Playfair:** Used to create a distinctive editorial style and reinforce the café's visual identity.
- **DM Mono and Sans-serif:** Used for supporting information, navigation, and interface elements to maintain readability.

The intention was to create an interface that feels appropriate for a café rather than resembling a generic business management application.

### 2. Usability and Navigation

The application separates its functionality into different sections so that customers and administrators can easily find the features they need.

Customer-facing sections focus on browsing menu items, placing orders, and accessing café information. Administrative functionality is separated into its own section to distinguish management tasks from the customer experience.

The interface also considers responsive layouts, allowing the website to be accessed on different screen sizes.

### 3. Design Consistency

The web and mobile versions share the same general visual identity and application functionality.

Capacitor allows the existing web interface to be reused within the Android application, helping maintain consistency between the two platforms and reducing the need to develop separate interfaces.

### 4. Functional Design

The application was developed with the intention that buttons and interface elements should perform meaningful actions rather than simply serve as visual elements.

Examples include retrieving information from the database, updating shopping cart contents, submitting orders, and accessing administrative functionality.

This approach helps make the application more interactive and practical for customers and administrators.

---

## Technologies Used

The following technologies and tools were used during the development of the Happy Hippo Café application.

| Technology | Purpose |
|---|---|
| HTML5 | Provides the structure and content of the website. |
| CSS3 | Handles styling, layouts, and responsive design. |
| JavaScript | Implements application functionality and user interactions. |
| Supabase | Provides the hosted database and authentication services. |
| PostgreSQL | Handles database queries, functions, and data management. |
| Postman | Used to test API requests and responses. |
| Capacitor | Packages the web application as an Android application. |
| Kotlin | Used for the Android application source code and native Android integration. |
| Git | Provides version control and tracks changes throughout development. |
| GitHub | Hosts the source code and supports collaboration. |
| GitHub Actions | Automates development workflows through configured actions. |
| Vite | Provides the development server and production build tooling. |
| React | Supports a separate frontend implementation retained in the `src` directory. |

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




