'use client';

import React from 'react';
import { InputField, RadioField, DatePicker } from '@/components/forms/fields';

const PersonalInformation = ({ form }: any) => {
  return (
    <>
      <InputField
        name='firstName'
        label='First name'
        placeholder='Enter first Name'
        form={form}
        required
      />
      <InputField
        name='lastName'
        label='Last name'
        placeholder='Enter last Name'
        form={form}
        required
      />
      <InputField
        name='otherNames'
        label='Other names'
        placeholder='Enter other names'
        form={form}
      />
      <DatePicker name='dateOfBirth' label='Date of Birth' form={form} />
      <RadioField
        form={form}
        label='Sex'
        options={['Male', 'Female']}
        name='sex'
        required
      />
    </>
  );
};

export default PersonalInformation;
