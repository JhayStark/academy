'use client';

import React from 'react';
import { InputField } from '@/components/forms/fields';

const HealthInformation = ({ form }: any) => {
  return (
    <>
      <div className='grid grid-cols-2 items-center gap-5'>
        <InputField
          name='grade'
          label='Height'
          placeholder='187cm'
          form={form}
        />
        <InputField
          name='grade'
          label='Weight'
          placeholder='81kg'
          form={form}
        />
      </div>
      <InputField
        name='grade'
        label='Medical History'
        placeholder='Enter name'
        form={form}
      />
      <InputField
        name='grade'
        label='Congenital Diseases if any'
        placeholder='Enter name'
        form={form}
      />
      <InputField
        name='grade'
        label='Blood Group'
        placeholder='Enter name'
        form={form}
      />
      <InputField
        name='grade'
        label='Allergy'
        placeholder='Enter name'
        form={form}
      />
    </>
  );
};

export default HealthInformation;
