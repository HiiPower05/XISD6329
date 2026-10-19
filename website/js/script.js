async function checkoutGuest() {
    if (!state.cart.length) {
        toast("Your cart is empty.");
        return;
    }

    const email = window.prompt("Enter your email to place your order:");

    if (email === null) return;

    const customerEmail = email.trim();

    if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail) ||
        customerEmail.length > 254
    ) {
        toast("Please enter a valid email address.");
        return;
    }

    const items = state.cart.map((item) => ({
        menu_item_id: Number(item.id),
        quantity: Number(item.quantity)
    }));

    if (
        items.some((item) =>
            !Number.isSafeInteger(item.menu_item_id) ||
            !Number.isSafeInteger(item.quantity)
        )
    ) {
        toast("Your cart contains an invalid item. Please refresh and try again.");
        return;
    }

    try {
        const { data, error } = await window.hhSupabase.rpc(
            "create_guest_order",
            {
                p_customer_email: customerEmail,
                p_items: items
            }
        );

        if (error) {
            console.error("Guest checkout failed:", error);
            toast(error.message || "Could not place your order. Please try again.");
            return;
        }

        const order = Array.isArray(data) ? data[0] : data;

        if (!order?.order_id) {
            console.error("Unexpected checkout response:", data);
            toast("We could not confirm your order. Please contact the café before retrying.");
            return;
        }

        // Clear the cart only after the database confirms success.
        state.cart = [];
        render();

        toast(
            `Order placed! Reference: ${order.order_id}. ` +
            `Total: ${money(Number(order.total_amount))}. Payment has not been processed.`
        );
    } catch (error) {
        console.error("Unexpected checkout error:", error);
        toast("Something went wrong. Please try again.");
    }
}
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

let menuItems = [];
let menuLoading = true;
let menuError = "";

let posts = [];

const raffles = [
	{ id: 1, title: "Grand Prize Coffee Package", description: "Win a month's supply of premium single-origin beans and an espresso machine.", prize: "Espresso machine + 30-day coffee supply", value: 15000, image: "🏆", ends: "2026-12-20", tickets: 1, color: "#d4a847" },
	{ id: 2, title: "Weekend Brunch for Two", description: "Enjoy a luxurious weekend brunch for you and someone special — on the house.", prize: "Brunch voucher for two, including drinks", value: 800, image: "🍽️", ends: "2026-11-18", tickets: 1, color: "#4a9b6f" },
	{ id: 3, title: "Free Coffee for a Year", description: "One free barista-made coffee every day for an entire year.", prize: "365 daily coffee vouchers", value: 25000, image: "☕", ends: "2026-12-01", tickets: 2, color: "#c8591a" },
];

let faqGroups = [];

let cafeSettings = {
    cafe_name: "Happy Hippo Café",
    address: "12 Baobab Street, Stellenbosch, Western Cape, 7600",
    phone: "+27 21 555 1234",
    email: "hello@happyhippocafe.co.za",
    general_info: ""
};

let cafeHours = [];

let editingBlogId = null;
let editingFaqId = null;

let adminOrders = [];
let ordersLoading = false;
let ordersError = "";

const state = {
	cart: readStore("hh_cart", []),
	category: "All",
	menuSearch: "",
	blogCategory: "All",
	faqCategory: "All",
	adminTab: "Overview",
	mobileNav: false,
	cartOpen: false,
	articleId: null,
	raffleEntries: readStore("hh_raffle_entries", 5),
	enteredRaffles: readStore("hh_entered_raffles", []),
	notice: "",
	// add three lines
	user: null,
	authReady: false,
	guestMode: false,
	isCreatingAccount: false, // added
    // SO no one can access admin
    isAdmin: false,
    adminRoleReady: false,
};

function readStore(key, fallback) {
	try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
	catch { return fallback; }
}

function saveStore(key, value) {
	try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Local file storage may be disabled. */ }
}

