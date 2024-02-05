'use client';

import React from 'react';
import { InputField } from '@/components/forms/fields';

const ParentalInformation = ({ form }: any) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-5'>
        <InputField
          name='grade'
          label='Fathers Name'
          placeholder='Enter name'
          form={form}
        />
        <InputField
          name='grade'
          label='Fathers Phone'
          placeholder='Enter name'
          form={form}
        />
        <InputField
          name='grade'
          label='Fathers Email'
          placeholder='Enter name'
          form={form}
        />
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <InputField
          name='grade'
          label='Mothers Name'
          placeholder='Enter name'
          form={form}
        />
        <InputField
          name='grade'
          label='Mothers Phone'
          placeholder='Enter name'
          form={form}
        />
        <InputField
          name='grade'
          label='Mothers Email'
          placeholder='Enter name'
          form={form}
        />
      </div>
    </>
  );
};

export default ParentalInformation;
