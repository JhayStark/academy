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
    route: '/admin',
  },
  {
    title: 'Teams',
    route: '/admin/teams',
  },
  {
    title: 'Players',
    route: '/admin/players',
  },
  {
    title: 'Coaches',
    route: '/admin/coaches',
  },
  {
    title: 'Payments',
    route: '/admin/payments',
  },
];
const Layout = ({ children }: LayoutProps) => {
  const pathName = usePathname();
  return (
    <div className='bg-gray-900 min-h-[100vh] py-5 md:pt-14 px-3'>
      <div className='mx-auto max-w-[1040px]'>
        <div className='text-white'>
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
            <div className='flex-grow inline border-b-2 border-gray-800' />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
