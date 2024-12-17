import { Card } from '@/components/ui/card'
import { MoveUpRightIcon, ThumbsUp } from 'lucide-react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex items-center justify-center w-full min-h-[calc(100vh-4rem)]'>
        <Card className="m-4 p-8">
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
            <div className="col-span-1 p-2 pt-12 text-sm text-gray-200 bg-black rounded-xl flex">
              <p>Manage Deals</p>
              <MoveUpRightIcon color='white' className='size-5'/>
            </div>
          </div>
        </Card>
      </div>
  )
}

export default page