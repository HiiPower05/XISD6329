import {
  Coffee,
  ShoppingBag,
  BarChart3,
  BookOpen,
  Gift,
  Plus,
  Edit,
  Trash2,
  Users,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Clock,
  ChefHat,
  PackageCheck,
} from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type TabId = "overview" | "menu" | "orders" | "blogs" | "raffles" | "reports";

type Order = {
  id: number;
  customer: string;
  items: string[];
  total: number;
  status: "pending" | "preparing" | "ready" | "completed";
  time: string;
};

const orders: Order[] = [
  { id: 1001, customer: "Thabo Nkosi", items: ["Caramel Macchiato", "Blueberry Muffin"], total: 144.98, status: "preparing", time: "10:30" },
  { id: 1002, customer: "Sarah van der Berg", items: ["Iced Latte", "Cookie"], total: 114.98, status: "ready", time: "10:25" },
  { id: 1003, customer: "Mike Davis", items: ["Americano", "Croissant", "Sandwich"], total: 204.97, status: "pending", time: "10:35" },
  { id: 1004, customer: "Emma Wilson", items: ["Cappuccino"], total: 74.99, status: "completed", time: "10:15" },
  { id: 1005, customer: "Lungelo Dlamini", items: ["Flat White", "Cinnamon Roll"], total: 139.98, status: "completed", time: "10:05" },
];

const revenueData = [
  { day: "Mon", revenue: 6200 },
  { day: "Tue", revenue: 7100 },
  { day: "Wed", revenue: 5800 },
  { day: "Thu", revenue: 8450 },
  { day: "Fri", revenue: 9300 },
  { day: "Sat", revenue: 11200 },
  { day: "Sun", revenue: 8700 },
];

const menuItems = [
  { name: "Caramel Macchiato", category: "Coffee", price: 89.99, active: true },
  { name: "Iced Latte", category: "Coffee", price: 79.99, active: true },
  { name: "Cappuccino", category: "Coffee", price: 74.99, active: true },
  { name: "Blueberry Muffin", category: "Pastries", price: 54.99, active: true },
  { name: "Croissant", category: "Pastries", price: 44.99, active: false },
];

const blogList = [
  { title: "The Art of Latte Art", author: "Sarah Johnson", date: "May 10, 2026", status: "published" },
  { title: "New Summer Menu Launch", author: "Michael Chen", date: "May 8, 2026", status: "published" },
  { title: "Meet Our Coffee Farmers", author: "Emma Williams", date: "May 5, 2026", status: "draft" },
];

const raffleList = [
  { title: "Grand Prize Coffee Package", entries: 245, ends: "Dec 20, 2026", active: true },
  { title: "Weekend Brunch for Two", entries: 189, ends: "Nov 18, 2026", active: true },
  { title: "Free Coffee for a Year", entries: 412, ends: "Dec 1, 2026", active: true },
];

const statusMeta: Record<Order["status"], { label: string; color: string; Icon: typeof Clock }> = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-700", Icon: Clock },
  preparing: { label: "Preparing", color: "bg-blue-100 text-blue-700", Icon: ChefHat },
  ready: { label: "Ready", color: "bg-[#4A9B6F]/15 text-[#4A9B6F]", Icon: PackageCheck },
  completed: { label: "Done", color: "bg-[#EDE0CC] text-[#7A5C3E]", Icon: CheckCircle },
};

const tabs: { id: TabId; label: string; Icon: typeof BarChart3 }[] = [
  { id: "overview", label: "Overview", Icon: BarChart3 },
  { id: "menu", label: "Menu", Icon: Coffee },
  { id: "orders", label: "Orders", Icon: ShoppingBag },
  { id: "blogs", label: "Blogs", Icon: BookOpen },
  { id: "raffles", label: "Raffles", Icon: Gift },
  { id: "reports", label: "Reports", Icon: TrendingUp },
];

