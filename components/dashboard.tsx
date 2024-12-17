import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown,
  Users, 
  ThumbsUp, 
  DollarSign, 
  Package,
  BarChart,
  ChevronRight,
  Plus,
  Sheet,
  Wallpaper,
  CalendarDays,
  MoveUpRight,
  MoveDownLeft,
  MoveUpRightIcon
} from "lucide-react";

const Dashboard = () => {
  const metrics = [
    { label: 'Total Impressions', value: '5.2M', change: '+2M', icon: Users },
    { label: 'Media Exposure Value', value: '$1.2M', change: '+11%', icon: DollarSign },
    { label: 'Cost Per Impression', value: '$0.05', change: '', icon: Package },
    { label: 'Attendance', value: '250K', change: '+24%', icon: Users },
    { label: 'Engagement Rate', value: '12%', change: '-1.92%', icon: BarChart },
  ];

  const activations = [
    { name: 'Toronto Ultra Major V', location: 'Central (Toronto)', amount: 32000, status: 'Pending' },
    { name: 'Nuit Blance', location: 'West (Vancouver)', amount: 48000, status: 'Approved' },
    { name: 'All Your Friends Fest', location: 'Central (Ottawa)', amount: 54000, status: 'Declined' },
    { name: 'VELD', location: 'Central (Toronto)', amount: 21000, status: 'Pending' },
    { name: 'Baseball Canada', location: 'West (Vancouver)', amount: 45000, status: 'Pending' },
    { name: 'Nuit Blance', location: 'West (Vancouver)', amount: 48000, status: 'Approved' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="text-sm text-gray-500">Hello Leslie,</div>
          <h1 className="text-2xl font-medium">Good Morning</h1>
        </div>
        
        <div className="flex items-center gap-4 rounded-full bg-white p-1">
          <Button variant="outline" className="flex items-center gap-3 border-none bg-custom-background rounded-full">
            <Sheet strokeWidth={1} />
            <p className='font-normal'>Region </p>
            <ChevronDown className="size-6" strokeWidth={1} />
          </Button>
          <Button variant="outline" className="flex items-center gap-3 border-none bg-custom-background rounded-full">
            <Wallpaper strokeWidth={1} />
            <p className='font-normal'>Brand </p>
            <ChevronDown className="size-6" strokeWidth={1} />
          </Button>
          <Button variant="outline" className="flex items-center gap-3 border-none bg-custom-background rounded-full">
            <CalendarDays strokeWidth={1} />
            <p className='font-normal'>Date Range </p>
            <Plus className="size-6" strokeWidth={1} />
          </Button>
        </div>
        <Button className="black rounded-full">Create New Activation</Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-5 gap-4 mb-8 px-6 py-2 bg-white rounded-xl">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-2 border-none flex items-center gap-4 shadow-none">
            <metric.icon strokeWidth={1} className="size-8 p-2 mb-2 rounded-full bg-custom-background" />
            <div>
              <div className='flex items-baseline gap-1'>
                <div className="text-xl font-semibold">{metric.value}</div>
                {metric.change && (
                  <div className={`flex items-center text-sm font-medium ${metric.change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                    {metric.change}
                    {metric.change.includes('-') ? <MoveDownLeft className='size-2'/> : <MoveUpRight className='size-2'/>}
                  </div>
                )}
              </div>
              <div className="text-[10px] text-gray-500">{metric.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Upcoming Activations */}
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3 bg-white rounded-2xl p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-medium">Upcoming Activations</h2>
            <Button variant="link">View All</Button>
          </div>
          
          <Card className='border-none shadow-none'>
              {activations.map((activation, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-custom-background my-3 rounded-lg">
                  <div className='basis-2/5'>
                    <div className="font-semibold">{activation.name}</div>
                    <div className="text-xs text-gray-500">{activation.location}</div>
                  </div>
                  <span className="font-semibold ">${activation.amount.toLocaleString()}</span>
                  <span className={`px-3 py-1 rounded-full text-sm text-center  w-[92px] ${
                    activation.status === 'Approved' ? 'bg-custom-green bg-opacity-20 text-custom-green' :
                    activation.status === 'Declined' ? 'bg-custom-red bg-opacity-20 text-custom-red' :
                    'bg-custom-gray-light text-gray-600'
                  }`}>
                    {activation.status}
                  </span>
                  <div className='flex justify-end'>
                    <ChevronRight strokeWidth={1} className="size-6 "/>
                  </div>
                </div>
              ))}
          </Card>
        </div>

        <div className='col-span-2'>
          <div className="flex items-center gap-2 mb-5 text-center p-8 bg-white rounded-2xl">
            <ThumbsUp className="size-10 text-custom-green bg-custom-green bg-opacity-20 p-3 rounded-full" />
            <h2 className="text-lg font-medium text-nowrap">Positive Brand Sentiment</h2>
            <span className="text-xs text-gray-500 ml-auto">12k Votes</span>
          </div>

          <Card className="mb-4 border-none shadow-none p-8">
            <h3 className="text-xl font-semibold">Financial Metrics</h3>
            <div className="text-xs text-gray-500">Financial performance of sponsorship deals</div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-2 pt-6 border border-gray-400 rounded-xl">
                <div className="text-2xl font-semibold">$2.5M</div>
                <div className="text-[9px] text-gray-500">Total Sponsorship Spend</div>
              </div>
              <div className="p-2 pt-6 border border-gray-400 rounded-xl">
                <div className="text-2xl font-semibold">150%</div>
                <div className="text-[9px] text-gray-500">Return on Investment (ROI)</div>
              </div>
              <div className="p-2 pt-6 border border-gray-400 rounded-xl">
                <div className="text-2xl font-semibold">$5</div>
                <div className="text-[9px] text-gray-500">Cost per Engagement</div>
              </div>
              <div className="p-2 pt-6 border border-gray-400 rounded-xl">
                <div className="text-2xl font-semibold">85%</div>
                <div className="text-[9px] text-gray-500">Budget Utilization</div>
              </div>
            </div>

            <div className="grid grid-cols-3 mt-4 gap-4">
              <div className='col-span-2 p-2 pt-6 border border-gray-400 rounded-xl'>
                <div className="text-2xl font-semibold">$16.6K</div>
                <div className="text-[9px] text-gray-500">Cost per Activation</div>
              </div>
              <div className="col-span-1 p-2 pt-6 text-sm text-gray-200 bg-black rounded-xl flex">
                <p>Manage Deals</p>
                <MoveUpRightIcon color='white' className='size-5px'/>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;