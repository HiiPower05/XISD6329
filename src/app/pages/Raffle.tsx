import { Gift, Clock, Trophy, Ticket, Sparkles, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

type Raffle = {
  id: number;
  title: string;
  description: string;
  prize: string;
  prizeValue: number;
  image: string;
  endDate: Date;
  entriesRequired: number;
  active: boolean;
  color: string;
};

const raffles: Raffle[] = [
  {
    id: 1,
    title: "Grand Prize Coffee Package",
    description: "Win a month's supply of premium single-origin beans and a state-of-the-art espresso machine.",
    prize: "Espresso Machine + 30-day coffee supply",
    prizeValue: 15000,
    image: "🏆",
    endDate: new Date("2026-12-20T23:59:59"),
    entriesRequired: 1,
    active: true,
    color: "#D4A847",
  },
  {
    id: 2,
    title: "Weekend Brunch for Two",
    description: "Enjoy a luxurious weekend brunch for you and someone special — on the house.",
    prize: "Brunch voucher for 2 (incl. drinks)",
    prizeValue: 800,
    image: "🍽️",
    endDate: new Date("2026-11-18T23:59:59"),
    entriesRequired: 1,
    active: true,
    color: "#4A9B6F",
  },
  {
    id: 3,
    title: "Free Coffee for a Year",
    description: "One free barista-made coffee every day for an entire year. Yes — 365 coffees.",
    prize: "365 daily coffee vouchers",
    prizeValue: 25000,
    image: "☕",
    endDate: new Date("2026-12-01T23:59:59"),
    entriesRequired: 2,
    active: true,
    color: "#C8591A",
  },
];

function Countdown({ endDate }: { endDate: Date }) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = endDate.getTime() - now.getTime();
  if (diff <= 0) return <p className="text-red-500 font-bold text-sm">Raffle Ended</p>;

  const days = Math.floor(diff / 864e5);
  const hours = Math.floor((diff % 864e5) / 36e5);
  const minutes = Math.floor((diff % 36e5) / 6e4);
  const seconds = Math.floor((diff % 6e4) / 1e3);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex gap-2">
      {[
        { v: days, l: "d" },
        { v: hours, l: "h" },
        { v: minutes, l: "m" },
        { v: seconds, l: "s" },
      ].map(({ v, l }) => (
        <div key={l} className="text-center">
          <div
            className="bg-[#1E0F05] text-[#FFFCF7] rounded-lg px-2 py-1.5 min-w-[40px] text-center font-bold text-lg leading-none"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {pad(v)}
          </div>
          <div className="text-[10px] text-[#7A5C3E] mt-1 uppercase tracking-wider font-semibold">{l}</div>
        </div>
      ))}
    </div>
  );
}

