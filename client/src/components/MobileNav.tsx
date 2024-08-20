import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Menu } from 'lucide-react';

import { Button } from './ui/button';
import { Separator } from './ui/separator';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-pink-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Have you got the munchies?</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-pink-500">Log Me In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
