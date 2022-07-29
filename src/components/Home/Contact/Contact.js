import './Contact.scss';
import { useContext } from 'react';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';
import { Button } from 'baseui/button';
import AppContext from '../../../AppContext.js';
import HomeContext from '../HomeContext.js';

const InputOverride = {
  Root: {
    style: {
      borderTopLeft: '15px',
      borderTopRight: '15px',
      borderBottomRight: '15px',
      borderBottomLeft: '15px',
    },
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
            <Input
              placeholder={contact.name}
              overrides={InputOverride}
              required
            />
            <Input
              placeholder={contact.email}
              overrides={InputOverride}
              required
              type="email"
            />
          </div>

          <div className="contact__row">
            <Input
              placeholder={contact.subject}
              overrides={InputOverride}
              required
            />
          </div>

          <div className="contact__row">
            <Textarea
              placeholder={contact.message}
              overrides={InputOverride}
              required
            />
          </div>

          <div className="contact__row">
            <Button>{contact.sendMessage}</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
