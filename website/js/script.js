const app = document.querySelector("#app");
const products = [
	{ id: 1, name: "Caramel Macchiato", price: 89.99, description: "Espresso with vanilla-flavoured syrup and steamed milk.", image: "☕", category: "Coffee" },
	{ id: 2, name: "Iced Latte", price: 79.99, description: "Smooth espresso over ice with cold milk.", image: "🧊", category: "Coffee" },
	{ id: 3, name: "Cappuccino", price: 74.99, description: "Espresso with silky steamed milk foam.", image: "☕", category: "Coffee" },
	{ id: 4, name: "Mocha", price: 84.99, description: "Espresso with chocolate and steamed milk.", image: "☕", category: "Coffee" },
	{ id: 5, name: "Americano", price: 64.99, description: "Rich espresso softened with hot water.", image: "☕", category: "Coffee" },
	{ id: 6, name: "Flat White", price: 79.99, description: "A double espresso with silky microfoam.", image: "☕", category: "Coffee" },
	{ id: 7, name: "Blueberry Muffin", price: 54.99, description: "Fresh-baked with real blueberries.", image: "🧁", category: "Pastries" },
	{ id: 8, name: "Croissant", price: 44.99, description: "Buttery, flaky, and baked fresh every morning.", image: "🥐", category: "Pastries" },
	{ id: 9, name: "Chocolate Donut", price: 39.99, description: "A soft glazed donut with chocolate frosting.", image: "🍩", category: "Pastries" },
	{ id: 10, name: "Cinnamon Roll", price: 59.99, description: "Warm cinnamon roll with cream cheese icing.", image: "🧁", category: "Pastries" },
	{ id: 11, name: "Chicken & Avocado Sandwich", price: 94.99, description: "Fresh chicken and avocado on whole grain.", image: "🥪", category: "Snacks" },
	{ id: 12, name: "Toasted Bagel", price: 49.99, description: "Toasted and served with cream cheese.", image: "🥯", category: "Snacks" },
	{ id: 13, name: "Chocolate Chip Cookie", price: 34.99, description: "A crisp-edged cookie with chocolate chips.", image: "🍪", category: "Snacks" },
	{ id: 14, name: "Soft Pretzel", price: 44.99, description: "Warm, soft, and lightly salted.", image: "🥨", category: "Snacks" },
	{ id: 15, name: "Orange Juice", price: 49.99, description: "Freshly squeezed orange juice.", image: "🧃", category: "Beverages" },
	{ id: 16, name: "Berry Smoothie", price: 69.99, description: "A chilled blend of mixed berries.", image: "🥤", category: "Beverages" },
	{ id: 17, name: "Peach Iced Tea", price: 54.99, description: "Refreshing black tea with peach.", image: "🧋", category: "Beverages" },
	{ id: 18, name: "Hot Chocolate", price: 64.99, description: "Rich hot chocolate finished with cream.", image: "🍫", category: "Beverages" },
];

const posts = [
	{ id: 1, title: "The Art of Latte Art: Mastering the Perfect Pour", date: "May 10, 2026", author: "Sarah Johnson", category: "Coffee Tips", excerpt: "How our baristas craft intricate rosetta and tulip patterns in every cup.", image: "photo-1541167760496-1628856ab772", featured: true },
	{ id: 2, title: "New Summer Menu Landing June 1st", date: "May 8, 2026", author: "Michael Chen", category: "News", excerpt: "Tropical smoothies, passionfruit iced lattes, and coconut muffins — summer is here.", image: "photo-1525385133512-2f3bdd039054", featured: true },
	{ id: 3, title: "Meet Our Coffee Farmers: A Journey to Ethiopia", date: "May 5, 2026", author: "Emma Williams", category: "Sustainability", excerpt: "The story behind our ethically sourced Yirgacheffe beans.", image: "photo-1447933601403-0c6688de566e", featured: false },
	{ id: 4, title: "Customer Spotlight: Our Favourite Regulars", date: "May 3, 2026", author: "David Brown", category: "Community", excerpt: "Heartwarming stories from the people who make our café feel like home.", image: "photo-1521017432531-fbd92d768814", featured: false },
	{ id: 5, title: "A Day in the Life of a Barista", date: "April 30, 2026", author: "Lisa Anderson", category: "Coffee Tips", excerpt: "From the first roast check to the last cappuccino — a day behind the counter.", image: "photo-1509042239860-f550ce710b93", featured: false },
	{ id: 6, title: "Eco-Friendly Packaging: Our Green Initiative", date: "April 28, 2026", author: "Emma Williams", category: "Sustainability", excerpt: "A look at our compostable cups and commitment to reducing waste.", image: "photo-1606787366850-de6330128bfc", featured: false },
	{ id: 7, title: "Weekend Brunch Specials Now Available", date: "April 25, 2026", author: "Michael Chen", category: "News", excerpt: "Avo toast, fluffy pancakes, and free-range eggs every Saturday and Sunday.", image: "photo-1533089860892-a7c6f0a88666", featured: false },
	{ id: 8, title: "Coffee Bean Roasting 101", date: "April 22, 2026", author: "Sarah Johnson", category: "Coffee Tips", excerpt: "How roast levels change flavour from citrus to chocolate.", image: "photo-1497935586047-9395dc012d1b", featured: false },
];

const raffles = [
	{ id: 1, title: "Grand Prize Coffee Package", description: "Win a month's supply of premium single-origin beans and an espresso machine.", prize: "Espresso machine + 30-day coffee supply", value: 15000, image: "🏆", ends: "2026-12-20", tickets: 1, color: "#d4a847" },
	{ id: 2, title: "Weekend Brunch for Two", description: "Enjoy a luxurious weekend brunch for you and someone special — on the house.", prize: "Brunch voucher for two, including drinks", value: 800, image: "🍽️", ends: "2026-11-18", tickets: 1, color: "#4a9b6f" },
	{ id: 3, title: "Free Coffee for a Year", description: "One free barista-made coffee every day for an entire year.", prize: "365 daily coffee vouchers", value: 25000, image: "☕", ends: "2026-12-01", tickets: 2, color: "#c8591a" },
];

const faqGroups = [
	{ name: "Ordering & Payment", icon: "🛒", questions: [["How do I place an order online?", "Browse the menu, add items to your cart, then review your order from the shopping bag. Checkout is a UI demo until payment services are connected."], ["What payment methods do you accept?", "The design supports EFT, card, and cash on collection. Payment processing will be connected by the backend."], ["Can I modify or cancel my order?", "Order management will be available when ordering services are connected."], ["Is there a minimum order amount?", "There is no minimum for in-store pickup in this demo."]] },
	{ name: "Menu & Products", icon: "☕", questions: [["Do you have options for dietary restrictions?", "The menu includes dairy-free, vegan, and gluten-conscious options as product data is completed."], ["Where are your coffee beans sourced from?", "Our concept menu features ethically sourced beans from Ethiopia, Colombia, and Malawi."], ["How fresh are your pastries?", "Our café concept bakes pastries fresh in-house every morning."], ["Do you offer seasonal specials?", "Seasonal specials are announced on the Blog page."]] },
	{ name: "Raffle & Loyalty", icon: "🎟️", questions: [["How do I earn raffle entries?", "The current UI demo starts with five sample tickets. Real ticket balances will come from the backend."], ["When are raffle winners announced?", "The sample raffles show end dates; winner announcements will be managed when raffle services are connected."], ["Do my entry tickets expire?", "Ticket expiration rules will be managed by the backend."]] },
	{ name: "Café & Events", icon: "🏡", questions: [["Can I book the café for a private event?", "Email hello@happyhippocafe.co.za to discuss an event booking."], ["Do you have free Wi-Fi?", "Yes, complimentary Wi-Fi is available to café customers."], ["Is there parking available?", "There are dedicated parking bays in front of the café."]] },
];

