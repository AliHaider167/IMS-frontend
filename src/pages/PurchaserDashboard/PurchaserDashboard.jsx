
import React, { useState } from "react";
import PurchaserHeader from "./components/PurchaserHeader";
import PurchaserStatCard from "./components/PurchaserStatCard";
import ProductCard from "./components/ProductCard";
import AddProductModal from "./components/AddProductModal";

const stats = [
	{ title: "Total Products", value: 6, subtitle: "" },
	{ title: "Total Stock", value: 193, subtitle: "Units" },
	{ title: "Inventory Value", value: "$10585.00", subtitle: "Buying cost" },
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

export default function PurchaserDashboard() {
	const [showAddModal, setShowAddModal] = useState(false);

	return (
		<div className="min-h-screen bg-[#f4f8ff]">
			<PurchaserHeader />
			<main className="max-w-7xl mx-auto px-2 sm:px-4 xl:px-8 py-6">
				{/* Stat Cards */}
				<div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6">
					{stats.map((stat, idx) => (
						<PurchaserStatCard key={idx} {...stat} />
					))}
				</div>

				{/* Product Inventory */}
				<div className="bg-white rounded-2xl shadow-sm p-6">
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-2xl font-bold text-gray-900">Product Inventory</h2>
						<button
							className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition"
							onClick={() => setShowAddModal(true)}
						>
							<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="2" rx="1" fill="#fff"/><rect x="11" y="3" width="2" height="18" rx="1" fill="#fff"/></svg>
							Add Product
						</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{products.map((product, idx) => (
							<ProductCard key={idx} product={product} />
						))}
					</div>
				</div>
			</main>
			<AddProductModal open={showAddModal} onClose={() => setShowAddModal(false)} />
		</div>
	);
}
