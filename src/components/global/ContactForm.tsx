import { ChangeEvent, FormEvent, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';

const ContactForm = () => {
  // State variables for the form fields
  const [budget, setBudget] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [interests, setInterests] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>('');
  const [projectDetails, setProjectDetails] = useState<string>('');
  const [currency, setCurrency] = useState<string>('INR'); // Default currency is INR

  // Handler for currency change
  const handleCurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrency(e.target.value);
  };

  // Convert prices to USD if needed
  const convertToUSD = (priceInINR: number): string => {
    const conversionRate = 0.012; // Example conversion rate, you might want to fetch real-time rates
    return `$${(priceInINR * conversionRate).toFixed(2)}`;
  };

  // Budget options based on the selected currency
  const budgetOptions: string[] =
    currency === 'INR'
      ? ['< ₹50,000', '₹50,000 - ₹1L', '₹1L - ₹3L', '₹3L+']
      : [
          `< ${convertToUSD(50000)}`,
          convertToUSD(100000),
          convertToUSD(300000),
          `${convertToUSD(300000)}+`,
        ];

  // Handler for budget change
  const handleBudgetChange = (value: string) => {
    setBudget(value);
  };

  // Handler for interest change (multiple selections)
  const handleInterestChange = (value: string) => {
    setInterests((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  // Handler for form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      budget,
      name,
      phone,
      email,
      interests,
      timeline,
      projectDetails,
      currency,
    };
    console.log('Form Data:', formData);
  };

  return (
    <div className='p-4 md:p-8 lg:p-12 bg-black font-montreal text-white'>
      <form className='space-y-6' onSubmit={handleSubmit}>
        {/* Currency Selection */}
        <div className='flex items-center justify-between mb-4'>
          <label className='block text-sm font-medium mb-1'>My Budget Is</label>
          <div className='flex ml-4 items-center justify-center overflow-hidden'>
            <label
              className={`px-4 py-2 cursor-pointer ${
                currency === 'INR' ? ' text-[#C4FF65]' : ' text-gray-300'
              }`}
            >
              <input
                type='radio'
                name='currency'
                value='INR'
                checked={currency === 'INR'}
                onChange={handleCurrencyChange}
                className='hidden'
              />
              ₹ INR
            </label>
            <span>/</span>
            <label
              className={`px-4 py-2 cursor-pointer ${
                currency === 'USD' ? 'text-[#C4FF65]' : ' text-gray-300'
              }`}
            >
              <input
                type='radio'
                name='currency'
                value='USD'
                checked={currency === 'USD'}
                onChange={handleCurrencyChange}
                className='hidden'
              />
              $ USD
            </label>
          </div>
        </div>
        <div>
          <div className='flex flex-wrap gap-2'>
            {budgetOptions.map((option) => (
              <button
                type='button'
                key={option}
                onClick={() => handleBudgetChange(option)}
                className={`btn ${
                  budget === option
                    ? 'bg-[#C4FF65] text-black'
                    : 'text-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <input
            type='text'
            placeholder='Name'
            className='input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Phone'
            className='input'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email'
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>
            I'm Interested In
          </label>
          <div className='flex flex-wrap gap-2'>
            {['Web Design', 'App Design', 'UI/UX', 'Web Development'].map(
              (option) => (
                <button
                  type='button'
                  key={option}
                  onClick={() => handleInterestChange(option)}
                  className={`btn ${
                    interests.includes(option)
                      ? 'bg-[#C4FF65] text-black'
                      : 'text-gray-300'
                  }`}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input
            type='text'
            placeholder="What's your timeline? (in days)"
            className='input'
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
          />
          <textarea
            placeholder='Tell us about your project'
            className='input'
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full md:w-auto btn-primary flex items-center overflow-hidden relative'
          style={{ width: '300px', height: '50px' }} // Adjust the width and height as needed
        >
          <div className='animate-marquee whitespace-nowrap'>
            <span className='flex items-center space-x-4'>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>SEND MESSAGE</span>
              </span>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>SEND MESSAGE</span>
              </span>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>SEND MESSAGE</span>
              </span>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>SEND MESSAGE</span>
              </span>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>SEND MESSAGE</span>
              </span>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>SEND MESSAGE</span>
              </span>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>SEND MESSAGE</span>
              </span>
            </span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
