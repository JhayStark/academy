'use client';

import React from 'react';
import * as z from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { InputField, SelectFormField } from '@/components/forms/fields';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  playerName: z.string(),
  guardianName: z.string(),
  guardianPhoneNumber: z.string(),
  guardianEmail: z.string(),
  paymentType: z.string(),
  amount: z.string(),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card className='  max-w-[550px] mx-auto'>
      <CardHeader>
        <CardTitle className='text-center'>Register Player</CardTitle>
        <CardDescription className='pb-5 text-gray-500 text-center'>
          Fill out the form below to register a new player
        </CardDescription>
        <Separator />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <InputField form={form} name='playerName' label='Player Name' />
            <InputField form={form} name='guardianName' label='Guardian Name' />
            <InputField
              form={form}
              name='guardianEmail'
              label='Guardian Email'
            />
            <InputField
              form={form}
              name='guardianPhoneNumber'
              label='Guardian Phone Number'
            />
            <SelectFormField
              form={form}
              name='paymentType'
              options={[]}
              label='Payment Type'
            />
            <InputField form={form} name='amount' label='Amount' />
            <Button className='w-full' type='submit'>
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Page;
