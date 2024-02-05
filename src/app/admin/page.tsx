import Link from 'next/link';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Card } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: number;
  link: { href: string; text: string };
}

const StatCard = ({ title, value, link }: StatCardProps) => {
  return (
    <Card className='w-full lg:w-[300px] px-10 flex flex-col justify-center  h-[136px] lg:h-[188px]'>
      <p className='pb-3 lg:pb-8 text-gray-800'>{title}</p>
      <p className='font-semibold text-4xl '>{value}</p>
      <Link href={link.href} className='text-blue-600 font-medium text-sm'>
        {link.text}
      </Link>
    </Card>
  );
};

interface PaymentCardProps {
  paidBy: string;
  value: number;
  date: string;
}

const PaymentCard = ({ paidBy, value, date }: PaymentCardProps) => {
  return (
    <div className='w-full flex justify-between items-end border-b-2 py-3 '>
      <div className='space-y-1 '>
        <p className=' text-gray-800 font-semibold text-sm'>{paidBy}</p>
        <p className='text-gray-600 text-xs'>Paid on {date}</p>
      </div>
      <div>
        <p className='font-medium text-sm text-green-700  '>GH₵ {value}</p>
      </div>
    </div>
  );
};
const Page = () => {
  return (
    <div>
      <div className='flex items-center justify-between pb-2'>
        <h2 className='font-semibold text-2xl'>Dashboard</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className='bg-blue-600 rounded px-2 py-1 text-white'>
            Add New
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Player</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Coach</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='flex gap-6 flex-wrap mb-6'>
        <StatCard
          title='Players'
          value={234}
          link={{ href: '/', text: 'See all Players' }}
        />
        <StatCard
          title='Teams'
          value={234}
          link={{ href: '/', text: 'See all Teams' }}
        />
        <StatCard
          title='Coaches'
          value={234}
          link={{ href: '/', text: 'See all Coaches' }}
        />
      </div>
      <div className='flex lg:flex-row flex-col  lg:h-[514px] w-full gap-6'>
        <div>
          <h2 className='pb-2 font-semibold text-gray-800'>
            Player registrations
          </h2>
          <Card className='w-full lg:w-[682px] h-[486.5px] lg:h-full '></Card>
        </div>
        <div>
          <h2 className='pb-2 font-semibold text-gray-800'>Recent payments</h2>
          <Card className='w-full lg:w-[334px] h-[514.5px] lg:h-full px-5 '>
            <PaymentCard paidBy='John Doe' value={100} date='12/12/2022' />
            <PaymentCard paidBy='John Doe' value={100} date='12/12/2022' />
            <PaymentCard paidBy='John Doe' value={100} date='12/12/2022' />
            <PaymentCard paidBy='John Doe' value={100} date='12/12/2022' />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
