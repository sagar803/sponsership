import { Button } from '@/components/ui/button';
import React from 'react';

type Props = {};

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="border-2 border-dashed border-purple-400 p-4 flex flex-col gap-4 rounded-lg m-4 items-center">
      {children}
    </div>
  );
};

const Display: React.FC<Props> = () => {
  return (
    <div className="w-full">
      <Container>
        <Button className="rounded-full h-10">Dashboard</Button>
        <Button className="rounded-full bg-white text-black">Dashboard</Button>
      </Container>
      <Container>
        <Button className="rounded-full bg-white text-black border border-black">Button</Button>
        <Button className="rounded-full">Button</Button>        
        <Button className="rounded-full bg-custom-slate">Button</Button>        
        <Button className="rounded-full bg-custom-gray-dark">Button</Button>        
      </Container>
    </div>
  );
};

export default Display;
