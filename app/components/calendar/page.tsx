"use client"
import { Calendar } from '@/components/ui/calendar';
import React from 'react'

const page = () => {
  const [date, setDate] = React.useState<any>()
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          className="rounded-md border bg-white"
        />
    </div>
  )
}

export default page