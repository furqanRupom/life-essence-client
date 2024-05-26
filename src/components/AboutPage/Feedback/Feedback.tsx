import Title from '@/components/reusable/Title';
import { Button, Image, Input, Textarea } from '@nextui-org/react';
import * as React from 'react';

interface IFeedbackProps {
}

const Feedback: React.FunctionComponent<IFeedbackProps> = (props) => {
    return <section className='grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto my-12   items-center'>

 
      <div className=" p-8  rounded-md order-2 lg:order-none  mx-auto">
          <Title firstTitle="Feedback" secondTitle='Give your valuable feedback ' />
          <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <Input style={{
                      backgroundColor: "transparent"
                  }}


                      className='bg-background'
                      label="First Name"
                      placeholder="Enter your first name"
                      fullWidth
                      required
                      variant='faded'

                  />
                  <Input style={{
                      backgroundColor: "transparent"
                  }}
                      label="Last Name"
                      placeholder="Enter your last name"
                      fullWidth
                      required
                      variant='faded'
                  />
              </div>
              <Input style={{
                  backgroundColor: "transparent"
              }}
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  fullWidth
                  required
                  variant='faded'
              />
              <Input style={{
                  backgroundColor: "transparent"
              }}
                  label="Subject"
                  placeholder="Enter subject"
                  fullWidth
                  required
                  variant='faded'
              />
              <Textarea style={{
                  backgroundColor: "transparent"
              }}
                  label="Message"
                  placeholder="Enter your message"
                  fullWidth
                  required
                  variant='faded'
              />
              <Button className="w-full bg-coral-50 text-coral-400 text-xl font-semibold ">
                  Sent Feedback
              </Button>
          </form>
      </div>

      <div>
          <Image className='' src="https://thumbs.dreamstime.com/b/diverse-people-holding-hands-feedback-concept-44044778.jpg" alt="feedback image" />
      </div>
  </section>;
};

export default Feedback;
