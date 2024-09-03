import CallToAction from '../components/global/CallToAction';
import ContactForm from '../components/global/ContactForm';
import GetInTouch from '../components/global/GetInTouch';

export const Contact = () => {
  return (
    <section className='contact-page'>
      {/* hero section  */}
      <section className='contact-hero-section'>
        <p>GET IN TOUCH</p>
        <h1 className='font-montreal'>
          Let's make something memorable together.
        </h1>
      </section>
      <GetInTouch />
      <ContactForm />
      <GetInTouch />
      <CallToAction />
    </section>
  );
};
