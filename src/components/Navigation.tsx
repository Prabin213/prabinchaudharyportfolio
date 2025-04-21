
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-primary text-2xl font-bold tracking-wider">
          Prabin Chaudhary
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-primary")}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/services" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-primary")}>
                Services
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/projects" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-primary")}>
                Projects
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/courses" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-primary")}>
                Courses
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-primary")}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
