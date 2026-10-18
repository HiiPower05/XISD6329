import { ShoppingCart, Plus, Minus, Trash2, X, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

type Props = {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
};

export default function ShoppingCartPanel({ showCart, setShowCart }: Props) {
  const { cart, cartItemCount, cartTotal, updateQuantity, removeFromCart } = useCart();

  if (!showCart) return null;

  const tax = cartTotal * 0.15;
  const total = cartTotal + tax;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1E0F05]/50 backdrop-blur-sm z-40"
        onClick={() => setShowCart(false)}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-[420px] bg-[#FFFCF7] shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="bg-[#7C3D12] text-[#FFFCF7] px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Your Order
              </h2>
              <p className="text-[#F2E2C4] text-sm mt-0.5">
                {cartItemCount} {cartItemCount === 1 ? "item" : "items"} in cart
              </p>
            </div>
            <button
              onClick={() => setShowCart(false)}
              aria-label="Close cart"
              className="p-2 hover:bg-white/10 rounded-xl transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="bg-[#F2E2C4] rounded-full p-5 mb-4">
                <ShoppingBag className="w-10 h-10 text-[#7C3D12]" />
              </div>
              <h3
                className="text-xl font-bold text-[#1E0F05] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Cart is empty
              </h3>
              <p className="text-[#7A5C3E] text-sm max-w-xs">
                Add something delicious from our menu and it will appear here.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 border border-[rgba(124,61,18,0.08)] hover:border-[rgba(124,61,18,0.18)] transition"
              >
                <div className="flex gap-3">
                  {/* Icon */}
                  <div className="bg-[#F2E2C4] rounded-xl w-16 h-16 flex items-center justify-center text-3xl flex-shrink-0">
                    {item.image}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-[#1E0F05] text-sm leading-tight">{item.name}</h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-[#C4A882] hover:text-red-500 transition flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[#7A5C3E] text-xs mt-0.5">
                      R{item.price.toFixed(2)} each
                    </p>

                    {/* Qty + line total */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 bg-[#F2E2C4] rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#EDE0CC] rounded-lg transition text-[#4A1E08]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-bold text-[#1E0F05] text-sm min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#EDE0CC] rounded-lg transition text-[#4A1E08]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span
                        className="font-bold text-[#C8591A] text-sm"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        R{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-[rgba(124,61,18,0.1)] px-6 pt-4 pb-6 bg-[#FFFCF7]">
            <div className="space-y-2 mb-5">
              <div className="flex justify-between text-sm">
                <span className="text-[#7A5C3E]">Subtotal</span>
                <span
                  className="font-semibold text-[#1E0F05]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  R{cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#7A5C3E]">VAT (15%)</span>
                <span
                  className="font-semibold text-[#1E0F05]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  R{tax.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-base pt-2 border-t border-[rgba(124,61,18,0.1)]">
                <span className="font-bold text-[#1E0F05]">Total</span>
                <span
                  className="font-bold text-[#C8591A] text-lg"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  R{total.toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full bg-[#7C3D12] hover:bg-[#6B3410] text-[#FFFCF7] py-4 rounded-xl font-bold text-base shadow-lg shadow-[#7C3D12]/20 transition flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Proceed to Checkout
            </button>

            <p className="text-center text-xs text-[#7A5C3E] mt-3">
              Secure checkout · EFT, Card &amp; Cash accepted
            </p>
          </div>
        )}
      </div>
    </>
  );
}
