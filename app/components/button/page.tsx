import { Button } from '@/components/ui/button';
import React from 'react'

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="border-2 border-dashed p-4 flex flex-col gap-4 rounded-lg m-4 items-center">
      {children}
    </div>
  );
};

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <Container>
        <Button className="rounded-full">Dashboard</Button>
        <Button className="rounded-full bg-white text-black">Dashboard</Button>
      </Container>
      <Container>
        <Button className="rounded-full bg-white text-black border border-black">Button</Button>
        <Button className="rounded-full">Button</Button>        
        <Button className="rounded-full bg-custom-slate">Button</Button>        
        <Button className="rounded-full bg-custom-gray-dark">Button</Button>        
      </Container>
    </div>
  )
}

export default page