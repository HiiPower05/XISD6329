import { Calendar, User, ArrowRight } from "lucide-react";
import { useState } from "react";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  img: string;
  featured: boolean;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Latte Art: Mastering the Perfect Pour",
    date: "May 10, 2026",
    author: "Sarah Johnson",
    category: "Coffee Tips",
    excerpt: "How our baristas craft intricate rosetta and tulip patterns in every cup.",
    content: "Discover the secrets behind creating stunning latte art, from basic hearts to complex rosettas.",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&h=500&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 2,
    title: "New Summer Menu Landing June 1st",
    date: "May 8, 2026",
    author: "Michael Chen",
    category: "News",
    excerpt: "Tropical smoothies, passionfruit iced lattes, and coconut muffins — summer is here.",
    content: "Get ready for refreshing new summer beverages.",
    img: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=800&h=500&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 3,
    title: "Meet Our Coffee Farmers: A Journey to Ethiopia",
    date: "May 5, 2026",
    author: "Emma Williams",
    category: "Sustainability",
    excerpt: "The story behind our ethically sourced Yirgacheffe beans.",
    content: "A virtual tour of our partner coffee farms in Ethiopia.",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 4,
    title: "Customer Spotlight: Our Favourite Regulars",
    date: "May 3, 2026",
    author: "David Brown",
    category: "Community",
    excerpt: "Heartwarming stories from the people who make our café feel like home.",
    content: "Read about our loyal regulars.",
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 5,
    title: "A Day in the Life of a Barista",
    date: "April 30, 2026",
    author: "Lisa Anderson",
    category: "Coffee Tips",
    excerpt: "From 5 AM roast checks to the last cappuccino — follow along behind the counter.",
    content: "A typical day at Happy Hippo Café from opening to closing.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 6,
    title: "Eco-Friendly Packaging: Our Green Initiative",
    date: "April 28, 2026",
    author: "Emma Williams",
    category: "Sustainability",
    excerpt: "Our compostable cups are made from sugarcane and certified home-compostable.",
    content: "Discover our commitment to reducing environmental impact.",
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 7,
    title: "Weekend Brunch Specials Now Available",
    date: "April 25, 2026",
    author: "Michael Chen",
    category: "News",
    excerpt: "Avo toast, fluffy pancakes, and free-range eggs every Saturday and Sunday.",
    content: "Indulge in our weekend brunch offerings.",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 8,
    title: "Coffee Bean Roasting 101",
    date: "April 22, 2026",
    author: "Sarah Johnson",
    category: "Coffee Tips",
    excerpt: "Light, medium, or dark — how roast levels change flavour from citrus to chocolate.",
    content: "Learn about the roasting process.",
    img: "https://images.unsplash.com/photo-1497935586047-9395dc012d1b?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
];

const categories = ["All", "News", "Coffee Tips", "Sustainability", "Community"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPosts = blogPosts.filter((p) => p.featured);
  const filtered = blogPosts.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[#C8591A] text-sm font-bold uppercase tracking-widest mb-1">
          Happy Hippo Café
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#1E0F05] mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Blog
        </h1>
        <p className="text-[#7A5C3E]">
          Stories, tips, and news from behind the counter.
        </p>
      </div>

      {/* Featured — hero cards */}
      <section className="mb-12">
        <h2
          className="text-xl font-bold text-[#1E0F05] mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Featured
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer min-h-[280px] flex items-end bg-[#EDE0CC]"
            >
              <img
                src={post.img}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F05]/85 via-[#1E0F05]/30 to-transparent" />
              <div className="relative z-10 p-6">
                <span className="inline-block bg-[#C8591A] text-[#FFFCF7] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <h3
                  className="text-xl font-bold text-[#FFFCF7] mb-2 leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h3>
                <p className="text-[#F2E2C4] text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-[#FFFCF7] font-bold text-sm border border-[#FFFCF7]/40 hover:border-[#FFFCF7] px-4 py-2 rounded-xl transition">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition ${
              selectedCategory === cat
                ? "bg-[#7C3D12] text-[#FFFCF7] shadow"
                : "bg-white text-[#4A1E08] border border-[rgba(124,61,18,0.15)] hover:border-[#7C3D12]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section>
        <h2
          className="text-xl font-bold text-[#1E0F05] mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          All Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((post) => (
            <div
              key={post.id}
              className="bg-[#FFFCF7] rounded-2xl overflow-hidden border border-[rgba(124,61,18,0.08)] hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-pointer"
            >
              <div className="h-44 bg-[#EDE0CC] overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center flex-wrap gap-2 mb-2">
                  <span className="bg-[#F2E2C4] text-[#7C3D12] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#7A5C3E]">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#7A5C3E]">
                    <User className="w-3 h-3" /> {post.author}
                  </span>
                </div>
                <h3
                  className="font-bold text-[#1E0F05] mb-2 line-clamp-2 leading-snug text-[16px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h3>
                <p className="text-xs text-[#7A5C3E] mb-4 line-clamp-2">{post.excerpt}</p>
                <button className="flex items-center gap-1.5 text-sm font-bold text-[#C8591A] hover:text-[#7C3D12] transition">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
