'use client';

import React from 'react';
import { InputField } from '@/components/forms/fields';

const ParentalInformation = ({ form }: any) => {
  return (
    <>
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
    </>
  );
};

export default ParentalInformation;
