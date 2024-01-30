import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface CardProps {
  imagePath: string;
  title?: string;
  content?: string;
}

const Card = ({ imagePath, title, content }: CardProps) => (
  <div className='max-w-[275px] space-y-5'>
    <Image src={imagePath} width={51} height={51} alt='icon' />
    <p className='text-[#173931]'>{title}</p>
    <p className='text-sm'>{content}</p>
  </div>
);

const FacilitiesCard = ({ imagePath, title }: CardProps) => (
  <div className='w-[290px] h-[200px] relative'>
    <Image src={imagePath} fill alt='header' className='object-cover' />
    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70'></div>
    <p className='w-full text-center text-white text-sm relative pt-9 z-10'>
      {title}
    </p>
  </div>
);

export default function Home() {
  return (
    <main>
      <section className='h-[875px] relative'>
        <Image src='/header.jpg' fill alt='header' className='object-cover' />

        <div className='absolute top-0 left-0 w-full h-full flex-col flex items-center justify-center'>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70'></div>
          <div className='w-[500px] space-y-3 text-white text-6xl pb-7 relative z-10'>
            <p className='w-full text-center'>WELCOME</p>
            <p className='w-full'>TO DUMMY</p>
            <p className='w-full text-right'>FOOTBALL</p>
            <p className='w-full text-center'>ACADEMY</p>
          </div>
          <Button variant='link' className='bg-white rounded-2xl relative z-10'>
            ENQUIRE
          </Button>
        </div>
      </section>
      <section className='flex justify-center items-center'>
        <div className='max-w-[1140px]  flex-wrap flex items-center justify-center py-16 gap-5 lg:gap-0'>
          <Card
            imagePath='/service4.png'
            title='World class academy coaches and player development team'
            content='Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue'
          />
          <Card
            imagePath='/service2.png'
            title='Immersion with a Liga Europe Academy team'
            content='Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue'
          />
          <Card
            imagePath='/service3.png'
            title='World class match, training and learning experiences'
            content='Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue'
          />
          <Card
            imagePath='/service1.png'
            title='World class / elite competition '
            content='Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue'
          />
        </div>
      </section>
      <section className='bg-[#173931] flex flex-col justify-center items-center py-5'>
        <div className='max-w-[1140px] flex items-center gap-5'>
          <Image src='/about.png' width={300} height={500} alt='header' />
          <div className='text-white space-y-5'>
            <p className='text-center text-3xl'>About Us</p>
            <p>
              Lorem ipsum dolor consectetur adipiscing tempor labore dolore
              magna aliqua lacus vitae congueLorem ipsum dolor consectetur
              adipiscing tempor labore dolore magna aliqua lacus vitae
              congueLorem ipsum dolor consectetur adipiscing tempor labore
              dolore magna aliqua lacus vitae congueLorem ipsum dolor
              consectetur adipiscing tempor labore dolore magna aliqua lacus
              vitae congueLorem ipsum dolor consectetur adipiscing tempor labore
              dolore magna aliqua lacus vitae congue.
            </p>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center py-16 '>
        <h2 className='text-3xl pb-5 text-[#173931]'>
          Find Your Game With The Dummy Football Academy
        </h2>
        <div className='max-w-[1140px] space-y-3  text-lg'>
          <div className='flex items-start gap-3'>
            <p>01</p>
            <p>Know and Understand player identity</p>
          </div>
          <div className='flex items-start gap-3'>
            <p>02</p>
            <p>Develop 360-degree player plan</p>
          </div>
          <div className='flex items-start gap-3'>
            <p>03</p>
            <p>Identity player role models</p>
          </div>
          <div className='flex items-start gap-3'>
            <p>04</p>
            <p>Establish daily habits on and off the field</p>
          </div>
        </div>
      </section>
      <section className='flex justify-center items-center bg-[#F5E1DA]'>
        <div className='max-w-[1140px] flex-col flex items-center justify-center py-16'>
          <h2 className='text-3xl pb-5 text-[#173931]'>Gallery</h2>
          <div className='flex items-center gap-3'>
            <Image src='/test.png' width={300} height={500} alt='header' />
            <Image src='/test.png' width={300} height={500} alt='header' />
            <Image src='/test.png' width={300} height={500} alt='header' />
          </div>
        </div>
      </section>
      <section className='flex justify-center items-center '>
        <div className='max-w-[1140px] flex-col flex items-center justify-center py-16'>
          <h2 className='text-3xl pb-5 text-[#173931]'>Facilities</h2>
          <div className='flex flex-wrap items-center gap-5 justify-center'>
            <FacilitiesCard title='SWIMMING COMPLEX' imagePath='/header.jpg' />
            <FacilitiesCard title='REST ROOM' imagePath='/header.jpg' />
            <FacilitiesCard
              title='PROFESSIONAL COACH'
              imagePath='/header.jpg'
            />
            <FacilitiesCard title='GYM' imagePath='/header.jpg' />
            <FacilitiesCard title='PITCHES' imagePath='/header.jpg' />
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