export default function Admin() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[#C8591A] text-sm font-bold uppercase tracking-widest mb-1">Dashboard</p>
        <h1
          className="text-4xl font-bold text-[#1E0F05] mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Admin Panel
        </h1>
        <p className="text-[#7A5C3E]">Manage café operations, content, and performance.</p>
      </div>

      {/* Tabs */}
      <div className="bg-[#FFFCF7] rounded-2xl border border-[rgba(124,61,18,0.1)] mb-8 overflow-x-auto">
        <div className="flex min-w-max">
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-bold transition border-b-2 whitespace-nowrap ${
                activeTab === id
                  ? "border-[#C8591A] text-[#7C3D12] bg-[#F2E2C4]/50"
                  : "border-transparent text-[#7A5C3E] hover:text-[#1E0F05] hover:bg-[#F2E2C4]/30"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Overview ── */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Today's Revenue", value: "R8,450", icon: DollarSign, bg: "bg-[#4A9B6F]/12", ic: "text-[#4A9B6F]" },
              { label: "Orders Today", value: "47", icon: ShoppingBag, bg: "bg-blue-50", ic: "text-blue-600" },
              { label: "Active Customers", value: "234", icon: Users, bg: "bg-purple-50", ic: "text-purple-600" },
              { label: "Week Growth", value: "+12%", icon: TrendingUp, bg: "bg-[#F2E2C4]", ic: "text-[#C8591A]" },
            ].map(({ label, value, icon: Icon, bg, ic }) => (
              <div key={label} className="bg-[#FFFCF7] rounded-2xl p-5 border border-[rgba(124,61,18,0.08)]">
                <div className={`${bg} rounded-xl p-2.5 w-fit mb-3`}>
                  <Icon className={`w-5 h-5 ${ic}`} />
                </div>
                <p className="text-xs text-[#7A5C3E] font-semibold mb-1">{label}</p>
                <p
                  className="text-2xl font-bold text-[#1E0F05]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Revenue chart */}
          <div className="bg-[#FFFCF7] rounded-2xl p-6 border border-[rgba(124,61,18,0.08)]">
            <h3
              className="font-bold text-[#1E0F05] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Revenue This Week
            </h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={revenueData} barSize={32}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(124,61,18,0.08)" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#7A5C3E" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "#7A5C3E" }} axisLine={false} tickLine={false} tickFormatter={(v) => `R${(v / 1000).toFixed(0)}k`} />
                <Tooltip
                  formatter={(v: number) => [`R${v.toLocaleString()}`, "Revenue"]}
                  contentStyle={{ background: "#FFFCF7", border: "1px solid rgba(124,61,18,0.15)", borderRadius: "12px", fontSize: 12 }}
                />
                <Bar dataKey="revenue" fill="#7C3D12" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent orders table */}
          <div className="bg-[#FFFCF7] rounded-2xl border border-[rgba(124,61,18,0.08)] overflow-hidden">
            <div className="px-6 py-4 border-b border-[rgba(124,61,18,0.08)]">
              <h3
                className="font-bold text-[#1E0F05]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Recent Orders
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#F2E2C4]/50">
                  <tr>
                    {["Order", "Customer", "Items", "Total", "Status", "Time"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-xs font-bold text-[#7A5C3E] uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(124,61,18,0.06)]">
                  {orders.map((o) => {
                    const { label, color } = statusMeta[o.status];
                    return (
                      <tr key={o.id} className="hover:bg-[#F2E2C4]/20 transition">
                        <td className="px-5 py-3.5 font-bold text-[#1E0F05]" style={{ fontFamily: "'DM Mono', monospace" }}>#{o.id}</td>
                        <td className="px-5 py-3.5 text-[#1E0F05]">{o.customer}</td>
                        <td className="px-5 py-3.5 text-[#7A5C3E]">{o.items.join(", ")}</td>
                        <td className="px-5 py-3.5 font-bold text-[#C8591A]" style={{ fontFamily: "'DM Mono', monospace" }}>R{o.total.toFixed(2)}</td>
                        <td className="px-5 py-3.5">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${color}`}>{label}</span>
                        </td>
                        <td className="px-5 py-3.5 text-[#7A5C3E]" style={{ fontFamily: "'DM Mono', monospace" }}>{o.time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── Menu ── */}
      {activeTab === "menu" && (
        <div className="bg-[#FFFCF7] rounded-2xl border border-[rgba(124,61,18,0.08)] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(124,61,18,0.08)]">
            <h3 className="font-bold text-[#1E0F05]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Menu Items
            </h3>
            <button className="flex items-center gap-2 bg-[#7C3D12] hover:bg-[#6B3410] text-[#FFFCF7] px-4 py-2 rounded-xl text-sm font-bold transition">
              <Plus className="w-4 h-4" /> Add Item
            </button>
          </div>
          <div className="divide-y divide-[rgba(124,61,18,0.06)]">
            {menuItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-[#F2E2C4]/20 transition">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${item.active ? "bg-[#4A9B6F]" : "bg-[#C4A882]"}`} />
                  <div>
                    <p className="font-semibold text-[#1E0F05] text-sm">{item.name}</p>
                    <p className="text-xs text-[#7A5C3E]">{item.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-[#C8591A] text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>
                    R{item.price.toFixed(2)}
                  </span>
                  <div className="flex gap-1">
                    <button className="p-2 text-[#7A5C3E] hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-[#7A5C3E] hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Orders ── */}
      {activeTab === "orders" && (
        <div className="space-y-4">
          {orders.map((o) => {
            const { label, color, Icon } = statusMeta[o.status];
            return (
              <div
                key={o.id}
                className="bg-[#FFFCF7] rounded-2xl border border-[rgba(124,61,18,0.08)] p-5 hover:shadow-sm transition"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="font-bold text-[#1E0F05] text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>
                      Order #{o.id}
                    </p>
                    <p className="text-xs text-[#7A5C3E]">{o.customer} · {o.time}</p>
                  </div>
                  <span className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${color}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {o.items.map((item, i) => (
                    <span key={i} className="bg-[#F2E2C4] text-[#4A1E08] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#C8591A]" style={{ fontFamily: "'DM Mono', monospace" }}>
                    R{o.total.toFixed(2)}
                  </span>
                  <button className="bg-[#7C3D12] hover:bg-[#6B3410] text-[#FFFCF7] px-4 py-1.5 rounded-xl text-xs font-bold transition">
                    Update Status
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Blogs ── */}
      {activeTab === "blogs" && (
        <div className="bg-[#FFFCF7] rounded-2xl border border-[rgba(124,61,18,0.08)] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(124,61,18,0.08)]">
            <h3 className="font-bold text-[#1E0F05]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Blog Posts
            </h3>
            <button className="flex items-center gap-2 bg-[#7C3D12] hover:bg-[#6B3410] text-[#FFFCF7] px-4 py-2 rounded-xl text-sm font-bold transition">
              <Plus className="w-4 h-4" /> New Post
            </button>
          </div>
          <div className="divide-y divide-[rgba(124,61,18,0.06)]">
            {blogList.map((b, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-[#F2E2C4]/20 transition">
                <div>
                  <p className="font-semibold text-[#1E0F05] text-sm">{b.title}</p>
                  <p className="text-xs text-[#7A5C3E]">{b.author} · {b.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${b.status === "published" ? "bg-[#4A9B6F]/15 text-[#4A9B6F]" : "bg-[#EDE0CC] text-[#7A5C3E]"}`}>
                    {b.status}
                  </span>
                  <button className="p-2 text-[#7A5C3E] hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-[#7A5C3E] hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Raffles ── */}
      {activeTab === "raffles" && (
        <div className="bg-[#FFFCF7] rounded-2xl border border-[rgba(124,61,18,0.08)] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(124,61,18,0.08)]">
            <h3 className="font-bold text-[#1E0F05]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Raffles
            </h3>
            <button className="flex items-center gap-2 bg-[#7C3D12] hover:bg-[#6B3410] text-[#FFFCF7] px-4 py-2 rounded-xl text-sm font-bold transition">
              <Plus className="w-4 h-4" /> New Raffle
            </button>
          </div>
          <div className="divide-y divide-[rgba(124,61,18,0.06)]">
            {raffleList.map((r, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-[#F2E2C4]/20 transition">
                <div>
                  <p className="font-semibold text-[#1E0F05] text-sm">{r.title}</p>
                  <p className="text-xs text-[#7A5C3E]">
                    {r.entries} entries · ends {r.ends}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${r.active ? "bg-[#4A9B6F]/15 text-[#4A9B6F]" : "bg-[#EDE0CC] text-[#7A5C3E]"}`}>
                    {r.active ? "Active" : "Ended"}
                  </span>
                  <button className="p-2 text-[#7A5C3E] hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-[#7A5C3E] hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Reports ── */}
      {activeTab === "reports" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { title: "Sales Report", desc: "Daily, weekly, and monthly sales data with ZAR breakdowns.", icon: "📊" },
            { title: "Inventory Report", desc: "Current stock levels, reorder alerts, and trends.", icon: "📦" },
            { title: "Customer Report", desc: "Visitor counts, loyalty tiers, and preferences.", icon: "👥" },
            { title: "Popular Items", desc: "Best-selling menu items ranked by units and revenue.", icon: "🏆" },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-[#FFFCF7] rounded-2xl border border-[rgba(124,61,18,0.08)] p-6 hover:shadow-sm transition"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h4 className="font-bold text-[#1E0F05] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                {title}
              </h4>
              <p className="text-sm text-[#7A5C3E] mb-5">{desc}</p>
              <button className="w-full bg-[#F2E2C4] hover:bg-[#EDE0CC] text-[#7C3D12] py-2.5 rounded-xl text-sm font-bold transition">
                Generate Report
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
