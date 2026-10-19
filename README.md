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

Open `index.html` in a browser. No Node.js, npm, build step, or server is required. Public browsing works without an account. Use **Continue as Guest** to browse, or register/sign in with email or choose the simulated Google flow. Customer navigation includes Home, Browse, Blog, Raffle, Help, Orders, and Account settings.

Checkout requires a customer session. A guest cart is preserved while signing in; placing an order creates a clearly labelled local demo order and does not contact the café or process payment. The Account settings screen includes appearance, notification preferences, name editing, security placeholders, legal placeholders, and support actions.

For the local prototype Admin sign-in, use `Admin@email.com` / `Password123`. The credentials are declared once in `website/js/script.js` as `PROTOTYPE_ADMIN`; change them there for local testing. Admin routes and actions require a separate in-memory admin session, and Admin is not shown in customer navigation.

Cart, appearance, notification preferences, and the customer's name are stored locally. Mock email accounts and their password checks exist only in memory for the current page session; the signed-in customer ID and authentication method use session storage. Google sign-in, password changes, support reports, admin analytics, notifications, checkout, and orders are simulations, not connected services.

**Security:** the admin credentials and authorization are client-side prototype controls and can be discovered or bypassed by someone controlling the browser.Must be replaced  with environment-managed credentials, server-validated roles, and a real authentication provider before any  public deployment. Real Google OAuth, email delivery, password reset, payments, order processing, and push/email notifications are not configured.

## Frontend files

- `index.html`: Vanilla app entry point.
- `website/css/style.css`: Shared layout and responsive styling.
- `website/js/script.js`: Screen templates, hash navigation, demo data, and interactions.
- `src/`: Original React/Figma export retained as reference; it is not loaded by the vanilla app.