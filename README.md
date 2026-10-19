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

## App entry points

`mobile-app/web` is the UI bundle used by Capacitor (`mobile-app/capacitor.config.ts` sets `webDir: 'web'`). Open `mobile-app/web/index.html` to preview that same UI in a browser. Root `index.html` is a separate standalone web preview; root `src/` is a separate React implementation and is not used by Capacitor.

Run the native packaging sync from `mobile-app` after installing its dependencies with `npx cap sync android`; Android Studio is required to build/run the native app. The Capacitor bundle loads Supabase JS and initializes the client in `mobile-app/web/website/js/supabase-client.js`.

## Authentication and data

Email registration/sign-in, session restoration, sign-out, password recovery, and Google OAuth now use Supabase Auth in the Capacitor bundle. Google OAuth must be enabled in Supabase and its redirect origins configured for local development, hosted web, and Capacitor. The customer's name is stored as Supabase Auth `user_metadata.name`; email remains part of the Auth identity, not a separate customer profile. The UI derives admin access from the server-issued `app_metadata.role === 'admin'` claim. Assign that role only from a trusted server/admin process, never from client-editable user metadata.

The settings and circular theme transition are local UI preferences. Cart, raffle entries, notification preferences, prototype orders, and menu availability remain browser-local demo data. Checkout does not submit a real order or payment. No SQL migrations or database schema were changed by the UI integration. Before persisting orders or other business data, agree on the schema and enforce access through Supabase RLS and trusted server-side operations. Admin route hiding is only a UI control; database security must be enforced by RLS.

**Security:** the Supabase publishable/anon key is intended for client use only when RLS is correctly configured. Never put a service-role key or administrator password in the web bundle. Database access must deny unauthorized users even if they bypass the interface.

## Frontend files

- `mobile-app/web/index.html`: Capacitor UI entry point.
- `mobile-app/web/website/js/script.js`: Capacitor customer UI, theme, settings, and auth integration.
- `mobile-app/web/website/js/supabase-client.js`: Supabase client initialization using the publishable key.
- Root `index.html` and `website/`: Separate browser preview; keep its changes synchronized intentionally if it remains in use.
- `src/`: Separate React implementation, not wired to the Capacitor web bundle.