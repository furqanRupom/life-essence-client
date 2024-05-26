import ContactForm from '@/components/ContactPage/Contact/ContactForm';
import Banner from '@/components/reusable/Banner';
import * as React from 'react';

interface IContactPageProps {
}

const ContactPage: React.FunctionComponent<IContactPageProps> = (props) => {
  return <>
  <Banner title='Contact us' />
  <ContactForm />
  </>;
};

export default ContactPage;
