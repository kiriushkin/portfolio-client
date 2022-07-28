import './Contact.scss';
import { useContext } from 'react';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';
import { Button } from 'baseui/button';
import AppContext from '../../../AppContext.js';
import HomeContext from '../HomeContext.js';

const InputOverride = {
  Root: {
    style: { borderRadius: '15px' },
  },
};

const Contact = () => {
  const {
    locale: { contact },
  } = useContext(AppContext);
  const { contactRef } = useContext(HomeContext);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="contact" ref={contactRef}>
        <h2 className="home__section-title">{contact.title}</h2>
        <form className="contact__container" onSubmit={submitHandler}>
          <div className="contact__row">
            <Input placeholder="Name" overrides={InputOverride} required />
            <Input
              placeholder="Email"
              overrides={InputOverride}
              required
              type="email"
            />
          </div>

          <div className="contact__row">
            <Input placeholder="Subject" overrides={InputOverride} required />
          </div>

          <div className="contact__row">
            <Textarea
              placeholder="Message"
              overrides={InputOverride}
              required
            />
          </div>

          <div className="contact__row">
            <Button>Send Message</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
