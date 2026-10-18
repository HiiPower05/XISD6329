import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

const categoryEmojis: Record<string, string> = {
  All: "🍽️",
  Coffee: "☕",
  Pastries: "🥐",
  Snacks: "🥪",
  Beverages: "🧃",
};

export default function Menu() {
  const { addToCart, cart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedIds, setAddedIds] = useState<Set<number>>(new Set());

  const categories = ["All", "Coffee", "Pastries", "Snacks", "Beverages"];

  const filteredProducts = products.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const getCartQty = (id: number) => cart.find((i) => i.id === id)?.quantity ?? 0;

  const handleAdd = (item: (typeof products)[0]) => {
    addToCart(item);
    setAddedIds((prev) => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[#C8591A] text-sm font-bold uppercase tracking-widest mb-1">Happy Hippo Café</p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#1E0F05] mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Menu
        </h1>
        <p className="text-[#7A5C3E]">
          {filteredProducts.length} items · All prices in ZAR incl. VAT
        </p>
      </div>

      {/* Search + filter row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C4A882] w-4 h-4" />
          <input
            type="text"
            placeholder="Search items…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[rgba(124,61,18,0.18)] bg-white focus:outline-none focus:ring-2 focus:ring-[#C8591A] text-[#1E0F05] placeholder-[#C4A882] transition"
          />
        </div>
        <div className="flex items-center gap-1 text-xs text-[#7A5C3E] font-semibold">
          <SlidersHorizontal className="w-4 h-4" />
          {filteredProducts.length} results
        </div>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2 mb-9">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-sm transition ${
              selectedCategory === cat
                ? "bg-[#7C3D12] text-[#FFFCF7] shadow-md"
                : "bg-white text-[#4A1E08] border border-[rgba(124,61,18,0.15)] hover:border-[#7C3D12]"
            }`}
          >
            <span>{categoryEmojis[cat]}</span>
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center py-20 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3
            className="text-xl font-bold text-[#1E0F05] mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nothing found
          </h3>
          <p className="text-[#7A5C3E] text-sm">
            Try a different keyword or category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((item) => {
            const qty = getCartQty(item.id);
            const justAdded = addedIds.has(item.id);
            return (
              <div
                key={item.id}
                className="bg-[#FFFCF7] rounded-2xl overflow-hidden border border-[rgba(124,61,18,0.08)] hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
              >
                {/* Image */}
                <div className="bg-[#F2E2C4] h-44 flex items-center justify-center text-7xl relative">
                  {item.image}
                  {qty > 0 && (
                    <span className="absolute top-2.5 right-2.5 bg-[#C8591A] text-white text-xs font-bold rounded-full min-w-[22px] h-[22px] flex items-center justify-center px-1">
                      {qty}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5C3E] bg-[#F2E2C4] px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1E0F05] mb-1">{item.name}</h3>
                  <p className="text-xs text-[#7A5C3E] flex-1 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xl font-bold text-[#C8591A]"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      R{item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAdd(item)}
                      className={`px-4 py-2 rounded-xl font-bold text-sm transition ${
                        justAdded
                          ? "bg-[#4A9B6F] text-white"
                          : "bg-[#7C3D12] hover:bg-[#6B3410] text-[#FFFCF7]"
                      }`}
                    >
                      {justAdded ? "Added ✓" : "Add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
