const Home = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Header */}
      <header className='bg-blue-500 text-white text-center py-10'>
        <h1 className='text-4xl font-bold'>Welcome to Our Home Page</h1>
        <p className='mt-4 text-lg'>Discover our work and projects.</p>
      </header>

      {/* Introduction */}
      <section className='py-10 px-6 md:px-12'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>Our Story</h2>
        <p className='text-gray-700'>
          We are passionate about delivering high-quality projects and exceeding
          client expectations. Our team is dedicated to bringing creative ideas
          to life through innovative solutions.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className='py-10 px-6 md:px-12'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-6'>
          Photo Gallery
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='rounded overflow-hidden shadow-lg'>
            <img
              src='https://via.placeholder.com/400x300'
              alt='Placeholder 1'
              className='w-full h-auto'
            />
            <div className='px-4 py-2 bg-white'>
              <p className='text-gray-700'>Project 1</p>
            </div>
          </div>
          <div className='rounded overflow-hidden shadow-lg'>
            <img
              src='https://via.placeholder.com/400x300'
              alt='Placeholder 2'
              className='w-full h-auto'
            />
            <div className='px-4 py-2 bg-white'>
              <p className='text-gray-700'>Project 2</p>
            </div>
          </div>
          <div className='rounded overflow-hidden shadow-lg'>
            <img
              src='https://via.placeholder.com/400x300'
              alt='Placeholder 3'
              className='w-full h-auto'
            />
            <div className='px-4 py-2 bg-white'>
              <p className='text-gray-700'>Project 3</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
