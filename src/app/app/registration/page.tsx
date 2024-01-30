'use client';

import * as z from 'zod';
import React, { useMemo } from 'react';
import PersonalInformation from '@/components/registration/personal-information';
import ResidentialInformation from '@/components/registration/residential-information';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Progress } from '@/components/ui/progress';
import { useSearchParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ParentalInformation from '@/components/registration/parental-information';
import HealthInformation from '@/components/registration/health-information';
import Education from '@/components/registration/education';

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  otherNames: z.string().optional(),
  dateOfBirth: z.string(),
  sex: z.string(),
  residentialAddress: z.string(),
  community: z.string(),
  school: z.string(),
  grade: z.string(),
  currentClub: z.string(),
  nationality: z.string(),
  phone: z.string(),
  email: z.string().email(),
  socials: z.string(),
  fatherName: z.string(),
  fatherPhone: z.string(),
  fatherEmail: z.string(),
  fatherOccupation: z.string(),
  motherName: z.string(),
  motherPhone: z.string(),
  motherEmail: z.string(),
  motherOccupation: z.string(),
  favoriteFoot: z.string(),
  position: z.string(),
  height: z.string(),
  weight: z.string(),
  medicalHistory: z.string(),
  anyCongenitalDeformity: z.string(),
  bloodGroup: z.string(),
  allergy: z.string(),
  picture: z.string(),
});

const registratrationPages = [
  'Personal',
  'Resdential',
  'Guardian',
  'Health',
  'Education & Athletic',
];

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const query: string | null = useMemo(
    () => searchParams.get('page'),
    [searchParams]
  );

  const nextPage = () => {
    const presentPage = query ? parseInt(query) : 1;
    if (presentPage < registratrationPages.length) {
      router.push(`/app/registration?page=${presentPage + 1}`);
    }
  };

  const previousPage = () => {
    const presentPage = query ? parseInt(query) : 1;
    const previousPage = presentPage - 1;
    if (presentPage > 1) {
      router.push(`/app/registration?page=${previousPage}`);
    }
  };

  const calculateProgress = () => {
    const presentPage = query ? parseInt(query) : 1;
    return (presentPage / registratrationPages.length) * 100;
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Card className='bg-gray-800 border-0 max-w-[550px] mx-auto '>
      <CardHeader className='text-white'>
        <CardTitle className='text-center text-xl relative'>
          <ArrowLeft
            className='absolute cursor-pointer'
            onClick={previousPage}
          />
          {`${registratrationPages[parseInt(query ?? '0') - 1]} Information`}
        </CardTitle>
        <CardDescription className='pb-5 text-gray-500 text-center'>
          Fill out the form below to register your ward
        </CardDescription>
        <Progress
          value={calculateProgress()}
          className='h-1 bg-gray-700'
          color='white'
        />
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6 p-1 overflow-y-auto  '
          >
            {parseInt(query ?? '0') === 1 && (
              <PersonalInformation form={form} />
            )}
            {parseInt(query ?? '0') === 2 && (
              <ResidentialInformation form={form} />
            )}
            {parseInt(query ?? '0') === 3 && (
              <ParentalInformation form={form} />
            )}
            {parseInt(query ?? '0') === 4 && <HealthInformation form={form} />}
            {parseInt(query ?? '0') === 5 && <Education form={form} />}
            {parseInt(query ?? '0') < registratrationPages.length ? (
              <Button className='w-full' type='button' onClick={nextPage}>
                Next
              </Button>
            ) : (
              <Button className='w-full'>Register</Button>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Page;
