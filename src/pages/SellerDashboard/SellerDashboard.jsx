
import React, { useState } from "react";
import SellerHeader from "./components/SellerHeader";
import SellerStatCard from "./components/SellerStatCard";
import SellerProductCard from "./components/SellerProductCard";
import SellerCart from "./components/SellerCart";
import ScanBarcodeModal from "./components/ScanBarcodeModal";

const stats = [
	{ title: "Today's Sales", value: 0 },
	{ title: "Today's Revenue", value: "$0.00" },
	{ title: "Today's Profit", value: "$0.00", valueClass: "text-green-600" },
];

const products = [
	{
		name: "Nike Air Max 270",
		category: "Running Shoes",
		description: "Lightweight running shoes with Air Max cushioning",
		barcode: "1234567890123",
		buyingPrice: 85,
		sellingPrice: 140,
		stock: 25,
		image: "https://images.unsplash.com/photo-1517260911205-8c1e1a0b6b8c?auto=format&fit=crop&w=600&q=80"
	},
	{
		name: "Adidas Ultraboost 22",
		category: "Running Shoes",
		description: "Premium running shoes with Boost technology",
		barcode: "2345678901234",
		buyingPrice: 95,
		sellingPrice: 160,
		stock: 18,
		image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
	},
	{
		name: "Converse Chuck Taylor",
		category: "Casual Shoes",
		description: "Classic canvas high-top sneakers",
		barcode: "3456789012345",
		buyingPrice: 35,
		sellingPrice: 65,
		stock: 40,
		image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
	}
];

export default function SellerDashboard() {
	const [cart, setCart] = useState([]);
	const [showScanModal, setShowScanModal] = useState(false);
	const [search, setSearch] = useState("");

	const filteredProducts = products.filter(
		(p) =>
			p.name.toLowerCase().includes(search.toLowerCase()) ||
			p.category.toLowerCase().includes(search.toLowerCase()) ||
			p.barcode.includes(search)
	);

	const handleAddToCart = (product) => {
		setCart((prev) => {
			const found = prev.find((item) => item.barcode === product.barcode);
			if (found) {
				return prev.map((item) =>
					item.barcode === product.barcode ? { ...item, qty: item.qty + 1 } : item
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
				item.barcode === product.barcode ? { ...item, qty } : item
			)
		);
	};

	const handleCompleteSale = () => {
		setCart([]);
		// Optionally show a success message
	};

	const handleScanAddToCart = (barcode) => {
		const product = products.find((p) => p.barcode === barcode);
		if (product) handleAddToCart(product);
		setShowScanModal(false);
	};

	return (
		<div className="min-h-screen bg-[#f4f8ff]">
			<SellerHeader />
			<main className="max-w-7xl mx-auto px-2 sm:px-4 xl:px-8 py-6">
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
								<span className="font-semibold text-lg text-gray-900">Find Products</span>
								<button
									className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition"
									onClick={() => setShowScanModal(true)}
								>
									<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#fff" strokeWidth="1.5"/><path d="M7 7V5a5 5 0 0 1 10 0v2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
									Scan Barcode
								</button>
							</div>
							<input
								className="input"
								placeholder="Search by name, barcode, or category..."
								value={search}
								onChange={e => setSearch(e.target.value)}
							/>
						</div>

						{/* Available Shoes */}
						<div className="bg-white rounded-2xl shadow-sm p-6">
							<div className="font-semibold text-lg text-gray-900 mb-4">Available Shoes ({filteredProducts.length})</div>
							<div className="overflow-x-auto">
								<div className="flex gap-6 min-w-[700px]">
									{filteredProducts.map((product, idx) => (
										<SellerProductCard key={idx} product={product} onAddToCart={() => handleAddToCart(product)} />
									))}
								</div>
							</div>
						</div>
					</div>
					{/* Shopping Cart */}
					<div className="w-full xl:w-[370px] flex-shrink-0">
						<SellerCart
							cart={cart}
							onRemove={handleRemoveFromCart}
							onUpdateQty={handleUpdateQty}
							onCompleteSale={handleCompleteSale}
						/>
					</div>
				</div>
			</main>
			<ScanBarcodeModal open={showScanModal} onClose={() => setShowScanModal(false)} onAddToCart={handleScanAddToCart} />
		</div>
	);
}
