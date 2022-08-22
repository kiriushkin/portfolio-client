import './Contact.scss';
import { useState, useContext } from 'react';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';
import { Button } from 'baseui/button';
import { toaster as toast } from 'baseui/toast';
import { AnimationOnScroll } from 'react-animation-on-scroll';
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
    locale: { contact, toaster },
  } = useContext(AppContext);
  const { contactRef, sendMessage } = useContext(HomeContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      await sendMessage({ name, email, subject, message });

      toast.info(toaster.contact);

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error(err);
      console.error(err.response.data.description);
    }
  };

  return (
    <>
      <section className="contact" ref={contactRef}>
        <AnimationOnScroll animateOnce animateIn="animate__fadeInLeft">
          <h2 className="home__section-title">{contact.title}</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
          <form className="contact__container" onSubmit={submitHandler}>
            <div className="contact__row">
              <Input
                value={name}
                placeholder={contact.name}
                overrides={InputOverride}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <Input
                value={email}
                placeholder={contact.email}
                overrides={InputOverride}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                type="email"
              />
            </div>

            <div className="contact__row">
              <Input
                value={subject}
                placeholder={contact.subject}
                overrides={InputOverride}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                required
              />
            </div>

            <div className="contact__row">
              <Textarea
                value={message}
                placeholder={contact.message}
                overrides={InputOverride}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              />
            </div>

            <div className="contact__row">
              <Button>{contact.sendMessage}</Button>
            </div>
          </form>
        </AnimationOnScroll>
      </section>
    </>
  );
};

export default Contact;
