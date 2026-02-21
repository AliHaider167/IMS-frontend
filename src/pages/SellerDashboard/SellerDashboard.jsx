import React, { useState, useEffect } from "react";
import SellerHeader from "./components/SellerHeader";
import SellerStatCard from "./components/SellerStatCard";
import SellerProductCard from "./components/SellerProductCard";
import SellerCart from "./components/SellerCart";
import ScanBarcodeModal from "./components/ScanBarcodeModal";
import Loader from "../../components/Loader";
import { getSellerProducts, saleProducts } from "../../services/api";
import { theme } from "../../theme";

export default function SellerDashboard() {
  const [cart, setCart] = useState([]);
  const [showScanModal, setShowScanModal] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([
    { title: "Today's Sales", value: 0 },
    { title: "Today's Revenue", value: "$0.00" },
    { title: "Today's Profit", value: "$0.00", valueClass: "text-green-600" },
  ]);

  useEffect(() => {
    setLoading(true);
    getSellerProducts()
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.barcode.includes(search),
  );

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.barcode === product.barcode);
      if (found) {
        return prev.map((item) =>
          item.barcode === product.barcode
            ? { ...item, qty: item.qty + 1 }
            : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart((prev) => prev.filter((item) => item.barcode !== product.barcode));
  };

  const handleUpdateQty = (product, qty) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.barcode === product.barcode ? { ...item, qty } : item,
      ),
    );
  };

  const handleCompleteSale = async () => {
    setLoading(true);
    try {
      await saleProducts(
        cart.map(({ _id, qty, sellingPrice }) => ({
          productId: _id,
          qty,
          price: sellingPrice,
        })),
      );
      setCart([]);
      // Optionally update stats here
    } catch (err) {
      // Optionally show error
    }
    setLoading(false);
  };

  const handleScanAddToCart = (barcode) => {
    const product = products.find((p) => p.barcode === barcode);
    if (product) handleAddToCart(product);
    setShowScanModal(false);
  };

  return (
    <div className="min-h-screen" style={{ background: theme.colors.bg }}>
      <SellerHeader />
      <main className="max-w-7xl mx-auto px-2 sm:px-4 xl:px-8 py-6">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-6">
              {/* Stat Cards */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {stats.map((stat, idx) => (
                  <SellerStatCard key={idx} {...stat} />
                ))}
              </div>
              {/* Find Products */}
              <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-lg text-gray-900">
                    Find Products
                  </span>
                  <button
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition"
                    onClick={() => setShowScanModal(true)}
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <rect
                        x="3"
                        y="7"
                        width="18"
                        height="10"
                        rx="2"
                        stroke="#fff"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7 7V5a5 5 0 0 1 10 0v2"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Scan Barcode
                  </button>
                </div>
                {/* ...existing code... */}
              </div>
            </div>
            {/* ...existing code... */}
          </div>
        )}
      </main>
    </div>
  );
}

// The duplicate SellerDashboard function has been removed.
