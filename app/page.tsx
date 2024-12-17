"use client"

import React, { useState } from 'react';
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Dashboard from '@/components/dashboard';
import DealsTable from '@/components/deals';
import MolsonPulseLogo from './assets/logo.png'
import Image from 'next/image';


const Layout = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="min-h-screen px-2">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <Image src={MolsonPulseLogo} alt="MolsonPulse Logo" className="h-20"  />
            <span className="text-xl font-semibold">MolsonPulse</span>
          </div>
          
          <div className="flex items-center bg-white rounded-full shadow-sm">
            <Button 
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
              className={`rounded-full ${activeTab === 'dashboard' ? 'bg-black font-bold' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </Button>
            <Button 
              variant={activeTab === 'deals' ? 'default' : 'ghost'}
              className={`rounded-full ${activeTab === 'deals' ? 'bg-black font-bold' : ''}`}
              onClick={() => setActiveTab('deals')}
            >
              Deals
            </Button>
            <Button 
              variant={activeTab === 'activations' ? 'default' : 'ghost'}
              className={`rounded-full ${activeTab === 'activations' ? 'bg-black font-bold' : ''}`}
              onClick={() => setActiveTab('activations')}
            >
              Activations
            </Button>
          </div>
            
          <div className="flex items-center gap-2 ml-4">
            <Search className="size-12 rounded-full p-3 bg-white shadow-sm" />
            <div className='rounded-full flex bg-white items-center justify-center gap-2 px-5 py-2 shadow-sm'>
              <div className='flex flex-col'>
                <span className="text-sm">Leslie Alexander</span>
                <span className="text-xs text-gray-500">Admin</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'deals' && <DealsTable />}
        {activeTab === 'activations' && <div className="p-6">Activations Content</div>}
      </main>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 py-4 mt-8">
        © 2024 MolsonPulse - Deals and Activations Management. All rights reserved.
      </div>
    </div>
  );
};

export default Layout;