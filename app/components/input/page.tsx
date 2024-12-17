import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react'

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <Card className='p-6 gap-4 flex flex-col'>
            <Input placeholder='placeholder text'/>
            <Input placeholder='placeholder text'/>
            <Input placeholder='placeholder text'/>
        </Card>
    </div>
  )
}

export default page