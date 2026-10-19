import { Zap, ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Latte Art",
    date: "May 10, 2026",
    excerpt: "How our baristas craft delicate rosetta patterns with every pour.",
    category: "Coffee Tips",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Summer Menu Launch",
    date: "May 8, 2026",
    excerpt: "Tropical smoothies and refreshing iced specials landing June 1st.",
    category: "News",
    img: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Meet Our Coffee Farmers",
    date: "May 5, 2026",
    excerpt: "A story of ethically sourced beans from the hills of Ethiopia.",
    category: "Sustainability",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop&auto=format",
  },
];

export default function Home() {
  const { addToCart } = useCart();
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[480px] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1600&h=700&fit=crop&auto=format"
          alt="Cosy café interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F05]/90 via-[#1E0F05]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full pb-14 pt-24">
          <p className="text-[#F2E2C4] text-sm font-semibold tracking-widest uppercase mb-3">
            Stellenbosch · Est. 2018
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFCF7] mb-4 max-w-xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your neighbourhood<br />
            <span className="text-[#F2E2C4]">happy place.</span>
          </h1>
          <p className="text-[#F2E2C4]/80 text-lg max-w-md mb-8 leading-relaxed">
            Fresh coffee, baked-in-house pastries, and a warm welcome — every single day.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-[#C8591A] hover:bg-[#b04d16] text-[#FFFCF7] px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-[#C8591A]/30 transition"
            >
              <Zap className="w-5 h-5" />
              Order Now
            </Link>
            <Link
              to="/raffle"
              className="inline-flex items-center gap-2 border-2 border-[#FFFCF7]/30 hover:border-[#FFFCF7]/60 text-[#FFFCF7] px-6 py-3.5 rounded-xl font-bold transition backdrop-blur-sm"
            >
              View Raffles
            </Link>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-[#7C3D12] text-[#F2E2C4]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center gap-4 justify-between text-sm font-semibold">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Mon–Fri 7AM–7PM · Sat–Sun 8AM–5PM
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            12 Baobab Street, Stellenbosch
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-[#D4A847] fill-[#D4A847]" />
            <Star className="w-4 h-4 text-[#D4A847] fill-[#D4A847]" />
            <Star className="w-4 h-4 text-[#D4A847] fill-[#D4A847]" />
            <Star className="w-4 h-4 text-[#D4A847] fill-[#D4A847]" />
            <Star className="w-4 h-4 text-[#D4A847] fill-[#D4A847]" />
            <span className="ml-1 text-[#FFFCF7]">4.9 · 1 200+ reviews</span>
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-[#F2E2C4] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[rgba(124,61,18,0.15)]">
          <div className="flex-1">
            <span className="inline-block bg-[#C8591A] text-[#FFFCF7] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              This week only
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1E0F05] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Buy 2, Get 1 Free
            </h2>
            <p className="text-[#7A5C3E] mb-4">On all beverages. No code needed — just add three to cart.</p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-[#7C3D12] hover:bg-[#6B3410] text-[#FFFCF7] px-5 py-2.5 rounded-xl font-bold text-sm transition shadow"
            >
              Shop the offer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="text-8xl sm:text-9xl select-none">☕</div>
        </div>
      </section>

      {/* Featured items */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-center justify-between mb-7">
          <h2
            className="text-3xl font-bold text-[#1E0F05]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Fan Favourites
          </h2>
          <Link
            to="/menu"
            className="text-sm font-bold text-[#C8591A] hover:text-[#7C3D12] transition flex items-center gap-1"
          >
            Full menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFCF7] rounded-2xl shadow-sm border border-[rgba(124,61,18,0.08)] overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="bg-[#F2E2C4] h-44 flex items-center justify-center text-7xl">
                {item.image}
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5C3E]">
                  {item.category}
                </span>
                <h3 className="font-bold text-[#1E0F05] mt-0.5 mb-1">{item.name}</h3>
                <p className="text-xs text-[#7A5C3E] mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xl font-bold text-[#C8591A]"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    R{item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-[#7C3D12] hover:bg-[#6B3410] text-[#FFFCF7] text-sm px-4 py-2 rounded-xl font-bold transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-14">
        <div className="flex items-center justify-between mb-7">
          <h2
            className="text-3xl font-bold text-[#1E0F05]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From the Blog
          </h2>
          <Link
            to="/blog"
            className="text-sm font-bold text-[#C8591A] hover:text-[#7C3D12] transition flex items-center gap-1"
          >
            All posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <Link
              to="/blog"
              key={post.id}
              className="bg-[#FFFCF7] rounded-2xl overflow-hidden border border-[rgba(124,61,18,0.08)] hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="h-44 bg-[#EDE0CC] overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#F2E2C4] text-[#7C3D12] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#7A5C3E]">{post.date}</span>
                </div>
                <h3
                  className="font-bold text-[#1E0F05] mb-1.5 line-clamp-2 text-[17px] leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h3>
                <p className="text-xs text-[#7A5C3E] line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
