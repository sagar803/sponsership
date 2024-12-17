"use client";

import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import DealsTab from "@/components/tabs/deals";
import MolsonPulseLogo from "./assets/logo.png";
import Image from "next/image";
import Dashboard from "@/components/tabs/dashboard";

const Layout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={MolsonPulseLogo}
            alt="MolsonPulse Logo"
            className="h-16 sm:h-20"
          />
          <span className="text-lg sm:text-xl font-semibold">
            MolsonPulse
          </span>
        </div>

        <div className="flex items-center bg-white rounded-full shadow-sm">
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            className={`rounded-full ${
              activeTab === "dashboard" ? "bg-black font-bold" : ""
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </Button>
          <Button
            variant={activeTab === "deals" ? "default" : "ghost"}
            className={`rounded-full ${
              activeTab === "deals" ? "bg-black font-bold" : ""
            }`}
            onClick={() => setActiveTab("deals")}
          >
            Deals
          </Button>
          <Button
            variant={activeTab === "activations" ? "default" : "ghost"}
            className={`rounded-full ${
              activeTab === "activations" ? "bg-black font-bold" : ""
            }`}
            onClick={() => setActiveTab("activations")}
          >
            Activations
          </Button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Search className="w-8 h-8 p-2 bg-white rounded-full shadow-sm" />
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <div className="flex flex-col">
              <span className="text-sm">Leslie Alexander</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-2 sm:px-8">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "deals" && <DealsTab />}
        {activeTab === "activations" && (
          <div className="p-6">Activations Content</div>
        )}
        <div className="text-center text-sm text-gray-500 py-4 mt-8">
          © 2024 MolsonPulse - Deals and Activations Management. All rights
          reserved.
        </div>
      </main>
    </div>
  );
};

export default Layout;
