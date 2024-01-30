import React from 'react';
import { InputField, SelectFormField } from '@/components/forms/fields';

const ResidentialInformation = ({ form }: any) => {
  return (
    <>
      <InputField
        name='residentialAddress'
        label='Resdential Address'
        placeholder='Enter home address'
        form={form}
        required
      />
      <InputField
        name='community'
        label='Community'
        placeholder='Select Community'
        form={form}
      />
      <InputField
        name='grade'
        label='Nationality'
        placeholder=''
        form={form}
        required
      />
    </>
  );
};

export default ResidentialInformation;
