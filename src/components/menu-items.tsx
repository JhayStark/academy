'use client';

import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  title: string;
  route: string;
}
const MenuItem = ({ title, route }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const routeName = route?.split('/')[3];

  const isMatch = routeName ? pathname.includes(routeName) : pathname === route;

  return (
    <button
      onClick={() => router.push(route)}
      className={`${
        isMatch ? 'border-blue-500' : 'border-gray-800'
      } border-b-2  py-[10.5px] px-5 text-[0.9375rem] `}
    >
      {title}
    </button>
  );
};

export default MenuItem;
