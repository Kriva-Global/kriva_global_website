import CallToAction from '../components/global/CallToAction';
import ContactForm from '../components/global/ContactForm';

export const Contact = () => {
  return (
    <section className='contact-page'>
      {/* hero section  */}
      <section className='contact-hero-section'>
        <p>GET IN TOUCH</p>
        <h1>Let's make something memorable together.</h1>
      </section>
      <div className='get-in-touch-banner'>
        <div className='scrolling-content'>
          <div className='get-in-touch-item'>
            <img height={12} width={12} src='/blue-logo.svg' alt='blue logo' />
            <span className='get-in-touch-text'>GET IN TOUCH</span>
          </div>
          <div className='get-in-touch-item'>
            <img height={12} width={12} src='/blue-logo.svg' alt='blue logo' />
            <span className='get-in-touch-text'>KRIVA GLOBAL</span>
          </div>
          <div className='get-in-touch-item'>
            <img height={12} width={12} src='/blue-logo.svg' alt='blue logo' />
            <span className='get-in-touch-text'>GET IN TOUCH</span>
          </div>
        </div>
      </div>
      <ContactForm />
      <CallToAction />
    </section>
  );
};
