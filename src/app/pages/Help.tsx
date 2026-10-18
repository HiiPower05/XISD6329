import { useState } from "react";
import { ChevronDown, MessageCircle, Mail, Phone, Clock, MapPin } from "lucide-react";

type FAQ = { q: string; a: string };
type FAQGroup = { group: string; emoji: string; items: FAQ[] };

const faqData: FAQGroup[] = [
  {
    group: "Ordering & Payment",
    emoji: "🛒",
    items: [
      {
        q: "How do I place an order online?",
        a: "Browse our Menu page, add items to your cart, then click the shopping bag icon in the top bar to review and checkout. We accept EFT, card, and cash on collection.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit/debit cards (Visa, Mastercard), instant EFT via Ozow, and cash at the counter. All prices are displayed in South African Rands (ZAR).",
      },
      {
        q: "Can I modify or cancel my order?",
        a: "You can modify or cancel your order within 5 minutes of placing it by calling us directly. Once preparation has begun, changes are unfortunately not possible.",
      },
      {
        q: "Is there a minimum order amount?",
        a: "There is no minimum order for in-store pickup. Delivery orders require a minimum of R150 to qualify.",
      },
    ],
  },
  {
    group: "Menu & Products",
    emoji: "☕",
    items: [
      {
        q: "Do you have options for dietary restrictions?",
        a: "Yes! We offer dairy-free milk alternatives (oat, almond, soy) at no extra charge, vegan pastries, and gluten-conscious options. Look for the diet tags on each menu item.",
      },
      {
        q: "Where are your coffee beans sourced from?",
        a: "We source our beans directly from ethical farms in Ethiopia, Colombia, and Malawi. All our beans are Rainforest Alliance certified and freshly roasted weekly.",
      },
      {
        q: "How fresh are your pastries?",
        a: "All pastries and baked goods are made fresh in-house every morning. We do not use any artificial preservatives. Day-old items are marked down and sold by 4 PM.",
      },
      {
        q: "Do you offer seasonal specials?",
        a: "Absolutely! We rotate seasonal specials every 3 months. Follow our Blog and Instagram (@happyhippocafe) for early announcements on new items.",
      },
    ],
  },
  {
    group: "Raffle & Loyalty",
    emoji: "🎟️",
    items: [
      {
        q: "How do I earn raffle entries?",
        a: "You earn 1 entry ticket for every R100 spent in-store or online, 5 tickets for referring a friend, and 1 ticket for each daily check-in on the app.",
      },
      {
        q: "When are raffle winners announced?",
        a: "Winners are announced on the last day of each raffle, live on our Facebook page at 6 PM. Winners are also notified by email and SMS within 24 hours.",
      },
      {
        q: "Do my entry tickets expire?",
        a: "Ticket balances expire after 6 months of account inactivity. As long as you make at least one purchase or check-in within 6 months, your balance is preserved.",
      },
    ],
  },
  {
    group: "Café & Events",
    emoji: "🏡",
    items: [
      {
        q: "Can I book the café for a private event?",
        a: "Yes! We host private events, baby showers, corporate breakfasts, and book clubs. Contact us at events@happyhippocafe.co.za or call us to discuss availability and packages.",
      },
      {
        q: "Do you have free Wi-Fi?",
        a: "Yes, complimentary high-speed Wi-Fi is available for all customers. The network name and password are displayed on your receipt and at each table.",
      },
      {
        q: "Is there parking available?",
        a: "We have 12 dedicated parking bays directly in front of the café, plus overflow parking across the road at Riverside Mall. The first 2 hours are free.",
      },
    ],
  },
];

function AccordionItem({ item }: { item: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[rgba(124,61,18,0.12)] rounded-xl overflow-hidden bg-white transition-shadow hover:shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 group"
      >
        <span className="font-semibold text-[#1E0F05] text-[15px] leading-snug group-hover:text-[#7C3D12] transition">
          {item.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#C8591A] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-[#7A5C3E] text-sm leading-relaxed border-t border-[rgba(124,61,18,0.08)]">
          <p className="pt-4">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function Help() {
  const [activeGroup, setActiveGroup] = useState("All");

  const visibleGroups =
    activeGroup === "All"
      ? faqData
      : faqData.filter((g) => g.group === activeGroup);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F2E2C4] mb-5">
          <MessageCircle className="w-8 h-8 text-[#7C3D12]" />
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#1E0F05] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Help &amp; FAQ
        </h1>
        <p className="text-[#7A5C3E] text-lg max-w-xl mx-auto">
          Everything you need to know about Happy Hippo Café. Can't find an answer? We're here to help.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {["All", ...faqData.map((g) => g.group)].map((label) => (
          <button
            key={label}
            onClick={() => setActiveGroup(label)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
              activeGroup === label
                ? "bg-[#7C3D12] text-[#FFFCF7] shadow-md"
                : "bg-white text-[#4A1E08] border border-[rgba(124,61,18,0.2)] hover:border-[#7C3D12]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* FAQ groups */}
      <div className="space-y-10 mb-16">
        {visibleGroups.map((group) => (
          <section key={group.group}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{group.emoji}</span>
              <h2
                className="text-xl font-bold text-[#1E0F05]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {group.group}
              </h2>
            </div>
            <div className="space-y-3">
              {group.items.map((item) => (
                <AccordionItem key={item.q} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact section */}
      <div className="bg-[#7C3D12] rounded-2xl p-8 text-[#FFFCF7]">
        <h2
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Still need help?
        </h2>
        <p className="text-[#F2E2C4] mb-8 text-sm">
          Our team is ready to assist Monday–Saturday, 7 AM–7 PM.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="mailto:hello@happyhippocafe.co.za"
            className="flex items-start gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition group"
          >
            <Mail className="w-6 h-6 text-[#F2E2C4] mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Email us</p>
              <p className="text-[#F2E2C4] text-xs mt-1">hello@happyhippocafe.co.za</p>
            </div>
          </a>
          <a
            href="tel:+27215551234"
            className="flex items-start gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition"
          >
            <Phone className="w-6 h-6 text-[#F2E2C4] mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Call us</p>
              <p className="text-[#F2E2C4] text-xs mt-1">+27 21 555 1234</p>
            </div>
          </a>
          <div className="flex items-start gap-4 bg-white/10 rounded-xl p-4">
            <Clock className="w-6 h-6 text-[#F2E2C4] mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Hours</p>
              <p className="text-[#F2E2C4] text-xs mt-1">Mon–Fri: 7 AM – 7 PM</p>
              <p className="text-[#F2E2C4] text-xs">Sat–Sun: 8 AM – 5 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3 bg-white/10 rounded-xl p-4">
          <MapPin className="w-6 h-6 text-[#F2E2C4] flex-shrink-0" />
          <div>
            <p className="font-semibold text-sm">Find us</p>
            <p className="text-[#F2E2C4] text-xs mt-1">12 Baobab Street, Stellenbosch, Western Cape, 7600</p>
          </div>
        </div>
      </div>
    </div>
  );
}