const adminOrders = [
	{ id: 1001, customer: "Thabo Nkosi", items: "Caramel Macchiato, Blueberry Muffin", total: 144.98, status: "Preparing", time: "10:30" },
	{ id: 1002, customer: "Sarah van der Berg", items: "Iced Latte, Cookie", total: 114.98, status: "Ready", time: "10:25" },
	{ id: 1003, customer: "Mike Davis", items: "Americano, Croissant, Sandwich", total: 204.97, status: "Pending", time: "10:35" },
	{ id: 1004, customer: "Emma Wilson", items: "Cappuccino", total: 74.99, status: "Completed", time: "10:15" },
];

const PROTOTYPE_ADMIN = { email: "Admin@email.com", password: "Password123" };
const APP_VERSION = "Prototype 0.2.0";

const state = {
	cart: readStore("hh_cart", []),
	category: "All",
	menuSearch: "",
	blogCategory: "All",
	faqCategory: "All",
	adminTab: "Overview",
	mobileNav: false,
	theme: readStore("hh_theme", "system"),
	reduceMotion: readStore("hh_reduce_motion", window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false),
	settingsOpen: false,
	cartOpen: false,
	articleId: null,
	raffleEntries: readStore("hh_raffle_entries", 5),
	enteredRaffles: readStore("hh_entered_raffles", []),
	notifications: readStore("hh_notification_preferences", { orderUpdates: true, promotions: false }),
	customer: readCustomerSession(),
	adminAuthenticated: false,
	adminBusy: false,
	authMode: "signin",
	authBusy: false,
	authReturnToCheckout: readCheckoutIntent(),
	checkoutNotice: "",
	checkoutError: "",
	mockAccounts: new Map(),
	settingsSection: "account",
	supportType: "problem",
	notice: "",
};

function readStore(key, fallback) {
	try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
	catch { return fallback; }
}

function saveStore(key, value) {
	try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Local file storage may be disabled. */ }
}

function readCustomerSession() {
	try {
		const session = JSON.parse(sessionStorage.getItem("hh_customer_session") || "null");
		if (!session?.id || !["email", "google"].includes(session.method)) return null;
		const profile = JSON.parse(localStorage.getItem(`hh_profile_${session.id}`) || "null");
		return { id: session.id, method: session.method, name: profile?.name || "Café customer" };
	} catch { return null; }
}

function readCheckoutIntent() {
	try { return sessionStorage.getItem("hh_checkout_intent") === "true"; }
	catch { return false; }
}

function saveCustomerSession(id, method, name) {
	state.customer = { id, method, name };
	try { sessionStorage.setItem("hh_customer_session", JSON.stringify({ id, method })); } catch { /* Session remains available until navigation. */ }
	saveStore(`hh_profile_${id}`, { name });
}

