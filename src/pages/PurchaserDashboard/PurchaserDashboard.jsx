
import React, { useState, useEffect } from "react";
import PurchaserHeader from "./components/PurchaserHeader";
import PurchaserStatCard from "./components/PurchaserStatCard";
import ProductCard from "./components/ProductCard";
import AddProductModal from "./components/AddProductModal";
import EditProductModal from "./components/EditProductModal";
import { getPurchaserProducts } from "../../services/api";
 
 export default function PurchaserDashboard() {
	const [showAddModal, setShowAddModal] = useState(false);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [stats, setStats] = useState([
		{ title: "Total Products", value: 0, subtitle: "" },
		{ title: "Total Stock", value: 0, subtitle: "Units" },
		{ title: "Inventory Value", value: "$0.00", subtitle: "Buying cost" },
	]);
	const [showEditModal, setShowEditModal] = useState(false);
	const [editProduct, setEditProduct] = useState(null);

	useEffect(() => {
		setLoading(true);
		getPurchaserProducts()
			.then((res) => {
				setProducts(res.data.products);
				// Update stats
				setStats([
					{ title: "Total Products", value: res.data.products.length, subtitle: "" },
					{ title: "Total Stock", value: res.data.products.reduce((sum, p) => sum + p.stock, 0), subtitle: "Units" },
					{ title: "Inventory Value", value: "$" + res.data.products.reduce((sum, p) => sum + p.buyingPrice * p.stock, 0).toFixed(2), subtitle: "Buying cost" },
				]);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	const handleEdit = (product) => {
		setEditProduct(product);
		setShowEditModal(true);
	};

	const handleEditSave = () => {
		setShowEditModal(false);
		setEditProduct(null);
		// Refresh product list
		setLoading(true);
		getPurchaserProducts()
			.then((res) => {
				setProducts(res.data.products);
				setStats([
					{ title: "Total Products", value: res.data.products.length, subtitle: "" },
					{ title: "Total Stock", value: res.data.products.reduce((sum, p) => sum + p.stock, 0), subtitle: "Units" },
					{ title: "Inventory Value", value: "$" + res.data.products.reduce((sum, p) => sum + p.buyingPrice * p.stock, 0).toFixed(2), subtitle: "Buying cost" },
				]);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	};

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
							<ProductCard key={idx} product={product} onEdit={handleEdit} />
						))}
					</div>
				</div>
			</main>
			<AddProductModal open={showAddModal} onClose={() => setShowAddModal(false)} />
			<EditProductModal open={showEditModal} onClose={() => setShowEditModal(false)} product={editProduct} onSave={handleEditSave} />
		</div>
	);
 }
