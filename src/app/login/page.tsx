import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='h-[100vh] flex '>
      <div className='h-full w-[50%]  relative'>
        <Image src='/header.jpg' fill alt='header' className='object-cover' />
        <div className='absolute top-0 left-0 w-full h-full flex-col flex items-center justify-center'>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70' />
          <h2 className='text-white text-6xl pb-7 relative z-10'>
            Hero Academy
          </h2>
        </div>
      </div>
      <div className='w-full lg:w-[50%]'>
        <div className='mx-auto h-full flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
            <p className='text-sm text-muted-foreground'>
              Enter your credentials to login
            </p>
          </div>

          {/* <p className='px-8 text-center text-sm text-muted-foreground'>
            By clicking logim, you agree to our
            <Link
              href='/terms'
              className='underline underline-offset-4 hover:text-primary'
            >
              Terms of Service
            </Link>
            and
            <Link
              href='/privacy'
              className='underline underline-offset-4 hover:text-primary'
            >
              Privacy Policy
            </Link>
            .
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
