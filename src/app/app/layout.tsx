'use client';

import React from 'react';
import Navbar from '@/components/navbar';
import MenuItem from '@/components/menu-items';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}
const menuItems = [
  {
    title: 'Home',
    route: '/app',
  },
  {
    title: 'Statistics',
    route: '/app/stats',
  },
  {
    title: 'Profile',
    route: '/app/profile',
  },
];
const Layout = ({ children }: LayoutProps) => {
  const pathName = usePathname();
  return (
    <div className=' min-h-[100vh] bg-slate-50 py-5 md:pt-14 px-3'>
      <div className='mx-auto max-w-[1040px]'>
        <div>
          <Navbar />
          <div className='flex transition-all pb-8'>
            {!pathName.includes('registration') &&
              menuItems.map(item => (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  route={item.route}
                />
              ))}
            <div className='flex-grow inline border-b-2 ' />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
