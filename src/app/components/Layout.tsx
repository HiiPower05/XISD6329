import { ShoppingCart, Menu, X, Coffee, Home, BookOpen, Gift, Shield, HelpCircle, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router";
import ShoppingCartPanel from "./ShoppingCartPanel";
import { useCart } from "../context/CartContext";

export default function Layout() {
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItemCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const userName = localStorage.getItem("hh_user_name") || "Guest";

  useEffect(() => {
    const loggedIn = localStorage.getItem("hh_logged_in");
    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setShowMobileMenu(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("hh_logged_in");
    localStorage.removeItem("hh_user_name");
    navigate("/login");
  };

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/menu", label: "Menu", icon: Coffee },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/raffle", label: "Raffle", icon: Gift },
    { path: "/admin", label: "Admin", icon: Shield },
    { path: "/help", label: "Help", icon: HelpCircle },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#FBF5ED] flex flex-col">
      {/* Nav */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled ? "bg-[#FFFCF7] shadow-md shadow-[#7C3D12]/8" : "bg-[#FFFCF7]/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="bg-[#7C3D12] group-hover:bg-[#6B3410] transition rounded-xl p-2 leading-none">
                <span className="text-xl leading-none">🦛</span>
              </div>
              <div className="leading-tight">
                <span
                  className="block text-[17px] font-bold text-[#1E0F05]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Happy Hippo
                </span>
                <span className="block text-[11px] font-semibold text-[#C8591A] tracking-widest uppercase -mt-0.5">
                  Café
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                    isActive(path)
                      ? "bg-[#F2E2C4] text-[#7C3D12]"
                      : "text-[#4A1E08] hover:bg-[#F2E2C4]/60 hover:text-[#7C3D12]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* User greeting — desktop */}
              <span className="hidden sm:block text-sm text-[#7A5C3E] font-medium">
                Hi, <span className="text-[#7C3D12] font-bold capitalize">{userName}</span>
              </span>

              {/* Cart */}
              <button
                onClick={() => setShowCart(true)}
                aria-label="Open cart"
                className="relative p-2.5 rounded-xl hover:bg-[#F2E2C4] transition text-[#4A1E08]"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#C8591A] text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Logout — desktop */}
              <button
                onClick={handleLogout}
                aria-label="Log out"
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-[#7A5C3E] hover:bg-[#F2E2C4] hover:text-[#1E0F05] transition"
              >
                <LogOut className="w-4 h-4" />
                Out
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                aria-label={showMobileMenu ? "Close menu" : "Open menu"}
                className="md:hidden p-2.5 rounded-xl hover:bg-[#F2E2C4] transition text-[#4A1E08]"
              >
                {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-[rgba(124,61,18,0.1)] bg-[#FFFCF7] pb-4">
            <div className="px-4 pt-3 pb-2">
              <p className="text-xs text-[#7A5C3E] font-semibold uppercase tracking-wider mb-3">
                Navigation
              </p>
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl font-semibold text-sm transition mb-1 ${
                    isActive(path)
                      ? "bg-[#F2E2C4] text-[#7C3D12]"
                      : "text-[#4A1E08] hover:bg-[#F2E2C4]/60"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-3 py-3 rounded-xl font-semibold text-sm text-[#7A5C3E] hover:bg-[#F2E2C4]/60 w-full mt-2 border-t border-[rgba(124,61,18,0.1)] pt-4"
              >
                <LogOut className="w-5 h-5" />
                Sign out
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1E0F05] text-[#F2E2C4] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🦛</span>
            <span className="font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Happy Hippo Café
            </span>
          </div>
          <p className="text-[#7A5C3E] text-sm text-center">
            12 Baobab Street, Stellenbosch · Mon–Fri 7AM–7PM · Sat–Sun 8AM–5PM
          </p>
          <p className="text-[#7A5C3E] text-xs">© 2026 Happy Hippo Café</p>
        </div>
      </footer>

      {/* Cart panel */}
      <ShoppingCartPanel showCart={showCart} setShowCart={setShowCart} />
    </div>
  );
}