function esc(value) {
	return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function money(value) { return `R${Number(value).toFixed(2)}`; }
function imageUrl(id, width = 900, height = 600) {
    if (!id) {
        id = "photo-1541167760496-1628856ab772";
    }

    if (/^https?:\/\//i.test(id)) {
        return id;
    }

    return `https://images.unsplash.com/${id}?w=${width}&h=${height}&fit=crop&auto=format`;
}
function route() {
    if (!location.hash || location.hash === "#") return "login";
    return location.hash.replace(/^#\/?/, "").split("?")[0].toLowerCase() || "home";
}


function signedIn() {
    return Boolean(state.user);
}

function userName() {
    return state.user?.email || "Guest";
}
// Checks admin
async function refreshAdminRole(user) {
    state.isAdmin = false;
    state.adminRoleReady = false;

    if (!user) {
        state.adminRoleReady = true;
        return;
    }

    try {
        const { data, error } = await window.hhSupabase
            .from("user_roles")
            .select("role")
            .eq("user_id", user.id)
            .maybeSingle();

        if (error) throw error;

        state.isAdmin = data?.role === "admin";
    } catch (error) {
        console.error("Admin role check failed:", error);
        state.isAdmin = false;
    } finally {
        state.adminRoleReady = true;
    }
}


function link(path, label, icon = "") {
	const routeName = path === "/" ? "home" : path.replace(/^\//, "");
	const active = route() === routeName;
	return `<a class="nav-link${active ? " active" : ""}" href="#${path}">${icon ? `<span aria-hidden="true">${icon}</span>` : ""}${label}</a>`;
}

function hoursSummary() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    if (!cafeHours.length) return "Please contact us for opening hours";

    return cafeHours.map(row => {
        const label = days[row.day_of_week];

        if (row.is_closed) return `${label}: Closed`;

        const formatTime = value => {
            if (!value) return "Not set";

            const [hour, minute] = value.split(":").map(Number);
            const suffix = hour >= 12 ? "PM" : "AM";
            const displayHour = hour % 12 || 12;

            return `${displayHour}:${String(minute).padStart(2, "0")} ${suffix}`;
        };

        return `${label}: ${formatTime(row.open_time)}–${formatTime(row.close_time)}`;
    }).join(" · ");
}

function shell(content) {
	const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
	const nav = [
    ["/", "Home", "⌂"],
    ["/menu", "Menu", "☕"],
    ["/blog", "Blog", "▤"],
    ["/raffle", "Raffle", "✧"],
    ...(state.isAdmin ? [["/admin", "Admin", "▦"]] : []),
    ["/help", "Help", "?"]
];
	return `<div class="site-shell">
		<header class="site-header"><div class="header-inner">
			<a class="brand" href="#/" aria-label="Happy Hippo Café home"><span class="brand-mark">🦛</span><span class="brand-name">Happy Hippo<small>Café</small></span></a>
			<nav class="desktop-nav" aria-label="Main navigation">${nav.map(([path, name, icon]) => link(path, name, icon)).join("")}</nav>
			<div class="header-actions"><span class="greeting">Hi, <strong>${esc(userName())}</strong></span>
				<button class="icon-button cart-trigger" data-action="cart-open" aria-label="Open shopping cart">♧${count ? `<span class="cart-count">${count}</span>` : ""}</button>
				<button class="signout-button" data-action="signout" aria-label="Sign out">↗ <span>Sign out</span></button>
				<button class="icon-button mobile-nav-trigger" data-action="mobile-nav" aria-label="Open navigation">☰</button>
			</div>
		</div>${state.mobileNav ? `<nav class="mobile-nav" aria-label="Mobile navigation">${nav.map(([path, name, icon]) => link(path, name, icon)).join("")}<button data-action="signout">↗ Sign out</button></nav>` : ""}</header>
		<main>${content}</main>
		<p>${esc(cafeSettings.address || "")} · ${esc(hoursSummary())}</p>
		${state.cartOpen ? cartPanel() : ""}${state.articleId ? articleDialog() : ""}${state.notice ? `<div class="toast" role="status">${esc(state.notice)}</div>` : ""}
	</div>`;
}


function loginPage() {
    return `<main class="login-page">
        <section class="login-story">
            <img class="login-photo" src="${imageUrl("photo-1554118811-1e0d58224f24", 1400, 1800)}" alt="Warm café interior with wooden tables and soft lighting">
            <div class="login-photo-shade"></div>
            <div class="login-story-copy">
                <span class="login-mark">🦛</span>
                <p class="eyebrow">A little comfort, freshly made</p>
                <h1>Happy Hippo<br>Café</h1>
                <p>Where every sip tells a story. Sourced with love, served with soul, right here in South Africa.</p>
                <div class="login-stats">
                    <div><strong>4.9★</strong><span>Customer rating</span></div>
                    <div><strong>12k+</strong><span>Happy customers</span></div>
                    <div><strong>18+</strong><span>Menu favourites</span></div>
                </div>
            </div>
            <span class="photo-caption">A warm seat is waiting</span>
        </section>

        <section class="login-panel">
            <a class="login-mobile-brand" href="#/login">
                <span>🦛</span> Happy Hippo Café
            </a>

            <div class="login-form-wrap">
                <p class="eyebrow">Your table is ready</p>
                <h2>${state.isCreatingAccount ? "Create your account" : "Welcome back"}</h2>
                <p class="login-intro">
                    ${state.isCreatingAccount
                        ? "Join us for your favourite brew."
                        : "Sign in to order your favourite brew."}
                </p>

                ${state.notice ? `<p class="inline-notice" role="status">${esc(state.notice)}</p>` : ""}

                <form id="login-form">
                    <label for="email">Email address</label>
                    <input id="email" name="email" type="email"
                        placeholder="you@example.com"
                        autocomplete="email" required>

                    <label for="password">Password</label>
                    <div class="password-field">
                        <input id="password" name="password" type="password"
                            placeholder="Enter your password"
                            autocomplete="${state.isCreatingAccount ? "new-password" : "current-password"}"
                            required>
                        <button type="button" class="password-toggle"
                            data-action="password"
                            aria-label="Show password"
                            aria-pressed="false">◉</button>
                    </div>

                    ${!state.isCreatingAccount ? `
                        <div class="forgot-row">
                            <button type="button" class="text-action" data-action="forgot">
                                Forgot password?
                            </button>
                        </div>
                    ` : ""}

                    <button class="primary-button login-submit" type="submit">
                        ${state.isCreatingAccount ? "Create Account" : "Sign In"}
                    </button>
                </form>

                <div class="or-divider"><span>or continue as</span></div>

                <button class="secondary-button guest-button" data-action="guest">
                    ☕ <span>Guest Explorer</span>
                </button>

                <p class="create-account">
                    ${state.isCreatingAccount
                        ? "Already have an account?"
                        : "No account?"}
                    <button class="text-action" data-action="create-account">
                        ${state.isCreatingAccount ? "Sign in" : "Create one free"}
                    </button>
                </p>

                <p class="demo-caption">
                    Account authentication is handled by Supabase.
                </p>
            </div>

            <footer class="login-footer">© 2026 Happy Hippo Café</footer>
        </section>
    </main>`;
}

function productCard(item, compact = false) {
	const inCart = state.cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0;
	return `<article class="product-card${compact ? " compact" : ""}"><div class="product-visual"><span>${item.image}</span>${inCart ? `<small class="product-quantity">${inCart} in cart</small>` : ""}</div><div class="product-info"><p class="category-label">${esc(item.category)}</p><h3>${esc(item.name)}</h3><p class="product-description">${esc(item.description)}</p><div class="product-bottom"><strong>${money(item.price)}</strong><button class="small-primary" data-action="add-cart" data-id="${item.id}">Add to cart</button></div></div></article>`;
}

function homePage() {
	const featured = products.slice(0, 4);
	const previews = posts.slice(0, 3);
	return `<section class="home-hero"><img src="${imageUrl("photo-1511920170033-f8396924c348", 1800, 800)}" alt="Sunlit coffee and a freshly made espresso"><div class="hero-shade"></div><div class="hero-copy"><p class="eyebrow">Stellenbosch · Est. 2018</p><h1>Your neighbourhood<br><span>happy place.</span></h1><p>Fresh coffee, baked-in-house pastries, and a warm welcome — every single day.</p><div class="button-row"><a class="primary-button" href="#/menu">☕ Order now</a><a class="outline-button" href="#/raffle">View raffles</a></div></div></section>
		<section class="info-strip"><span>◷ Mon–Fri 7AM–7PM · Sat–Sun 8AM–5PM</span><span>⌖ 12 Baobab Street, Stellenbosch</span><span class="rating">★★★★★ <b>4.9 · 1 200+ reviews</b></span></section>
		<section class="content-section promo"><div><span class="promo-tag">This week only</span><h2>Buy 2, Get 1 Free</h2><p>On all beverages. No code needed — just add three to cart.</p><a class="primary-button" href="#/menu">Shop the offer <span>→</span></a></div><div class="promo-art" aria-hidden="true">☕</div></section>
		<section class="content-section"><div class="section-heading"><div><p class="eyebrow">Made fresh every day</p><h2>Fan favourites</h2></div><a href="#/menu" class="inline-link">Full menu →</a></div><div class="product-grid home-products">${featured.map((item) => productCard(item, true)).join("")}</div></section>
		<section class="content-section blog-preview"><div class="section-heading"><div><p class="eyebrow">Stories from behind the counter</p><h2>From the blog</h2></div><a href="#/blog" class="inline-link">All posts →</a></div><div class="blog-grid">${previews.map(postCard).join("")}</div></section>`;
}

//function menuPage() {
//	const categories = ["All", "Coffee", "Pastries", "Snacks", "Beverages"];
//	const query = state.menuSearch.toLowerCase();
//	const filtered = products.filter((item) => (state.category === "All" || item.category === state.category) && `${item.name} ${item.description}`.toLowerCase().includes(query));
//	return `<section class="page-container"><div class="page-heading"><p class="eyebrow">Happy Hippo Café</p><h1>Our menu</h1><p>${filtered.length} items · All prices in ZAR incl. VAT</p></div><div class="menu-tools"><label class="search-field"><span>⌕</span><input name="menu-search" type="search" value="${esc(state.menuSearch)}" placeholder="Search items..." aria-label="Search menu"></label><span class="results-count">${filtered.length} results</span></div><div class="filter-row">${categories.map((name) => `<button class="filter-chip${state.category === name ? " selected" : ""}" data-action="menu-category" data-category="${name}">${name}</button>`).join("")}</div>${filtered.length ? `<div class="product-grid">${filtered.map((item) => productCard(item)).join("")}</div>` : `<div class="empty-state"><span>⌕</span><h2>Nothing found</h2><p>Try a different keyword or category.</p></div>`}</section>`;
//}

function menuPage() {
    const categories = ["All", "Coffee", "Pastries", "Snacks", "Beverages"];
    const query = state.menuSearch.toLowerCase();

    const filtered = menuItems.filter((item) =>
        (state.category === "All" || item.category === state.category) &&
        `${item.name} ${item.description || ""}`.toLowerCase().includes(query)
    );

    let content = "";

    if (menuLoading) {
        content = `<div class="empty-state"><h2>Loading menu...</h2><p>Fetching the latest items.</p></div>`;
    } else if (menuError) {
        content = `<div class="empty-state"><h2>Menu unavailable</h2><p>${esc(menuError)}</p><button class="btn primary" data-action="retry-menu">Try again</button></div>`;
    } else if (filtered.length) {
        content = `<div class="product-grid">${filtered.map((item) => productCard(item)).join("")}</div>`;
    } else {
        content = `<div class="empty-state"><span>⌕</span><h2>Nothing found</h2><p>Try a different keyword or category.</p></div>`;
    }

    return `<section class="page-container">
        <div class="page-heading">
            <p class="eyebrow">Happy Hippo Café</p>
            <h1>Our menu</h1>
            <p>${menuLoading ? "Loading items..." : `${filtered.length} items · All prices in ZAR incl. VAT`}</p>
        </div>
        <div class="menu-tools">
            <label class="search-field">
                <span>⌕</span>
                <input name="menu-search" type="search" value="${esc(state.menuSearch)}" placeholder="Search items..." aria-label="Search menu">
            </label>
            <span class="results-count">${menuLoading ? "" : `${filtered.length} results`}</span>
        </div>
        <div class="filter-row">${categories.map((name) => `<button class="filter-chip${state.category === name ? " selected" : ""}" data-action="menu-category" data-category="${name}">${name}</button>`).join("")}</div>
        ${content}
    </section>`;
}
// added below for api


async function loadMenuItems() {
    menuLoading = true;
    menuError = "";
    render();

    try {
        const { data, error } = await window.hhSupabase
            .from("menu_items")
            .select("id, category_id, name, description, price, available, image_url")
            .order("id");

        if (error) {
            throw error;
        }

        menuItems = data
            .filter((item) => item.available)
            .map((item) => ({
                ...item,
                image: item.image_url || "☕",
                category: ({
                    1: "Coffee",
                    2: "Beverages",
                    3: "Snacks",
                    4: "Pastries",
                    5: "Snacks",
                    6: "Snacks",
                    7: "Beverages",
                    8: "Beverages",
                    9: "Pastries"
                })[item.category_id] || "Snacks"
            }));
    } catch (error) {
        console.error("Menu API error:", error);
        menuError = "Could not load the menu. Please try again.";
    }

    menuLoading = false;
    render();
}
async function loadOrders() {
    ordersLoading = true;
    ordersError = "";
    render();
    try {
        const { data: orders, error } = await window.hhSupabase
            .from("orders")
            .select("id, customer_email, status, total_amount, created_at")
            .order("created_at", { ascending: false });

        if (error) throw error;

        if (!orders.length) {
            adminOrders = [];
            return;
        }

        const orderIds = orders.map(order => order.id);

        const { data: items, error: itemsError } =
            await window.hhSupabase
                .from("order_items")
                .select("order_id, menu_item_id, quantity, unit_price")
                .in("order_id", orderIds);

        if (itemsError) throw itemsError;

        adminOrders = orders.map(order => {
            const orderItems = items.filter(
                item => String(item.order_id) === String(order.id)
            );

            const itemNames = orderItems.map(item => {
                const menuItem = menuItems.find(
                    product =>
                        Number(product.id) === Number(item.menu_item_id)
                );

                const name = menuItem
                    ? menuItem.name
                    : `Menu item #${item.menu_item_id}`;

                return `${name} × ${item.quantity}`;
            });

            return {
                id: order.id,
                customer: order.customer_email,
                items: itemNames.join(", ") || "No items",
                total: Number(order.total_amount),
                status: order.status,
                time: new Date(order.created_at).toLocaleString()
            };
        });
    } catch (error) {
        console.error("Could not load orders:", error);
        ordersError = "Could not load orders. Please try again.";
    } finally {
        ordersLoading = false;
        render();
    }
}



async function loadWebsiteContent() {
    const db = window.hhSupabase;

    const [blogResult, faqResult, settingsResult, hoursResult] =
        await Promise.all([
            db.from("blog_posts")
                .select("*")
                .order("created_at", { ascending: false }),

            db.from("faqs")
                .select("*")
                .order("sort_order", { ascending: true }),

            db.from("cafe_settings")
                .select("id, setting_key, setting_value, description"),

            db.from("cafe_hours")
                .select("day_of_week, open_time, close_time, is_closed")
                .order("day_of_week")
        ]);

    if (blogResult.error) {
        console.error("Blog loading failed:", blogResult.error);
    } else {
        posts = (blogResult.data || []).map(post => ({
            ...post,
            image: post.image_url || "photo-1541167760496-1628856ab772",
            date: new Date(
                post.published_at || post.created_at
            ).toLocaleDateString()
        }));
    }

    if (faqResult.error) {
        console.error("FAQ loading failed:", faqResult.error);
    } else {
        const visibleFaqs = (faqResult.data || []).filter(
            faq => faq.published || state.isAdmin
        );

        const icons = {
            "Ordering & Payment": "🛒",
            "Menu & Products": "☕",
            "Raffle & Loyalty": "🎟️",
            "Café & Events": "🏡"
        };

        const groups = new Map();

        visibleFaqs.forEach(faq => {
            if (!groups.has(faq.category)) {
                groups.set(faq.category, {
                    name: faq.category,
                    icon: icons[faq.category] || "❓",
                    questions: []
                });
            }

            groups.get(faq.category).questions.push([
                faq.question,
                faq.answer,
                faq.id,
                faq.sort_order,
                faq.published
            ]);
        });

        faqGroups = [...groups.values()];
    }

    if (settingsResult.error) {
        console.error("Café settings loading failed:", settingsResult.error);
    } else {
        const settings = {
            cafe_name: "Happy Hippo Café",
            address: "12 Baobab Street, Stellenbosch, Western Cape, 7600",
            phone: "+27 21 555 1234",
            email: "hello@happyhippocafe.co.za",
            general_info: ""
        };

        (settingsResult.data || []).forEach(row => {
            if (row.setting_key) {
                settings[row.setting_key] = row.setting_value ?? "";
            }
        });

        cafeSettings = settings;
    }
}

function postCard(post) {
	return `<article class="blog-card"><button class="blog-image" data-action="read-post" data-id="${post.id}" aria-label="Read ${esc(post.title)}"><img src="${imageUrl(post.image, 900, 560)}" alt="${esc(post.title)}" loading="lazy"></button><div class="blog-card-copy"><div class="post-meta"><span class="category-label">${esc(post.category)}</span><span>${esc(post.date)}</span></div><h3>${esc(post.title)}</h3><p>${esc(post.excerpt)}</p><button class="inline-link" data-action="read-post" data-id="${post.id}">Read more →</button></div></article>`;
}

function blogPage() {
	const categories = [
    "All",
    ...new Set(posts.map(post => post.category).filter(Boolean))
];

const featured = posts.filter(post => post.featured && post.published);

const filtered = posts.filter(post =>
    post.published &&
    (state.blogCategory === "All" || post.category === state.blogCategory)
);
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
    const groups = state.faqCategory === "All"
        ? faqGroups
        : faqGroups.filter((group) => group.name === state.faqCategory);

    return `<section class="page-container help-container">
        <div class="page-heading centered">
            <span class="help-icon">✉</span>
            <h1>Help &amp; FAQ</h1>
            <p>Everything you need to know about Happy Hippo Café. Can't find an answer? We're here to help.</p>
        </div>

        <div class="filter-row centered-filters">
            ${["All", ...faqGroups.map((group) => group.name)].map((name) =>
                `<button class="filter-chip${state.faqCategory === name ? " selected" : ""}"
                    data-action="faq-category"
                    data-category="${name}">${name}</button>`
            ).join("")}
        </div>

        <div class="faq-groups">
            ${groups.map((group) => `
                <section>
                    <h2>${group.icon} ${esc(group.name)}</h2>
                    <div class="faq-list">
                        ${group.questions.map(([question, answer], index) => `
                            <details class="faq-item"
                                ${index === 0 && state.openFaq === question ? "open" : ""}>
                                <summary>${esc(question)}<span>⌄</span></summary>
                                <p>${esc(answer)}</p>
                            </details>
                        `).join("")}
                    </div>
                </section>
            `).join("")}
        </div>

        <section class="contact-panel">
            <h2>Still need help?</h2>
            <p>Our team is ready to assist. Check our opening hours below.</p>

            <div class="contact-grid">
                <a href="mailto:${esc(cafeSettings.email)}">
                    <b>✉ Email us</b>
                    <span>${esc(cafeSettings.email)}</span>
                </a>

                <a href="tel:${esc(cafeSettings.phone)}">
                    <b>☎ Call us</b>
                    <span>${esc(cafeSettings.phone)}</span>
                </a>

                <div>
                    <b>◷ Hours</b>
                    <span>${esc(hoursSummary())}</span>
                </div>
            </div>

            <p class="contact-address">
                ⌖ ${esc(cafeSettings.address)}
            </p>
        </section>
    </section>`;
}

function adminPage() {
	const tabs = [
    "Overview", "Menu", "Orders", "Blogs", "FAQs", "Café Info", "Raffles", "Reports"
    ];
	let panel = "";
	if (state.adminTab === "Overview") {
		const bars = [6200, 7100, 5800, 8450, 9300, 11200, 8700];
		panel = `<div class="stat-grid"><div class="stat-card"><span>Today's revenue</span><strong>R8,450</strong><small>↑ 8.2% this week</small></div><div class="stat-card"><span>Orders today</span><strong>47</strong><small>Across all channels</small></div><div class="stat-card"><span>Active customers</span><strong>234</strong><small>Returning this month</small></div><div class="stat-card"><span>Week growth</span><strong>+12%</strong><small>Compared with last week</small></div></div><section class="admin-panel"><h2>Revenue this week <small>Sample dashboard data</small></h2><div class="bar-chart">${bars.map((value, index) => `<div><span style="--bar-height:${Math.round(value / 11200 * 100)}%" title="R${value.toLocaleString()}"></span><small>${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}</small></div>`).join("")}</div></section><section class="admin-panel"><h2>Recent orders</h2>${ordersTable()}</section>`;
	}
    else if (state.adminTab === "Orders") {
    panel = `
        <section class="admin-panel">
            <h2>Recent orders <small>Live Supabase data</small></h2>
            ${ordersTable()}
        </section>
    `;
}
	else if (state.adminTab === "Menu") panel = dataTable("Menu items", ["Item", "Category", "Price", "Status"], products.slice(0, 8).map((item) => [item.name, item.category, money(item.price), "Available"]));
	else if (state.adminTab === "Blogs") panel = dataTable("Blog posts", ["Post", "Author", "Date", "Status"], posts.slice(0, 5).map((post) => [post.title, post.author, post.date, post.featured ? "Published" : "Draft"]));
	else if (state.adminTab === "Raffles") panel = dataTable("Raffles", ["Raffle", "Entries", "Ends", "Status"], raffles.map((item, index) => [item.title, [245, 189, 412][index], item.ends, "Active"]));
	else panel = `<div class="report-grid">${[["📊", "Sales report", "Daily, weekly, and monthly sales data with ZAR breakdowns."], ["📦", "Inventory report", "Stock levels, reorder alerts, and product trends."], ["👥", "Customer report", "Visitor counts, loyalty tiers, and preferences."], ["🏆", "Popular items", "Best-selling menu items ranked by units and revenue."]].map(([icon, title, description]) => `<article class="report-card"><span>${icon}</span><h3>${title}</h3><p>${description}</p><button class="secondary-button" data-action="demo-action" data-message="Report generation is a UI preview until reporting data is connected.">Generate report</button></article>`).join("")}</div>`;
	return `<section class="page-container"><div class="page-heading"><p class="eyebrow">Dashboard</p><h1>Admin panel</h1><p>Manage café operations, content, and performance.</p></div><div class="admin-tabs" role="tablist">${tabs.map((tab) => `<button role="tab" aria-selected="${state.adminTab === tab}" class="admin-tab${state.adminTab === tab ? " selected" : ""}" data-action="admin-tab" data-tab="${tab}">${tab}</button>`).join("")}</div>${panel}<p class="demo-caption">
    ${state.adminTab === "Orders"
        ? "Orders are loaded from Supabase. Payment processing is not connected."
        : "Overview figures and other admin sections still contain sample data."}
        </p></section>`;
        }

function ordersTable() {
    if (ordersLoading) {
        return "<p>Loading orders...</p>";
    }

    if (ordersError) {
        return `
            <p>${esc(ordersError)}</p>
            <button class="secondary-button"
                data-action="reload-orders">
                Try again
            </button>
        `;
    }

    if (!adminOrders.length) {
        return "<p>No orders found.</p>";
    }

    return `
        <div class="table-scroll">
            <table>
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Customer email</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    ${adminOrders.map(order => `
                        <tr>
                            <td>#${esc(order.id)}</td>
                            <td>${esc(order.customer)}</td>
                            <td>${esc(order.items)}</td>
                            <td>${money(order.total)}</td>
                            <td>
                                <span class="status-pill">
                                    ${esc(order.status)}
                                </span>
                            </td>
                            <td>${esc(order.time)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function dataTable(title, headers, rows) {
	return `<section class="admin-panel"><h2>${title}</h2><div class="table-scroll"><table><thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
}

function cartPanel() {
	const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
	const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const tax = subtotal * 0.15;
	return `<div class="drawer-backdrop" data-action="cart-close"></div><aside class="cart-drawer" aria-label="Your order"><header><div><h2>Your order</h2><p>${count} ${count === 1 ? "item" : "items"} in cart</p></div><button class="icon-button" data-action="cart-close" aria-label="Close cart">×</button></header><div class="cart-items">${state.cart.length ? state.cart.map((item) => `<article class="cart-item"><span class="cart-emoji">${item.image}</span><div class="cart-item-info"><div class="cart-item-title"><strong>${esc(item.name)}</strong><button data-action="remove-cart" data-id="${item.id}" aria-label="Remove ${esc(item.name)}">×</button></div><small>${money(item.price)} each</small><div class="cart-item-bottom"><div class="quantity-control"><button data-action="quantity" data-id="${item.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button data-action="quantity" data-id="${item.id}" data-change="1" aria-label="Increase quantity">+</button></div><strong>${money(item.price * item.quantity)}</strong></div></div></article>`).join("") : `<div class="empty-cart"><span>♧</span><h3>Your cart is empty</h3><p>Add something delicious from the menu and it will appear here.</p><a href="#/menu" class="primary-button" data-action="cart-close">Browse menu</a></div>`}</div>${state.cart.length ? `<footer class="cart-summary"><div><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div><span>VAT (15%)</span><strong>${money(tax)}</strong></div><div class="cart-total"><b>Total</b><strong>${money(subtotal + tax)}</strong></div><button class="primary-button full-width" data-action="checkout">♧ Proceed to checkout</button><small>Your order will be submitted. Payment is not processed online.</small></footer>` : ""}</aside>`;
}

function articleDialog() {
	const post = posts.find(
    item => String(item.id) === String(state.articleId)
);
	if (!post) return "";
	return `<div class="modal-backdrop" data-action="close-article"><article class="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-title"><button class="modal-close" data-action="close-article" aria-label="Close story">×</button><img src="${imageUrl(post.image, 1200, 700)}" alt="${esc(post.title)}"><div><p class="category-label">${esc(post.category)} · ${esc(post.date)}</p><h2 id="article-title">${esc(post.title)}</h2><p class="article-byline">By ${esc(post.author)}</p><p>${esc(post.body || post.excerpt)}</p></div></article></div>`;
}

function render() {
    if (!state.authReady) {
        app.innerHTML = "<main>Loading...</main>";
        return;
    }

    let current = route();

    if (current === "admin") {
    if (!signedIn() || state.guestMode) {
        location.hash = "#/login";
        return;
    }

    if (!state.adminRoleReady) {
        app.innerHTML = "<main>Checking admin permissions...</main>";
        return;
    }

    if (!state.isAdmin) {
        state.notice = "Access denied. Admin permissions required.";
        location.hash = "#/";
        return;
    }
}

    if (current === "index.html") current = "login";

    if (current === "login" && (signedIn() || state.guestMode)) {
        location.hash = "#/";
        return;
    }

    if (current !== "login" && !signedIn() && !state.guestMode) {
        location.hash = "#/login";
        return;
    }

    const pages = {
        "": homePage,
        home: homePage,
        menu: menuPage,
        blog: blogPage,
        raffle: rafflePage,
        admin: adminPage,
        help: helpPage
    };

    if (current === "login") {
        app.innerHTML = loginPage();
    } else {
        app.innerHTML = shell((pages[current] || homePage)());
    }

    const titles = {
        login: "Sign in",
        home: "Home",
        menu: "Menu",
        blog: "Blog",
        raffle: "Raffles",
        admin: "Admin",
        help: "Help"
    };

    document.title = `${titles[current] || "Home"} | Happy Hippo Café`;
}


function toast(message) {
	state.notice = message;
	render();
	window.clearTimeout(toast.timeout);
	toast.timeout = window.setTimeout(() => { state.notice = ""; render(); }, 2800);
}



async function signIn(email, password) {
    const { data, error } = await window.hhSupabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        state.notice = error.message;
        render();
        return;
    }

    state.notice = "";
    location.hash = "#/";
}


async function createAccount() {
    const email = app.querySelector("#email")?.value.trim() || "";
    const password = app.querySelector("#password")?.value || "";

    if (!email || !password) {
        state.notice = "Enter your email and password to create an account.";
        render();
        return;
    }

    try {
        const { data, error } = await window.hhSupabase.auth.signUp({
            email,
            password
        });

        if (error) {
            state.notice = error.message;
            render();
            return;
        }

        if (data.session) {
            state.notice = "";
            location.hash = "#/";
        } else {
            state.notice = "Account created. Check your email to confirm your account before signing in.";
            render();
        }
    } catch (error) {
        state.notice = error.message || "Unable to create your account.";
        render();
    }
}


app.addEventListener("submit", (event) => {
	if (event.target.id !== "login-form") return;
	event.preventDefault();
	const data = new FormData(event.target);
	const email = String(data.get("email") || "").trim();
	const password = String(data.get("password") || "");
	if (!email || !password) {
		//toast("Enter your email and password to continue."); return;
		state.notice = "Enter your email and password to continue.";
        render();
        return;
	}
	// changeed to below - signIn(email.split("@")[0] || "Guest");
	// signIn(email, password);
	if (state.isCreatingAccount) {
        createAccount();
    } else {
        signIn(email, password);
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
	if (!target) return;
	const { action, id } = target.dataset;
    if (action === "retry-menu") {
    loadMenuItems();
    return;
}
	// changed - if (action === "guest") signIn("Guest");

	if (action === "guest") {
		state.guestMode = true;
		state.user = null;
		state.notice = "";
		location.hash = "#/";
	}
	// changed to below- else if (action === "signout") { try { localStorage.removeItem("hh_logged_in"); localStorage.removeItem("hh_user_name"); } catch { /* No-op */ } state.cartOpen = false; location.hash = "#/login"; }

	else if (action === "signout") {
    state.guestMode = false;

    window.hhSupabase.auth.signOut().then(({ error }) => {
        if (error) {
            state.notice = error.message;
            render();
            return;
        }

        state.user = null;
        state.cartOpen = false;
        location.hash = "#/login";
        render();
    });
}
	else if (action === "password") { const input = app.querySelector("#password"); const visible = input.type === "password"; input.type = visible ? "text" : "password"; target.setAttribute("aria-pressed", String(visible)); target.setAttribute("aria-label", visible ? "Hide password" : "Show password"); }
	else if (action === "forgot") toast("Password recovery will be available when account services are connected.");
	//else if (action === "create-account") createAccount();
	else if (action === "create-account") {
    state.isCreatingAccount = !state.isCreatingAccount;
    state.notice = "Enter your email and password to create an account.";
    render();
}
	// Replacing with above - else if (action === "create-account") toast("Account creation will be available when account services are connected.");
	else if (action === "cart-open") { state.cartOpen = true; render(); }
	else if (action === "cart-close") {
		const destination = target.tagName === "A" ? target.getAttribute("href") : "";
		event.preventDefault();
		state.cartOpen = false;
		if (destination) location.hash = destination;
		else render();
	}
    else if (action === "add-cart") {
        const product = menuItems.find((item) => item.id === Number(id));

        if (!product) {
            toast("This menu item is unavailable. Please refresh the menu.");
            return;
        }

        const match = state.cart.find((item) => item.id === Number(id));

        if (match) {
            match.quantity += 1;
        } else {
            state.cart.push({ ...product, quantity: 1 });
        }

        saveStore("hh_cart", state.cart);
        toast(`${product.name} added to your order.`);
    }

	else if (action === "remove-cart") { state.cart = state.cart.filter((item) => item.id !== Number(id)); saveStore("hh_cart", state.cart); render(); }
	else if (action === "quantity") { const item = state.cart.find((entry) => entry.id === Number(id)); if (item) item.quantity += Number(target.dataset.change); state.cart = state.cart.filter((entry) => entry.quantity > 0); saveStore("hh_cart", state.cart); render(); }
	else if (action === "checkout") {
    void checkoutGuest();
    }
	else if (action === "menu-category") { state.category = target.dataset.category; render(); }
	else if (action === "blog-category") { state.blogCategory = target.dataset.category; render(); }
	else if (action === "faq-category") { state.faqCategory = target.dataset.category; render(); }
	else if (action === "admin-tab") {
    state.adminTab = target.dataset.tab;
    render();

    if (
        state.adminTab === "Orders" ||
        state.adminTab === "Overview"
    ) {
        loadOrders();
    }
    }
    else if (action === "reload-orders") {
        loadOrders();
    }
	else if (action === "enter-raffle") { const raffle = raffles.find((item) => item.id === Number(id)); if (state.raffleEntries >= raffle.tickets) { state.raffleEntries -= raffle.tickets; state.enteredRaffles.push(raffle.id); saveStore("hh_raffle_entries", state.raffleEntries); saveStore("hh_entered_raffles", state.enteredRaffles); render(); } }
	else if (action === "read-post") {
    state.articleId = id;
    render();
}
	else if (action === "close-article") { if (event.target === target || target.classList.contains("modal-close")) { state.articleId = null; render(); } }
	else if (action === "mobile-nav") { state.mobileNav = !state.mobileNav; render(); }
	else if (action === "demo-action") toast(target.dataset.message);
});

window.addEventListener("hashchange", () => {
    state.mobileNav = false;
    state.cartOpen = false;
    state.articleId = null;

    render();
    window.scrollTo(0, 0);

    if (route() === "admin" && state.isAdmin) {
        loadOrders();
    }
});
if (!location.hash) location.hash = "#/login";
loadMenuItems();


window.hhSupabase.auth.onAuthStateChange(
    (_event, session) => {
        setTimeout(async () => {
            state.user = session?.user || null;

            await refreshAdminRole(state.user);
            await loadWebsiteContent();

            state.authReady = true;
            render();
        }, 0);
    }
);

window.hhSupabase.auth.getSession()
    .then(async ({ data, error }) => {
        if (error) throw error;

        state.user = data.session?.user || null;

        await refreshAdminRole(state.user);
        await loadWebsiteContent();

        state.authReady = true;
        render();
    })
    .catch((error) => {
        console.error("Session initialization failed:", error);

        state.user = null;
        state.isAdmin = false;
        state.adminRoleReady = true;
        state.authReady = true;

        state.notice = "Unable to verify your session. Please sign in again.";
        render();
    });

