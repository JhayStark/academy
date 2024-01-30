import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Asterisk, CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import Select from 'react-select';

interface SelectFormFieldProps {
  form: any;
  name: string;
  options: { value: string; label: string }[];
  label?: string;
  className?: string;
  labelStyle?: string;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  describtion?: string;
}

interface InputFieldProps {
  form: any;
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  type?: string;
  required?: boolean;
}

interface RadioFieldProps {
  form: any;
  label: string;
  options: string[];
  name: string;
  required?: boolean;
}

interface DatePickerProps {
  form: any;
  name: string;
  description?: string;
  label?: string;
  required?: boolean;
}

export const InputField = ({
  form,
  name,
  label,
  placeholder,
  description,
  type,
  required,
}: InputFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='text-white '>
          <FormLabel className='flex items-end gap-1'>
            {label}
            {required && <Asterisk className='text-red-500 ' size={14} />}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className='bg-transparent border-gray-700'
              type={type}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const RadioItem = ({ value }: any) => (
  <FormItem className='flex items-center space-x-3 space-y-0'>
    <FormControl>
      <RadioGroupItem value={value} className='border-white text-blue-500' />
    </FormControl>
    <FormLabel className='font-normal'>{value}</FormLabel>
  </FormItem>
);

export const RadioField = ({
  form,
  label,
  options,
  name,
  required,
}: RadioFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='space-y-3 text-white'>
          <FormLabel className='flex items-end gap-1'>
            {label}
            {required && <Asterisk className='text-red-500 ' size={14} />}
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className='grid items-center gap-3 grid-cols-2'
            >
              {options.map((option: string) => (
                <RadioItem key={option} value={option} />
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const SelectFormField = ({
  form,
  name,
  options,
  label,
  describtion,
  className,
  labelStyle,
  isLoading,
  disabled = false,
  placeholder,
}: SelectFormFieldProps) => {
  const customStyles = {
    control: (provided: object) => ({
      ...provided,
      backgroundColor: 'inherit',
      borderColor: 'rgb(55 65 81)',
    }),
    menu: (provided: object) => ({
      ...provided,
      borderColor: 'rgb(55 65 81)',
      backgroundColor: '#111827',
    }),
  };
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field: { name, onBlur, onChange, ref } }) => (
        <FormItem>
          <FormLabel className='text-white'>{label}</FormLabel>
          <FormControl>
            <Select
              options={options}
              name={name}
              isDisabled={disabled}
              onBlur={onBlur}
              ref={ref}
              onChange={e => onChange(e && e.value)}
              isLoading={isLoading}
              placeholder={placeholder}
              value={options.find(c => c.value === form.watch(name)) || null}
              styles={customStyles}
            />
          </FormControl>

          <FormDescription className='pl-5'>{describtion}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const DatePicker = ({
  form,
  name,
  description,
  label,
  required,
}: DatePickerProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col text-white'>
          <FormLabel className='flex items-end gap-1'>
            {label}
            {required && <Asterisk className='text-red-500 ' size={14} />}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    ' pl-3 text-left font-normal bg-inherit border-gray-700 hover:bg-inherit hover:text-white',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? (
                    format(field.value, 'PPP')
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode='single'
                selected={field.value}
                onSelect={field.onChange}
                disabled={date =>
                  date > new Date() || date < new Date('1900-01-01')
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
