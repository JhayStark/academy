import React from 'react';
import { InputField, SelectFormField } from '@/components/forms/fields';

const Education = ({ form }: any) => {
  return (
    <>
      <InputField
        name='grade'
        label='School'
        placeholder='Enter name'
        form={form}
      />
      <InputField
        name='grade'
        label='Grade'
        placeholder='Enter name'
        form={form}
      />
      <InputField
        name='grade'
        label='Current Club'
        placeholder='Enter name'
        form={form}
      />
      <InputField
        name='grade'
        label='Favorite Foot'
        placeholder='Enter name'
        form={form}
      />
      <InputField
        name='grade'
        label='Prefered Position'
        placeholder='Enter name'
        form={form}
      />
    </>
  );
};

export default Education;
