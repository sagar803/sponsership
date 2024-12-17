import { ChevronRight } from 'lucide-react'
import React from 'react'

type Data = {
    name: string;
    location: string;
    amount: number;
    status: 'Approved' | 'Declined' | 'Pending';
}

const DealsCard = ({data}: {data: any}) => {
  return (
    <div>
        <div className="flex justify-between items-center p-4 bg-custom-background my-3 rounded-lg text-xs sm:text-base">
            <div className='basis-2/5'>
                <div className="font-semibold">{data.name}</div>
                <div className="text-xs text-gray-500">{data.location}</div>
            </div>
            <span className="font-semibold ">${data.amount.toLocaleString()}</span>
            <span className={`px-3 py-1 rounded-full text-sm text-center scale-75 sm:scale-100 w-[92px] ${
                data.status === 'Approved' ? 'bg-custom-green bg-opacity-20 text-custom-green' :
                data.status === 'Declined' ? 'bg-custom-red bg-opacity-20 text-custom-red' :
                'bg-custom-gray-light text-gray-600'
            }`}>
                {data.status}
            </span>
                <div className='flex justify-end'>
                <ChevronRight strokeWidth={1} className="size-6 "/>
            </div>
        </div>
    </div>
  )
}

export default DealsCard