function esc(value) {
	return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function money(value) { return `R${Number(value).toFixed(2)}`; }
function imageUrl(id, width = 900, height = 600) { return `https://images.unsplash.com/${id}?w=${width}&h=${height}&fit=crop&auto=format`; }
function route() {
	if (!location.hash || location.hash === "#" || location.hash === "#/") return "home";
	return location.hash.replace(/^#\/?/, "").split("?")[0].toLowerCase() || "home";
}
function signedIn() { return Boolean(state.customer?.id); }
function userName() { return state.customer?.name || "Guest"; }

function link(path, label, icon = "") {
	const routeName = path === "/" ? "home" : path.replace(/^\//, "");
	const active = route() === routeName;
	return `<a class="nav-link${active ? " active" : ""}" href="#${path}">${icon ? `<span aria-hidden="true">${icon}</span>` : ""}${label}</a>`;
}

function shell(content) {
	const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
	const nav = [["/", "Home", "⌂"], ["/menu", "Browse", "☕"], ["/blog", "Blog", "▤"], ["/raffle", "Raffle", "✧"], ["/help", "Help", "?"]];
	const accountLinks = signedIn() ? `<a class="nav-link${route() === "orders" ? " active" : ""}" href="#/orders"><span aria-hidden="true">▤</span>Orders</a><a class="nav-link${route() === "settings" ? " active" : ""}" href="#/settings"><span aria-hidden="true">♙</span>Account</a>` : `<a class="nav-link" href="#/login">Sign in</a>`;
	return `<div class="site-shell">
		<header class="site-header"><div class="header-inner">
			<a class="brand" href="#/" aria-label="Happy Hippo Café home"><span class="brand-mark">🦛</span><span class="brand-name">Happy Hippo<small>Café</small></span></a>
			<nav class="desktop-nav" aria-label="Main navigation">${nav.map(([path, name, icon]) => link(path, name, icon)).join("")}${accountLinks}</nav>
			<div class="header-actions"><span class="greeting">Hi, <strong>${esc(userName())}</strong></span>
				<div class="settings-control"><button class="icon-button settings-trigger" data-action="settings-toggle" aria-label="Settings" aria-haspopup="true" aria-expanded="${state.settingsOpen}" title="Settings">⚙</button>
					${state.settingsOpen ? `<section class="settings-menu" aria-label="Settings"><h2>Settings</h2><div class="settings-row"><span><strong>Appearance</strong><small>Choose your café theme</small></span><button class="theme-choice" data-action="theme-toggle" aria-label="Switch to ${state.theme === "dark" ? "light" : "dark"} theme"><span aria-hidden="true">${state.theme === "dark" ? "☀" : "☾"}</span>${state.theme === "dark" ? "Light" : "Dark"}</button></div><label class="settings-row settings-motion"><span><strong>Reduce motion</strong><small>Minimise animated effects</small></span><input type="checkbox" data-action="reduce-motion" ${state.reduceMotion ? "checked" : ""}></label></section>` : ""}
				</div>
				<button class="icon-button cart-trigger" data-action="cart-open" aria-label="Open shopping cart">♧${count ? `<span class="cart-count">${count}</span>` : ""}</button>
				${signedIn() ? `<button class="signout-button" data-action="signout" aria-label="Sign out">↗ <span>Sign out</span></button>` : `<a class="signout-button" href="#/login">Sign in</a>`}
				<button class="icon-button mobile-nav-trigger" data-action="mobile-nav" aria-label="Open navigation">☰</button>
			</div>
		</div>${state.mobileNav ? `<nav class="mobile-nav" aria-label="Mobile navigation">${nav.map(([path, name, icon]) => link(path, name, icon)).join("")}${accountLinks}${signedIn() ? `<button data-action="signout">↗ Sign out</button>` : ""}</nav>` : ""}</header>
		<main>${content}</main>
		<footer class="site-footer"><a class="footer-brand" href="#/">🦛 Happy Hippo Café</a><p>12 Baobab Street, Stellenbosch · Mon–Fri 7AM–7PM · Sat–Sun 8AM–5PM</p><small>© 2026 Happy Hippo Café</small></footer>
		${state.cartOpen ? cartPanel() : ""}${state.articleId ? articleDialog() : ""}${state.notice ? `<div class="toast" role="status">${esc(state.notice)}</div>` : ""}
	</div>`;
}

function loginPage() {
	return `<main class="login-page"><section class="login-story"><img class="login-photo" src="${imageUrl("photo-1554118811-1e0d58224f24", 1400, 1800)}" alt="Warm café interior with wooden tables and soft lighting"><div class="login-photo-shade"></div><div class="login-story-copy"><span class="login-mark">🦛</span><p class="eyebrow">A little comfort, freshly made</p><h1>Happy Hippo<br>Café</h1><p>Where every sip tells a story. Sourced with love, served with soul, right here in South Africa.</p><div class="login-stats"><div><strong>4.9★</strong><span>Customer rating</span></div><div><strong>12k+</strong><span>Happy customers</span></div><div><strong>18+</strong><span>Menu favourites</span></div></div></div><span class="photo-caption">A warm seat is waiting</span></section>
		<section class="login-panel"><a class="login-mobile-brand" href="#/"><span>🦛</span> Happy Hippo Café</a><div class="login-form-wrap"><p class="eyebrow">Your table is ready</p><h2>${state.authMode === "register" ? "Create your account" : "Welcome back"}</h2><p class="login-intro">${state.authReturnToCheckout ? "Sign in to place your order. Your selected items will be saved while you sign in." : "Sign in to order, or keep exploring as a guest."}</p>
			${state.notice ? `<p class="inline-notice" role="status">${esc(state.notice)}</p>` : ""}
			<form id="login-form">${state.authMode === "register" ? `<label for="customer-name">Name</label><input id="customer-name" name="name" type="text" maxlength="60" autocomplete="name" required>` : ""}<label for="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required><label for="password">Password</label><input id="password" name="password" type="password" minlength="8" placeholder="At least 8 characters" autocomplete="${state.authMode === "register" ? "new-password" : "current-password"}" required><button class="primary-button login-submit" type="submit" ${state.authBusy ? "disabled" : ""}>${state.authBusy ? "Checking…" : state.authMode === "register" ? "Create account" : "Continue with Email"}</button></form>
			<button class="secondary-button full-width auth-google" data-action="google-signin" ${state.authBusy ? "disabled" : ""}>Continue with Google</button><div class="or-divider"><span>or</span></div><button class="secondary-button guest-button" data-action="guest">Continue as Guest</button>
			<p class="create-account">${state.authMode === "register" ? "Already registered?" : "New to the café?"} <button class="text-action" data-action="create-account">${state.authMode === "register" ? "Sign in" : "Create an account"}</button></p><p class="demo-caption">Email and Google authentication are simulated locally for this prototype.</p><a class="admin-entry" href="#/admin-login">Admin sign-in</a>
		</div><footer class="login-footer">© 2026 Happy Hippo Café</footer></section></main>`;
}

function checkoutPage() {
	const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const tax = subtotal * 0.15;
	return `<section class="page-container narrow-container"><div class="page-heading"><p class="eyebrow">Happy Hippo Café</p><h1>Review your order</h1><p>Pickup checkout · Demo only, no payment will be taken.</p></div>${state.checkoutNotice ? `<p class="inline-notice" role="status">${esc(state.checkoutNotice)}</p>` : ""}${state.checkoutError ? `<p class="form-message form-error" role="alert">${esc(state.checkoutError)}</p>` : ""}${state.cart.length ? `<section class="checkout-summary"><h2>Your items</h2>${state.cart.map((item) => `<div class="checkout-line"><span>${item.quantity} × ${esc(item.name)}</span><strong>${money(item.quantity * item.price)}</strong></div>`).join("")}<div class="checkout-line"><span>VAT (15%)</span><strong>${money(tax)}</strong></div><div class="checkout-line checkout-total"><strong>Total</strong><strong>${money(subtotal + tax)}</strong></div><p class="demo-caption">Signed in as ${esc(userName())}. This simulated checkout does not contact the café.</p><button class="primary-button full-width" data-action="place-order" ${state.checkoutBusy ? "disabled" : ""}>${state.checkoutBusy ? "Preparing your demo order…" : "Place demo order"}</button></section>` : `<div class="empty-state"><h2>Your cart is empty</h2><p>Browse the menu to add something delicious.</p><a href="#/menu" class="primary-button">Browse menu</a></div>`}</section>`;
}

function settingsPage() {
	const customer = state.customer;
	const notifications = state.notifications;
	const section = state.settingsSection;
	const tabs = [["account", "Account"], ["appearance", "Appearance"], ["notifications", "Notifications"], ["privacy", "Privacy & security"], ["preferences", "App preferences"], ["support", "Support"]];
	let content = "";
	if (section === "account") content = `<section class="settings-panel"><h2>Account</h2><form id="settings-name-form" class="settings-form"><label for="profile-name">Name</label><div class="settings-inline"><input id="profile-name" name="name" type="text" maxlength="60" value="${esc(customer.name)}" required><button class="secondary-button" type="submit">Save name</button></div></form><p class="settings-note">Authentication method: ${customer.method === "google" ? "Google (simulated)" : "Email (simulated)"}. Only your name is saved as profile information.</p>${customer.method === "email" ? `<button class="text-action" data-action="change-password">Change password</button>` : `<p class="settings-note">Manage password and security with your Google account provider.</p>`}<div class="settings-actions"><button class="secondary-button" data-action="signout">Sign out</button><button class="text-button danger-text" data-action="delete-account">Delete account</button></div></section>`;
	else if (section === "appearance") content = `<section class="settings-panel"><h2>Appearance</h2><p>Choose how Happy Hippo Café looks on this device.</p><div class="preference-options" role="group" aria-label="Color theme">${[["light", "Light", "☀"], ["dark", "Dark", "☾"], ["system", "System default", "◐"]].map(([value, label, icon]) => `<button class="preference-option${state.theme === value ? " selected" : ""}" data-action="theme-preference" data-theme-value="${value}" aria-pressed="${state.theme === value}"><span aria-hidden="true">${icon}</span>${label}</button>`).join("")}</div><label class="settings-row settings-motion"><span><strong>Reduce motion</strong><small>Minimise animated effects</small></span><input type="checkbox" data-action="reduce-motion" ${state.reduceMotion ? "checked" : ""}></label><p class="settings-note" role="status">Theme preference saved on this device.</p></section>`;
	else if (section === "notifications") content = `<section class="settings-panel"><h2>Notifications</h2><p>These preferences control simulated in-app notifications only. No emails or push alerts are sent.</p><label class="settings-row"><span><strong>Order updates</strong><small>Show updates for your demo orders</small></span><input type="checkbox" data-action="notification-toggle" data-preference="orderUpdates" ${notifications.orderUpdates ? "checked" : ""}></label><label class="settings-row"><span><strong>Promotional notifications</strong><small>Allow sample café offer alerts</small></span><input type="checkbox" data-action="notification-toggle" data-preference="promotions" ${notifications.promotions ? "checked" : ""}></label><p class="settings-note" role="status">Preferences are saved on this device.</p></section>`;
	else if (section === "privacy") content = `<section class="settings-panel"><h2>Privacy &amp; security</h2><p>Prototype identity uses an in-memory mock authentication flow. Your profile stores only your name.</p><p>Authentication method: ${customer.method === "google" ? "Google (simulated)" : "Email (simulated)"}</p>${customer.method === "email" ? `<button class="secondary-button" data-action="change-password">Change password</button>` : `<p class="settings-note">For password changes and provider security, use your Google account settings.</p>`}<div class="settings-links"><a href="#/privacy">Privacy policy</a><a href="#/terms">Terms and conditions</a></div></section>`;
	else if (section === "preferences") content = `<section class="settings-panel"><h2>App preferences</h2><div class="settings-row"><span><strong>Language</strong><small>Currently supported</small></span><span>English</span></div><div class="settings-row"><span><strong>Currency</strong><small>Menu prices and checkout display</small></span><span>ZAR · South African rand</span></div><p class="settings-note">${APP_VERSION} · Web prototype</p></section>`;
	else content = `<section class="settings-panel"><h2>Support</h2><p>Answers to common questions are available on our <a href="#/help">Help &amp; FAQ</a> page.</p><div class="settings-actions"><a class="secondary-button" href="mailto:hello@happyhippocafe.co.za?subject=Happy%20Hippo%20support">Contact support</a><button class="secondary-button" data-action="support-form" data-type="problem">Report a problem</button></div>${state.supportOpen ? `<form id="support-form" class="settings-form"><label for="support-message">What happened?</label><textarea id="support-message" name="message" rows="4" maxlength="500" required></textarea><button class="primary-button" type="submit">Submit report</button><p class="settings-note">This report is simulated and is not sent to a server.</p></form>` : ""}</section>`;
	return `<section class="page-container settings-page"><div class="page-heading"><p class="eyebrow">Your café account</p><h1>Settings</h1><p>Manage your account and app preferences.</p></div><div class="settings-layout"><nav class="settings-tabs" aria-label="Settings sections">${tabs.map(([value, label]) => `<button class="settings-tab${section === value ? " selected" : ""}" data-action="settings-section" data-section="${value}" aria-current="${section === value ? "page" : "false"}">${label}</button>`).join("")}</nav><div>${state.notice ? `<p class="inline-notice" role="status">${esc(state.notice)}</p>` : ""}${content}</div></div></section>`;
}

function customerOrdersPage() {
	const orders = readStore("hh_orders", []).filter((order) => order.customerId === state.customer.id);
	return `<section class="page-container"><div class="page-heading"><p class="eyebrow">Your account</p><h1>Your orders</h1><p>Order history from this prototype.</p></div>${state.checkoutNotice ? `<p class="inline-notice" role="status">${esc(state.checkoutNotice)}</p>` : ""}${orders.length ? `<div class="admin-panel table-scroll"><table><thead><tr><th>Order</th><th>Items</th><th>Total</th><th>Status</th></tr></thead><tbody>${orders.map((order) => `<tr><td>#${esc(order.id)}</td><td>${esc(order.items)}</td><td>${money(order.total)}</td><td>${esc(order.status)}</td></tr>`).join("")}</tbody></table></div>` : `<div class="empty-state"><h2>No orders yet</h2><p>Your completed demo orders will appear here.</p><a class="primary-button" href="#/menu">Browse the menu</a></div>`}</section>`;
}

function adminLoginPage() {
	return `<main class="admin-auth-page"><section class="settings-panel"><p class="eyebrow">Restricted prototype access</p><h1>Admin sign-in</h1><p>Customer accounts cannot access café management.</p>${state.adminError ? `<p class="form-message form-error" role="alert">${esc(state.adminError)}</p>` : ""}<form id="admin-login-form" class="settings-form"><label for="admin-email">Admin email</label><input id="admin-email" name="email" type="email" autocomplete="username" required><label for="admin-password">Password</label><input id="admin-password" name="password" type="password" autocomplete="current-password" required><button class="primary-button" type="submit" ${state.adminBusy ? "disabled" : ""}>${state.adminBusy ? "Checking…" : "Sign in to admin"}</button></form><p class="demo-caption">Local prototype credentials are configured once in the app source. This client-side demo is not production security.</p><a href="#/">Return to café</a></section></main>`;
}

function adminDashboardPage() {
	const tabs = [["Overview", "Dashboard"], ["Products", "Products"], ["Orders", "Orders"], ["Customers", "Customers"], ["Settings", "Prototype settings"]];
	let content = "";
	if (state.adminTab === "Products") content = `<section class="admin-panel"><h2>Menu products</h2><div class="table-scroll"><table><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Availability</th><th></th></tr></thead><tbody>${products.map((product) => { const unavailable = readStore("hh_unavailable_products", []).includes(product.id); return `<tr><td>${esc(product.name)}</td><td>${esc(product.category)}</td><td>${money(product.price)}</td><td>${unavailable ? "Unavailable" : "Available"}</td><td><button class="text-action" data-action="product-availability" data-id="${product.id}">${unavailable ? "Restore" : "Mark unavailable"}</button></td></tr>`; }).join("")}</tbody></table></div></section>`;
	else if (state.adminTab === "Orders") content = `<section class="admin-panel"><h2>Recent orders <small>Includes simulated prototype orders</small></h2>${ordersTable(true)}</section>`;
	else if (state.adminTab === "Customers") { const names = ["Thabo Nkosi", "Sarah van der Berg", "Mike Davis", "Emma Wilson", ...readProfileNames()]; content = `<section class="admin-panel"><h2>Customer names</h2><p class="settings-note">Only names are shown. This is fictional and local prototype data.</p>${names.map((name) => `<div class="admin-list-row">${esc(name)}</div>`).join("")}</section>`; }
	else if (state.adminTab === "Settings") content = `<section class="admin-panel"><h2>Prototype content</h2><label class="settings-row"><span><strong>Show weekly promotion</strong><small>Controls the Home page offer banner</small></span><input type="checkbox" data-action="promo-toggle" ${readStore("hh_promo_enabled", true) ? "checked" : ""}></label><p class="settings-note">Changes affect this browser only.</p></section>`;
	else content = `<div class="stat-grid"><div class="stat-card"><span>Total customers</span><strong>${4 + readProfileNames().length}</strong><small>Sample names only</small></div><div class="stat-card"><span>Total orders</span><strong>${adminOrders.length + readStore("hh_orders", []).length}</strong><small>Includes demo orders</small></div><div class="stat-card"><span>Menu products</span><strong>${products.length}</strong><small>Local menu data</small></div><div class="stat-card"><span>Reporting</span><strong>Simulated</strong><small>No backend data</small></div></div><section class="admin-panel"><h2>Recent orders</h2>${ordersTable(true)}</section>`;
	return `<div class="admin-shell"><header class="admin-header"><a class="brand" href="#/admin" aria-label="Admin dashboard"><span class="brand-mark">🦛</span><span class="brand-name">Happy Hippo<small>Admin</small></span></a><span class="admin-session-label">Prototype administrator</span><button class="signout-button" data-action="admin-signout">↗ Sign out</button></header><main class="page-container"><div class="page-heading"><p class="eyebrow">Prototype management</p><h1>${state.adminTab === "Overview" ? "Dashboard" : esc(state.adminTab)}</h1><p>Fictional local data. Management changes are only stored in this browser.</p></div><nav class="admin-tabs" aria-label="Admin navigation">${tabs.map(([tab, label]) => `<button class="admin-tab${state.adminTab === tab ? " selected" : ""}" data-action="admin-tab" data-tab="${tab}">${label}</button>`).join("")}</nav>${content}</main></div>`;
}

function readProfileNames() {
	const names = [];
	try { for (let index = 0; index < localStorage.length; index += 1) { const key = localStorage.key(index); if (!key?.startsWith("hh_profile_")) continue; const name = JSON.parse(localStorage.getItem(key) || "null")?.name; if (name) names.push(name); } } catch { /* Profile list is optional in private browsing. */ }
	return names;
}

function legalPage(type) {
	const privacy = type === "privacy";
	return `<section class="page-container narrow-container"><div class="page-heading"><p class="eyebrow">Happy Hippo Café</p><h1>${privacy ? "Privacy policy" : "Terms and conditions"}</h1></div><section class="settings-panel"><p>This placeholder is for the Happy Hippo Café prototype. It is not a legal document.</p><p>${privacy ? "This local prototype saves your selected appearance, notification preferences, cart, and customer name. Email and password are used only during the simulated sign-in flow and are not saved in your profile." : "Menu browsing, checkout, payments, raffles, and account services shown here are simulated. No real order, payment, or notification is processed."}</p><a href="#/settings">Back to settings</a></section></section>`;
}

function supportPage() { state.settingsSection = "support"; return settingsPage(); }

function productCard(item, compact = false) {
	const inCart = state.cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0;
	const unavailable = isProductUnavailable(item.id);
	return `<article class="product-card${compact ? " compact" : ""}"><div class="product-visual"><span>${item.image}</span>${inCart ? `<small class="product-quantity">${inCart} in cart</small>` : ""}</div><div class="product-info"><p class="category-label">${esc(item.category)}</p><h3>${esc(item.name)}</h3><p class="product-description">${esc(item.description)}</p><div class="product-bottom"><strong>${money(item.price)}</strong><button class="small-primary" data-action="add-cart" data-id="${item.id}" ${unavailable ? "disabled" : ""}>${unavailable ? "Unavailable" : "Add to cart"}</button></div></div></article>`;
}

function isProductUnavailable(productId) { return readStore("hh_unavailable_products", []).includes(productId); }

function homePage() {
	const featured = products.filter((item) => !isProductUnavailable(item.id)).slice(0, 4);
	const previews = posts.slice(0, 3);
	return `<section class="home-hero"><img src="${imageUrl("photo-1511920170033-f8396924c348", 1800, 800)}" alt="Sunlit coffee and a freshly made espresso"><div class="hero-shade"></div><div class="hero-copy"><p class="eyebrow">Stellenbosch · Est. 2018</p><h1>Your neighbourhood<br><span>happy place.</span></h1><p>Fresh coffee, baked-in-house pastries, and a warm welcome — every single day.</p><div class="button-row"><a class="primary-button" href="#/menu">☕ Order now</a><a class="outline-button" href="#/raffle">View raffles</a></div></div></section>
		<section class="info-strip"><span>◷ Mon–Fri 7AM–7PM · Sat–Sun 8AM–5PM</span><span>⌖ 12 Baobab Street, Stellenbosch</span><span class="rating">★★★★★ <b>4.9 · 1 200+ reviews</b></span></section>
		${readStore("hh_promo_enabled", true) ? `<section class="content-section promo"><div><span class="promo-tag">This week only</span><h2>Buy 2, Get 1 Free</h2><p>On all beverages. No code needed — just add three to cart.</p><a class="primary-button" href="#/menu">Shop the offer <span>→</span></a></div><div class="promo-art" aria-hidden="true">☕</div></section>` : ""}
		<section class="content-section"><div class="section-heading"><div><p class="eyebrow">Made fresh every day</p><h2>Fan favourites</h2></div><a href="#/menu" class="inline-link">Full menu →</a></div><div class="product-grid home-products">${featured.map((item) => productCard(item, true)).join("")}</div></section>
		<section class="content-section blog-preview"><div class="section-heading"><div><p class="eyebrow">Stories from behind the counter</p><h2>From the blog</h2></div><a href="#/blog" class="inline-link">All posts →</a></div><div class="blog-grid">${previews.map(postCard).join("")}</div></section>`;
}

function menuPage() {
	const categories = ["All", "Coffee", "Pastries", "Snacks", "Beverages"];
	const query = state.menuSearch.toLowerCase();
	const filtered = products.filter((item) => !isProductUnavailable(item.id) && (state.category === "All" || item.category === state.category) && `${item.name} ${item.description}`.toLowerCase().includes(query));
	return `<section class="page-container"><div class="page-heading"><p class="eyebrow">Happy Hippo Café</p><h1>Our menu</h1><p>${filtered.length} items · All prices in ZAR incl. VAT</p></div><div class="menu-tools"><label class="search-field"><span>⌕</span><input name="menu-search" type="search" value="${esc(state.menuSearch)}" placeholder="Search items..." aria-label="Search menu"></label><span class="results-count">${filtered.length} results</span></div><div class="filter-row">${categories.map((name) => `<button class="filter-chip${state.category === name ? " selected" : ""}" data-action="menu-category" data-category="${name}">${name}</button>`).join("")}</div>${filtered.length ? `<div class="product-grid">${filtered.map((item) => productCard(item)).join("")}</div>` : `<div class="empty-state"><span>⌕</span><h2>Nothing found</h2><p>Try a different keyword or category.</p></div>`}</section>`;
}

function postCard(post) {
	return `<article class="blog-card"><button class="blog-image" data-action="read-post" data-id="${post.id}" aria-label="Read ${esc(post.title)}"><img src="${imageUrl(post.image, 900, 560)}" alt="${esc(post.title)}" loading="lazy"></button><div class="blog-card-copy"><div class="post-meta"><span class="category-label">${esc(post.category)}</span><span>${esc(post.date)}</span></div><h3>${esc(post.title)}</h3><p>${esc(post.excerpt)}</p><button class="inline-link" data-action="read-post" data-id="${post.id}">Read more →</button></div></article>`;
}

function blogPage() {
	const categories = ["All", "News", "Coffee Tips", "Sustainability", "Community"];
	const featured = posts.filter((post) => post.featured);
	const filtered = posts.filter((post) => state.blogCategory === "All" || post.category === state.blogCategory);
	return `<section class="page-container"><div class="page-heading"><p class="eyebrow">Happy Hippo Café</p><h1>The blog</h1><p>Stories, tips, and news from behind the counter.</p></div><h2 class="subheading">Featured</h2><div class="featured-posts">${featured.map((post) => `<article class="featured-post" style="--post-image:url('${imageUrl(post.image, 1000, 620)}')"><div><span class="category-label">${esc(post.category)}</span><h2>${esc(post.title)}</h2><p>${esc(post.excerpt)}</p><button class="outline-button" data-action="read-post" data-id="${post.id}">Read story →</button></div></article>`).join("")}</div><div class="filter-row blog-filters">${categories.map((name) => `<button class="filter-chip${state.blogCategory === name ? " selected" : ""}" data-action="blog-category" data-category="${name}">${name}</button>`).join("")}</div><div class="section-heading"><h2>All posts</h2><span class="results-count">${filtered.length} stories</span></div><div class="blog-grid">${filtered.map(postCard).join("")}</div></section>`;
}

function countdown(endDate) {
	const seconds = Math.max(0, Math.floor((new Date(`${endDate}T23:59:59`).getTime() - Date.now()) / 1000));
	const days = Math.floor(seconds / 86400);
	const hours = Math.floor((seconds % 86400) / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	return `${days}d&nbsp; ${String(hours).padStart(2, "0")}h&nbsp; ${String(minutes).padStart(2, "0")}m`;
}

function rafflePage() {
	return `<section class="page-container"><div class="page-heading centered"><p class="eyebrow">A little extra excitement</p><h1>Raffle &amp; prizes</h1><p>Earn tickets with every purchase and enter to win. Good luck!</p></div><section class="ticket-banner"><div><p>Your ticket balance</p><strong>🎟️ ${state.raffleEntries} <small>tickets</small></strong></div><div class="ticket-earn"><b>Earn more tickets</b><span>🛒 1 ticket per R100 spent</span><span>👥 5 tickets for a referral</span><span>📅 1 ticket per daily check-in</span></div></section><section class="how-it-works"><h2>✧ How it works</h2><div class="steps"><div><b>1</b><span><strong>Earn entries</strong><small>Get tickets through purchases, referrals, and check-ins.</small></span></div><div><b>2</b><span><strong>Enter raffles</strong><small>Use tickets to enter any active raffle.</small></span></div><div><b>3</b><span><strong>Win prizes</strong><small>Winners are drawn when each raffle ends.</small></span></div></div></section><h2 class="subheading">Active raffles</h2><div class="raffle-grid">${raffles.map((item) => { const entered = state.enteredRaffles.includes(item.id); const canEnter = state.raffleEntries >= item.tickets; return `<article class="raffle-card"><div class="raffle-art" style="--raffle-color:${item.color}"><span>${item.image}</span><b>Active</b></div><div class="raffle-info"><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><div class="prize-detail"><small>PRIZE</small><strong>${esc(item.prize)}</strong><span>Value ${money(item.value)}</span></div><div class="countdown-row"><small>TIME LEFT</small><strong>${countdown(item.ends)}</strong></div><p class="entry-cost">Costs <b>${item.tickets} ${item.tickets === 1 ? "ticket" : "tickets"}</b> to enter.</p>${entered ? `<div class="entered-state">✓ Entered — good luck!</div>` : `<button class="primary-button full-width" data-action="enter-raffle" data-id="${item.id}" ${canEnter ? "" : "disabled"}>${canEnter ? "Enter raffle" : `Need ${item.tickets - state.raffleEntries} more ticket${item.tickets - state.raffleEntries === 1 ? "" : "s"}`}</button>`}</div></article>`; }).join("")}</div><p class="demo-caption centered">Raffle entries are sample UI data and do not submit to a live draw.</p></section>`;
}

function helpPage() {
	const groups = state.faqCategory === "All" ? faqGroups : faqGroups.filter((group) => group.name === state.faqCategory);
	return `<section class="page-container help-container"><div class="page-heading centered"><span class="help-icon">✉</span><h1>Help &amp; FAQ</h1><p>Everything you need to know about Happy Hippo Café. Can't find an answer? We're here to help.</p></div><div class="filter-row centered-filters">${["All", ...faqGroups.map((group) => group.name)].map((name) => `<button class="filter-chip${state.faqCategory === name ? " selected" : ""}" data-action="faq-category" data-category="${name}">${name}</button>`).join("")}</div><div class="faq-groups">${groups.map((group) => `<section><h2>${group.icon} ${esc(group.name)}</h2><div class="faq-list">${group.questions.map(([question, answer], index) => `<details class="faq-item" ${index === 0 && state.openFaq === question ? "open" : ""}><summary>${esc(question)}<span>⌄</span></summary><p>${esc(answer)}</p></details>`).join("")}</div></section>`).join("")}</div><section class="contact-panel"><h2>Still need help?</h2><p>Our team is ready to assist Monday–Saturday, 7 AM–7 PM.</p><div class="contact-grid"><a href="mailto:hello@happyhippocafe.co.za"><b>✉ Email us</b><span>hello@happyhippocafe.co.za</span></a><a href="tel:+27215551234"><b>☎ Call us</b><span>+27 21 555 1234</span></a><div><b>◷ Hours</b><span>Mon–Fri: 7 AM – 7 PM<br>Sat–Sun: 8 AM – 5 PM</span></div></div><p class="contact-address">⌖ 12 Baobab Street, Stellenbosch, Western Cape, 7600</p></section></section>`;
}

function ordersTable(includeActions = false) {
	const demoOrders = readStore("hh_orders", []).map((order) => ({ ...order, customer: order.customerName, time: "Demo" }));
	const allOrders = [...demoOrders, ...adminOrders];
	return `<div class="table-scroll"><table><thead><tr><th>Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Time</th>${includeActions ? "<th></th>" : ""}</tr></thead><tbody>${allOrders.map((order) => `<tr><td>#${esc(order.id)}</td><td>${esc(order.customer || "Café customer")}</td><td>${esc(order.items)}</td><td>${money(order.total)}</td><td><span class="status-pill">${esc(order.status)}</span></td><td>${esc(order.time)}</td>${includeActions && order.customerId ? `<td><button class="text-action" data-action="admin-order-ready" data-id="${esc(order.id)}">Mark ready</button></td>` : includeActions ? "<td></td>" : ""}</tr>`).join("")}</tbody></table></div>`;
}

function cartPanel() {
	const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
	const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const tax = subtotal * 0.15;
	return `<div class="drawer-backdrop" data-action="cart-close"></div><aside class="cart-drawer" aria-label="Your order"><header><div><h2>Your order</h2><p>${count} ${count === 1 ? "item" : "items"} in cart</p></div><button class="icon-button" data-action="cart-close" aria-label="Close cart">×</button></header><div class="cart-items">${state.cart.length ? state.cart.map((item) => `<article class="cart-item"><span class="cart-emoji">${item.image}</span><div class="cart-item-info"><div class="cart-item-title"><strong>${esc(item.name)}</strong><button data-action="remove-cart" data-id="${item.id}" aria-label="Remove ${esc(item.name)}">×</button></div><small>${money(item.price)} each</small><div class="cart-item-bottom"><div class="quantity-control"><button data-action="quantity" data-id="${item.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button data-action="quantity" data-id="${item.id}" data-change="1" aria-label="Increase quantity">+</button></div><strong>${money(item.price * item.quantity)}</strong></div></div></article>`).join("") : `<div class="empty-cart"><span>♧</span><h3>Your cart is empty</h3><p>Add something delicious from the menu and it will appear here.</p><a href="#/menu" class="primary-button" data-action="cart-close">Browse menu</a></div>`}</div>${state.cart.length ? `<footer class="cart-summary"><div><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div><span>VAT (15%)</span><strong>${money(tax)}</strong></div><div class="cart-total"><b>Total</b><strong>${money(subtotal + tax)}</strong></div><button class="primary-button full-width" data-action="checkout">♧ Proceed to checkout</button><small>Checkout is a UI demo. No payment is processed.</small></footer>` : ""}</aside>`;
}

function articleDialog() {
	const post = posts.find((item) => item.id === Number(state.articleId));
	if (!post) return "";
	return `<div class="modal-backdrop" data-action="close-article"><article class="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-title"><button class="modal-close" data-action="close-article" aria-label="Close story">×</button><img src="${imageUrl(post.image, 1200, 700)}" alt="${esc(post.title)}"><div><p class="category-label">${esc(post.category)} · ${esc(post.date)}</p><h2 id="article-title">${esc(post.title)}</h2><p class="article-byline">By ${esc(post.author)}</p><p>${esc(post.excerpt)} ${esc(post.excerpt)} At Happy Hippo Café, every detail is considered: from thoughtfully sourced coffee to the people and places that make each cup special. We believe a good café is built around community, craft, and a warm welcome.</p></div></article></div>`;
}

function render() {
	const resolvedTheme = state.theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : state.theme;
	document.documentElement.dataset.theme = resolvedTheme;
	let current = route();
	if (current === "admin" && !state.adminAuthenticated) { state.adminError = "Admin sign-in is required. Customer accounts cannot access management."; location.hash = "#/admin-login"; return; }
	if (current === "admin-login" && state.adminAuthenticated) { location.hash = "#/admin"; return; }
	if (current === "login" && signedIn()) { location.hash = state.authReturnToCheckout ? "#/checkout" : "#/"; return; }
	if (["checkout", "settings", "orders"].includes(current) && !signedIn()) {
		if (current === "checkout") { state.authReturnToCheckout = true; try { sessionStorage.setItem("hh_checkout_intent", "true"); } catch { /* Keep current-route intent in memory. */ } }
		state.notice = current === "checkout" ? "Sign in to place your order. Your selected items will stay in your cart." : "Sign in to view your account settings.";
		location.hash = "#/login";
		return;
	}
	const pages = { "": homePage, home: homePage, menu: menuPage, blog: blogPage, raffle: rafflePage, help: helpPage, checkout: checkoutPage, settings: settingsPage, orders: customerOrdersPage, privacy: () => legalPage("privacy"), terms: () => legalPage("terms") };
	if (current === "login") app.innerHTML = loginPage();
	else if (current === "admin-login") app.innerHTML = adminLoginPage();
	else if (current === "admin") app.innerHTML = adminDashboardPage();
	else app.innerHTML = shell((pages[current] || homePage)());
	const titles = { login: "Sign in", home: "Home", menu: "Menu", blog: "Blog", raffle: "Raffles", help: "Help", checkout: "Checkout", settings: "Settings", orders: "Your orders", privacy: "Privacy policy", terms: "Terms and conditions", "admin-login": "Admin sign-in", admin: "Admin dashboard" };
	document.title = `${titles[current] || "Home"} | Happy Hippo Café`;
}

function setTheme(preference, origin) {
	const apply = () => { state.theme = preference; state.settingsOpen = false; saveStore("hh_theme", preference); render(); };
	const startViewTransition = document.startViewTransition?.bind(document);
	if (!startViewTransition || state.reduceMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { apply(); return; }
	const bounds = origin.getBoundingClientRect();
	const x = bounds.left + bounds.width / 2;
	const y = bounds.top + bounds.height / 2;
	const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
	const root = document.documentElement;
	root.style.setProperty("--theme-reveal-x", `${x}px`);
	root.style.setProperty("--theme-reveal-y", `${y}px`);
	root.style.setProperty("--theme-reveal-radius", `${radius}px`);
	try {
		const transition = startViewTransition(apply);
		const clear = () => { root.style.removeProperty("--theme-reveal-x"); root.style.removeProperty("--theme-reveal-y"); root.style.removeProperty("--theme-reveal-radius"); };
		transition.finished.then(clear, clear);
	} catch { apply(); }
}

function toast(message) {
	state.notice = message;
	render();
	window.clearTimeout(toast.timeout);
	toast.timeout = window.setTimeout(() => { state.notice = ""; render(); }, 2800);
}

app.addEventListener("submit", (event) => {
	const form = event.target;
	if (!["login-form", "admin-login-form", "settings-name-form", "support-form"].includes(form.id)) return;
	event.preventDefault();
	const data = new FormData(form);
	if (form.id === "login-form") {
		const email = String(data.get("email") || "").trim().toLowerCase();
		const password = String(data.get("password") || "");
		const name = String(data.get("name") || "").trim();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 8 || (state.authMode === "register" && !name)) { state.notice = "Enter a valid email, a password of at least 8 characters, and your name when creating an account."; render(); return; }
		const existing = state.mockAccounts.get(email);
		if (state.authMode === "register" && existing) { state.notice = "An account with that email already exists in this prototype session."; render(); return; }
		if (existing && existing.password !== password) { state.notice = "That password does not match this prototype account."; render(); return; }
		const authMode = state.authMode;
		state.authBusy = true;
		state.notice = "";
		render();
		setTimeout(() => {
			const account = existing || { id: crypto.randomUUID?.() || `customer-${Date.now()}`, password, name: authMode === "register" ? name : email.split("@")[0] };
			if (authMode === "register") state.mockAccounts.set(email, account);
			saveCustomerSession(account.id, "email", account.name);
			state.authBusy = false;
			state.authMode = "signin";
			location.hash = state.authReturnToCheckout ? "#/checkout" : "#/";
		}, 350);
	} else if (form.id === "admin-login-form") {
		const email = String(data.get("email") || "").trim().toLowerCase();
		const password = String(data.get("password") || "");
		state.adminBusy = true;
		state.adminError = "";
		render();
		setTimeout(() => {
			state.adminBusy = false;
			if (email === PROTOTYPE_ADMIN.email.toLowerCase() && password === PROTOTYPE_ADMIN.password) {
				state.adminAuthenticated = true;
				state.adminTab = "Overview";
				location.hash = "#/admin";
			} else { state.adminError = "Email or password is incorrect."; render(); }
		}, 350);
	} else if (form.id === "settings-name-form") {
		const name = String(data.get("name") || "").trim();
		if (!name || name.length > 60) { toast("Enter a name up to 60 characters long."); return; }
		saveCustomerSession(state.customer.id, state.customer.method, name);
		state.notice = "Your name was saved on this device.";
		render();
	} else {
		state.supportOpen = false;
		toast("Problem report saved for this demo only. It was not sent to support.");
	}
});

app.addEventListener("input", (event) => {
	if (event.target.name !== "menu-search") return;
	state.menuSearch = event.target.value;
	const position = event.target.selectionStart;
	render();
	const search = app.querySelector('[name="menu-search"]');
	search?.focus();
	search?.setSelectionRange(position, position);
});

app.addEventListener("click", (event) => {
	const target = event.target.closest("[data-action]");
	if (!target) {
		if (state.settingsOpen && !event.target.closest(".settings-control")) { state.settingsOpen = false; render(); }
		return;
	}
	const { action, id } = target.dataset;
	if (["admin-tab", "admin-signout", "admin-order-ready", "product-availability", "promo-toggle"].includes(action) && !state.adminAuthenticated) {
		state.adminError = "Admin sign-in is required.";
		location.hash = "#/admin-login";
		return;
	}
	if (action === "settings-toggle") { state.settingsOpen = !state.settingsOpen; render(); }
	else if (action === "theme-toggle") {
		setTheme(state.theme === "dark" ? "light" : "dark", target);
	}
	else if (action === "theme-preference") setTheme(target.dataset.themeValue, target);
	else if (action === "reduce-motion") {
		state.reduceMotion = target.checked;
		saveStore("hh_reduce_motion", state.reduceMotion);
		render();
	}
	else if (action === "notification-toggle") {
		state.notifications = { ...state.notifications, [target.dataset.preference]: target.checked };
		saveStore("hh_notification_preferences", state.notifications);
		render();
	}
	else if (action === "settings-section") { state.settingsSection = target.dataset.section; state.notice = ""; render(); }
	else if (action === "guest") { state.authReturnToCheckout = false; try { sessionStorage.removeItem("hh_checkout_intent"); } catch { /* No-op */ } state.notice = ""; location.hash = "#/"; }
	else if (action === "google-signin") {
		state.authBusy = true;
		state.notice = "";
		render();
		setTimeout(() => {
			const id = crypto.randomUUID?.() || `google-${Date.now()}`;
			saveCustomerSession(id, "google", "Google Café Customer");
			state.authBusy = false;
			location.hash = state.authReturnToCheckout ? "#/checkout" : "#/";
		}, 350);
	}
	else if (action === "signout") {
		try { sessionStorage.removeItem("hh_customer_session"); } catch { /* Continue to public browsing. */ }
		state.customer = null;
		state.cartOpen = false;
		state.authReturnToCheckout = false;
		try { sessionStorage.removeItem("hh_checkout_intent"); } catch { /* No-op */ }
		state.notice = "You have signed out.";
		if (location.hash === "#/") render();
		else location.hash = "#/";
	}
	else if (action === "admin-signout") { state.adminAuthenticated = false; state.adminError = ""; location.hash = "#/"; }
	else if (action === "delete-account") {
		if (window.confirm("Delete this local prototype profile? Your cart will remain, and no real account exists to delete.")) {
			try { localStorage.removeItem(`hh_profile_${state.customer.id}`); sessionStorage.removeItem("hh_customer_session"); } catch { /* Continue without local account state. */ }
			state.customer = null;
			state.notice = "The local profile was deleted. No external account was affected.";
			location.hash = "#/";
		}
	}
	else if (action === "change-password") toast(state.customer?.method === "google" ? "Manage password and security through your Google account." : "Password change is simulated in this prototype; no password is stored or changed.");
	else if (action === "support-form") { state.supportOpen = true; state.supportType = target.dataset.type; state.settingsSection = "support"; render(); }
	else if (action === "place-order") {
		if (!signedIn()) { state.authReturnToCheckout = true; location.hash = "#/login"; return; }
		if (!state.cart.length) { state.checkoutError = "Your cart is empty."; render(); return; }
		state.checkoutBusy = true;
		state.checkoutError = "";
		render();
		setTimeout(() => {
			const items = state.cart.map((item) => `${item.quantity} × ${item.name}`).join(", ");
			const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
			const orders = readStore("hh_orders", []);
			orders.unshift({ id: `D${Date.now().toString().slice(-6)}`, customerId: state.customer.id, customerName: state.customer.name, items, total: subtotal * 1.15, status: "Received (demo)", createdAt: new Date().toISOString() });
			saveStore("hh_orders", orders);
			state.cart = [];
			saveStore("hh_cart", state.cart);
			state.checkoutBusy = false;
			state.authReturnToCheckout = false;
			try { sessionStorage.removeItem("hh_checkout_intent"); } catch { /* No-op */ }
			state.checkoutNotice = "Your demo order was recorded locally. No payment or café order was submitted.";
			if (state.notifications.orderUpdates) state.notice = "Demo order received. No real order was sent.";
			location.hash = "#/orders";
		}, 500);
	}
	else if (action === "product-availability") {
		const unavailable = readStore("hh_unavailable_products", []);
		const productId = Number(id);
		saveStore("hh_unavailable_products", unavailable.includes(productId) ? unavailable.filter((product) => product !== productId) : [...unavailable, productId]);
		render();
	}
	else if (action === "admin-order-ready") {
		const orders = readStore("hh_orders", []).map((order) => String(order.id) === id ? { ...order, status: "Ready (demo)" } : order);
		saveStore("hh_orders", orders);
		state.notice = "Demo order status updated locally.";
		render();
	}
	else if (action === "promo-toggle") { saveStore("hh_promo_enabled", target.checked); render(); }
	else if (action === "password") { const input = app.querySelector("#password"); const visible = input.type === "password"; input.type = visible ? "text" : "password"; target.setAttribute("aria-pressed", String(visible)); target.setAttribute("aria-label", visible ? "Hide password" : "Show password"); }
	else if (action === "forgot") toast("Password recovery will be available when account services are connected.");
	else if (action === "create-account") { state.authMode = state.authMode === "register" ? "signin" : "register"; state.notice = ""; render(); }
	else if (action === "cart-open") { state.cartOpen = true; render(); }
	else if (action === "cart-close") {
		const destination = target.tagName === "A" ? target.getAttribute("href") : "";
		event.preventDefault();
		state.cartOpen = false;
		if (destination) location.hash = destination;
		else render();
	}
	else if (action === "add-cart") { const product = products.find((item) => item.id === Number(id)); const match = state.cart.find((item) => item.id === Number(id)); if (match) match.quantity += 1; else state.cart.push({ ...product, quantity: 1 }); saveStore("hh_cart", state.cart); toast(`${product.name} added to your order.`); }
	else if (action === "remove-cart") { state.cart = state.cart.filter((item) => item.id !== Number(id)); saveStore("hh_cart", state.cart); render(); }
	else if (action === "quantity") { const item = state.cart.find((entry) => entry.id === Number(id)); if (item) item.quantity += Number(target.dataset.change); state.cart = state.cart.filter((entry) => entry.quantity > 0); saveStore("hh_cart", state.cart); render(); }
	else if (action === "checkout") {
		state.cartOpen = false;
		state.checkoutError = "";
		if (!signedIn()) { state.authReturnToCheckout = true; try { sessionStorage.setItem("hh_checkout_intent", "true"); } catch { /* Keep current-route intent in memory. */ } state.notice = ""; location.hash = "#/login"; }
		else location.hash = "#/checkout";
	}
	else if (action === "menu-category") { state.category = target.dataset.category; render(); }
	else if (action === "blog-category") { state.blogCategory = target.dataset.category; render(); }
	else if (action === "faq-category") { state.faqCategory = target.dataset.category; render(); }
	else if (action === "admin-tab") { state.adminTab = target.dataset.tab; render(); }
	else if (action === "enter-raffle") { const raffle = raffles.find((item) => item.id === Number(id)); if (state.raffleEntries >= raffle.tickets) { state.raffleEntries -= raffle.tickets; state.enteredRaffles.push(raffle.id); saveStore("hh_raffle_entries", state.raffleEntries); saveStore("hh_entered_raffles", state.enteredRaffles); render(); } }
	else if (action === "read-post") { state.articleId = Number(id); render(); }
	else if (action === "close-article") { if (event.target === target || target.classList.contains("modal-close")) { state.articleId = null; render(); } }
	else if (action === "mobile-nav") { state.mobileNav = !state.mobileNav; render(); }
	else if (action === "demo-action") toast(target.dataset.message);
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && state.settingsOpen) { state.settingsOpen = false; render(); }
});

window.addEventListener("hashchange", () => { state.mobileNav = false; state.cartOpen = false; state.articleId = null; render(); window.scrollTo(0, 0); });
window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => { if (state.theme === "system") render(); });
if (!location.hash) location.hash = "#/";
render();
