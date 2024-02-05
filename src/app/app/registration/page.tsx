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

const registrationPages = [
  'Personal Information',
  'Resdential Information',
  'Guardian Information',
  'Health Information',
  'Education & Athletic Information',
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
    const presentPage = query ? parseInt(query) : 0;
    if (presentPage < registrationPages.length) {
      router.push(`/app/registration?page=${presentPage + 1}`);
    }
  };

  const previousPage = () => {
    const presentPage = query ? parseInt(query) : 1;
    const previousPage = presentPage - 1;
    if (presentPage > 1) {
      router.push(`/app/registration?page=${previousPage}`);
    } else {
      router.push(`/app/registration`);
    }
  };

  const calculateProgress = () => {
    const presentPage = query ? parseInt(query) : 1;
    return (presentPage / registrationPages.length) * 100;
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card className=' bg-slate-50  max-w-[550px] mx-auto '>
      <CardHeader className=''>
        <CardTitle className='text-center text-xl relative'>
          {query && (
            <ArrowLeft
              className='absolute cursor-pointer'
              onClick={previousPage}
            />
          )}
          {`${
            registrationPages[parseInt(query ?? '0') - 1] ||
            'Welcome To Academy'
          } `}
        </CardTitle>
        {query && (
          <CardDescription className='pb-5 text-gray-500 text-center'>
            Fill out the form below to register your ward
          </CardDescription>
        )}
        {query && (
          <Progress
            value={calculateProgress()}
            className='h-1 bg-gray-700'
            color='white'
          />
        )}
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6 p-1 overflow-y-auto  '
          >
            {!query && (
              <div className='space-y-3'>
                <p>
                  <span className='italic'>Welcome to the pitch!</span> ⚽️
                </p>
                <div className='space-y-5 text-justify'>
                  <p>
                    We&apos;re thrilled to have [ward&apos;s name] join our
                    soccer academy at [academy name]! Get ready for a season of
                    fun, skill-building, and teamwork as [ward&apos;s name]
                    hones their footwork, builds confidence, and makes lasting
                    memories with our passionate coaches and fellow future
                    stars.
                  </p>
                  <p>
                    Complete your registration and secure your spot on the team!
                  </p>
                  <p>
                    Just click the button below to finalize the process and kick
                    off this exciting journey:
                  </p>

                  <p>
                    We can&apos;t wait to see your little Messi or Ronaldo in
                    action!
                  </p>
                  <p>Cheers,</p>
                  <p>The [Academy name] Team</p>
                  <p>
                    P.S. Need any help? Contact us at [email address or phone
                    number] - we&apos;re always happy to assist!
                  </p>
                </div>
              </div>
            )}
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
            {parseInt(query ?? '0') < registrationPages.length ? (
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
