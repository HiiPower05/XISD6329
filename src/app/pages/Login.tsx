import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Coffee } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setNotice("");

  if (!email || !password) {
    setError("Please fill in all fields.");
    return;
  }

  const supabase = (window as any).hhSupabase;

  if (!supabase) {
    setError("Authentication service is unavailable. Please try again.");
    return;
  }

  setLoading(true);

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    if (!data.session || !data.user) {
      setError("Sign-in failed. Please try again.");
      return;
    }

    navigate("/");
  } catch (err) {
    setError("Unable to sign in. Please try again.");
    console.error("Login error:", err);
  } finally {
    setLoading(false);
  }
};

  

  return (
    <div className="min-h-screen flex">
      {/* Left panel — photo */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&h=1200&fit=crop&auto=format"
          alt="Warm café interior with wooden tables and soft lighting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F05]/80 via-[#1E0F05]/20 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
              <span className="text-4xl">🦛</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Happy Hippo<br />Café
          </h1>
          <p className="text-white/80 text-lg max-w-sm leading-relaxed">
            Where every sip tells a story. Sourced with love, served with soul — right here in South Africa.
          </p>
          <div className="mt-8 flex gap-6">
            <div>
              <p className="text-3xl font-bold">4.9★</p>
              <p className="text-white/70 text-sm mt-1">Customer rating</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-3xl font-bold">12k+</p>
              <p className="text-white/70 text-sm mt-1">Happy customers</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-3xl font-bold">18+</p>
              <p className="text-white/70 text-sm mt-1">Menu items</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 bg-[#FBF5ED]">
        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-3 mb-10">
          <div className="bg-[#7C3D12] rounded-2xl p-3">
            <span className="text-2xl">🦛</span>
          </div>
          <span className="text-2xl font-bold text-[#1E0F05]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Happy Hippo Café
          </span>
        </div>

        <div className="max-w-md w-full mx-auto lg:mx-0">
          <div className="mb-8">
            <h2
              className="text-4xl font-bold text-[#1E0F05] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Welcome back
            </h2>
            <p className="text-[#7A5C3E] text-base">
              Sign in to order your favourite brew.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {notice && (
              <p role="status" className="rounded-xl border border-[rgba(124,61,18,0.16)] bg-white px-4 py-3 text-sm text-[#7A5C3E]">
                {notice}
              </p>
            )}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-[#4A1E08] mb-2">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[rgba(124,61,18,0.2)] bg-white focus:outline-none focus:ring-2 focus:ring-[#C8591A] focus:border-transparent transition text-[#1E0F05] placeholder-[#C4A882]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4A1E08] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-[rgba(124,61,18,0.2)] bg-white focus:outline-none focus:ring-2 focus:ring-[#C8591A] focus:border-transparent transition text-[#1E0F05] placeholder-[#C4A882]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A5C3E] hover:text-[#1E0F05] transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="text-right mt-2">
                <button type="button" onClick={() => setNotice("Password recovery will be available when account services are connected.")} className="text-sm text-[#C8591A] hover:text-[#7C3D12] font-semibold transition">
                  Forgot password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#7C3D12] hover:bg-[#6B3410] text-[#FFFCF7] py-3.5 rounded-xl font-bold text-base transition disabled:opacity-60 shadow-lg shadow-[#7C3D12]/25"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>  
        </div>
      </div>
    </div>
  );
}
