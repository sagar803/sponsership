import DealsCard from '@/components/deals-card'
import { Card } from '@/components/ui/card'
import { MoveUpRightIcon, ThumbsUp } from 'lucide-react'
import React from 'react'

const data = [
  { name: 'Toronto Ultra Major V', location: 'Central (Toronto)', amount: 32000, status: 'Pending' },
  { name: 'Nuit Blance', location: 'West (Vancouver)', amount: 48000, status: 'Approved' },
  { name: 'All Your Friends Fest', location: 'Central (Ottawa)', amount: 54000, status: 'Declined' },
  { name: 'VELD', location: 'Central (Toronto)', amount: 21000, status: 'Pending' },
  { name: 'Baseball Canada', location: 'West (Vancouver)', amount: 45000, status: 'Pending' },
  { name: 'Nuit Blance', location: 'West (Vancouver)', amount: 48000, status: 'Approved' },
];


const page = () => {
  return (
      <div className='flex items-center justify-center w-full min-h-[calc(100vh-4rem)]'>
        <Card className='w-full max-w-[600px] p-6 rounded-xl'>
          <DealsCard data={data[0]}/>
          <DealsCard data={data[1]}/>
          <DealsCard data={data[2]}/>
        </Card>
      </div>
  )
}

export default page