export default function Raffle() {
  const [userEntries, setUserEntries] = useState(5);
  const [enteredIds, setEnteredIds] = useState<Set<number>>(new Set());

  const handleEnter = (raffle: Raffle) => {
    if (userEntries >= raffle.entriesRequired && !enteredIds.has(raffle.id)) {
      setUserEntries((prev) => prev - raffle.entriesRequired);
      setEnteredIds((prev) => new Set(prev).add(raffle.id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2E2C4] rounded-2xl mb-4">
          <Gift className="w-8 h-8 text-[#7C3D12]" />
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#1E0F05] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Raffle &amp; Prizes
        </h1>
        <p className="text-[#7A5C3E] text-lg max-w-lg mx-auto">
          Earn tickets with every purchase and enter to win amazing prizes. Good luck!
        </p>
      </div>

      {/* Entry balance */}
      <div className="bg-[#7C3D12] text-[#FFFCF7] rounded-2xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[#F2E2C4] text-sm font-semibold mb-1">Your ticket balance</p>
          <div className="flex items-center gap-3">
            <Ticket className="w-8 h-8 text-[#D4A847]" />
            <span className="text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              {userEntries}
            </span>
            <span className="text-[#F2E2C4] text-sm">tickets</span>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-4 text-sm space-y-1.5">
          <p className="text-[#F2E2C4] font-bold text-xs uppercase tracking-widest mb-2">Earn more tickets</p>
          <p className="text-[#FFFCF7]">🛒 1 ticket per R100 spent</p>
          <p className="text-[#FFFCF7]">👥 5 tickets for a referral</p>
          <p className="text-[#FFFCF7]">📅 1 ticket per daily check-in</p>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-[#F2E2C4] border border-[rgba(124,61,18,0.15)] rounded-2xl p-6 mb-10">
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="w-5 h-5 text-[#C8591A]" />
          <h3
            className="text-lg font-bold text-[#1E0F05]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How It Works
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { n: 1, title: "Earn Entries", desc: "Get tickets through purchases, referrals, and daily check-ins." },
            { n: 2, title: "Enter Raffles", desc: "Use your tickets to enter any active raffle below." },
            { n: 3, title: "Win Prizes", desc: "Winners drawn live on Facebook when the raffle ends." },
          ].map(({ n, title, desc }) => (
            <div key={n} className="flex gap-3">
              <div className="bg-[#7C3D12] text-[#FFFCF7] rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                {n}
              </div>
              <div>
                <h4 className="font-bold text-[#1E0F05] mb-0.5">{title}</h4>
                <p className="text-sm text-[#7A5C3E]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Raffle cards */}
      <h2
        className="text-2xl font-bold text-[#1E0F05] mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Active Raffles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {raffles.filter((r) => r.active).map((raffle) => {
          const canEnter = userEntries >= raffle.entriesRequired;
          const entered = enteredIds.has(raffle.id);
          return (
            <div
              key={raffle.id}
              className="bg-[#FFFCF7] rounded-2xl overflow-hidden border border-[rgba(124,61,18,0.08)] hover:shadow-md transition-all flex flex-col"
            >
              {/* Banner */}
              <div
                className="h-40 flex items-center justify-center relative"
                style={{ background: `${raffle.color}22` }}
              >
                <span className="text-7xl">{raffle.image}</span>
                <span className="absolute top-3 right-3 bg-[#4A9B6F] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Active
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="text-lg font-bold text-[#1E0F05] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {raffle.title}
                </h3>
                <p className="text-xs text-[#7A5C3E] mb-4 line-clamp-2">{raffle.description}</p>

                {/* Prize */}
                <div className="bg-[#F2E2C4] rounded-xl p-3 mb-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Trophy className="w-4 h-4 text-[#C8591A]" />
                    <span className="text-[10px] font-bold text-[#7C3D12] uppercase tracking-wider">Prize</span>
                  </div>
                  <p className="text-sm font-bold text-[#1E0F05]">{raffle.prize}</p>
                  <p
                    className="text-xs text-[#7A5C3E] mt-0.5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Value: R{raffle.prizeValue.toLocaleString()}
                  </p>
                </div>

                {/* Countdown */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-3">
                    <Clock className="w-4 h-4 text-[#7A5C3E]" />
                    <span className="text-[10px] font-bold text-[#7A5C3E] uppercase tracking-wider">Time left</span>
                  </div>
                  <Countdown endDate={raffle.endDate} />
                </div>

                {/* Entry cost */}
                <p className="text-xs text-[#7A5C3E] mb-4 flex-1">
                  Costs{" "}
                  <span className="font-bold text-[#1E0F05]">
                    {raffle.entriesRequired} {raffle.entriesRequired === 1 ? "ticket" : "tickets"}
                  </span>{" "}
                  to enter.
                </p>

                {/* CTA */}
                {entered ? (
                  <div className="flex items-center justify-center gap-2 bg-[#4A9B6F]/15 text-[#4A9B6F] py-3 rounded-xl font-bold text-sm border border-[#4A9B6F]/30">
                    <CheckCircle className="w-5 h-5" />
                    Entered — Good luck!
                  </div>
                ) : (
                  <button
                    onClick={() => handleEnter(raffle)}
                    disabled={!canEnter}
                    className={`w-full py-3 rounded-xl font-bold text-sm transition ${
                      canEnter
                        ? "bg-[#7C3D12] hover:bg-[#6B3410] text-[#FFFCF7] shadow"
                        : "bg-[#EDE0CC] text-[#C4A882] cursor-not-allowed"
                    }`}
                  >
                    {canEnter
                      ? "Enter Raffle"
                      : `Need ${raffle.entriesRequired - userEntries} more ${
                          raffle.entriesRequired - userEntries === 1 ? "ticket" : "tickets"
                        }`}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
