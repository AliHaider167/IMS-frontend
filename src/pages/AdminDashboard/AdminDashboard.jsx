import React, { useState } from "react";
import Header from "../../components/Header";
import StatCard from "./components/StatCard";
import TabNav from "./components/TabNav";
import UserCard from "./components/UserCard";
import AddEmployeeForm from "./components/AddEmployeeForm";
import ActivityCard from "./components/ActivityCard";
import SalesReportCard from "./components/SalesReportCard";

const statCards = [
  {
    title: "Today's Profit",
    value: "$0.00",
    subtitle: "From 0 sales",
    icon: (
      <span className="bg-green-50 rounded-xl p-2">
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <rect width="22" height="22" rx="8" fill="#e6fff2" />
          <path
            d="M12 6v12m0 0l3-3m-3 3l-3-3"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    ),
    iconBg: "bg-green-50",
  },
  {
    title: "Total Revenue",
    value: "$0.00",
    subtitle: "Today's total",
    icon: (
      <span className="bg-blue-50 rounded-xl p-2">
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <rect width="22" height="22" rx="8" fill="#e6f0ff" />
          <path
            d="M6 18V6m0 0l6 6m-6-6l6 6"
            stroke="#2563eb"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    ),
    iconBg: "bg-blue-50",
  },
  {
    title: "Products Sold",
    value: "0",
    subtitle: "Units today",
    icon: (
      <span className="bg-blue-50 rounded-xl p-2">
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <rect width="22" height="22" rx="8" fill="#e6f0ff" />
          <path
            d="M8 17V7m0 0l8 8m-8-8l8 8"
            stroke="#2563eb"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    ),
    iconBg: "bg-blue-50",
  },
  {
    title: "Total Stock",
    value: "193",
    subtitle: "6 products",
    icon: (
      <span className="bg-yellow-50 rounded-xl p-2">
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <rect width="22" height="22" rx="8" fill="#fffbe6" />
          <path
            d="M7 17V7m0 0l10 10m-10-10l10 10"
            stroke="#f59e42"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    ),
    iconBg: "bg-yellow-50",
  },
];

const tabs = [
  {
    label: "Users",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 12c2.7 0 4.5-1.8 4.5-4.5S14.7 3 12 3 7.5 4.8 7.5 7.5 9.3 12 12 12Zm0 1.5c-3 0-9 1.5-9 4.5V21h18v-3c0-3-6-4.5-9-4.5Z"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Activities",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 20v-2M12 4v2M4 12h2m12 0h2M7.76 7.76l1.42 1.42m5.66-5.66l-1.42 1.42M16.24 16.24l-1.42-1.42m-5.66 5.66l1.42-1.42"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Sales Report",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M3 17v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          stroke="#2563eb"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#f4f8ff]">
      <Header />
      <main className="max-w-7xl mx-auto px-2 sm:px-4 xl:px-8 py-6">
        {/* Stat Cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6">
          {statCards.map((card, idx) => (
            <StatCard key={idx} {...card} />
          ))}
        </div>

        {/* Tabs and Content */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="px-2 pt-2">
            <TabNav
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
          <div className="px-6 pb-6 pt-2">
            {activeTab === 0 && (
              <div>
                <div className="flex items-center justify-between mb-4 mt-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    User Management
                  </h2>
                  <button
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition"
                    onClick={() => setShowAddUser(true)}
                  >
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="2"
                        rx="1"
                        fill="#fff"
                      />
                      <rect
                        x="11"
                        y="3"
                        width="2"
                        height="18"
                        rx="1"
                        fill="#fff"
                      />
                    </svg>
                    Add User
                  </button>
                </div>
                {showAddUser && (
                  <AddEmployeeForm onSuccess={() => setShowAddUser(false)} />
                )}
                <UserCard name="admin" role="Super Admin" status="Active" />
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-2">
                  Recent Activities
                </h2>
                <ActivityCard
                  user="admin"
                  action="· Login"
                  desc="User logged in successfully"
                  time="2/20/2026, 5:18:13 PM"
                />
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-2">
                  Today's Sales Report
                </h2>
                <SalesReportCard title="No sales recorded today" value="" />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
