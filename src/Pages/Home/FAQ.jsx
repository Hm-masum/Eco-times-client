import { Accordion } from "flowbite-react";
import FAQimg from "../../assets/pexels-pixabay-39396.jpg";
import SectionTitle from "../../Components/SectionTitle";

const FAQ = () => {
  return (
    <div>
      <SectionTitle title={'Clients Question'} body={'Explore the answers to all your questions with our client Q&A. Clear, concise, and comprehensive – your inquiries, our expertise'}></SectionTitle>
      
      <div className="md:flex items-center border-2 border-purple-300 rounded-xl p-2">
        <figure className="md:w-[50%] z-10">
          <img src={FAQimg} className=" rounded-2xl" />
        </figure>
        <div className="md:w-[50%]">
          <Accordion className="border-none">
            <Accordion.Panel>
              <Accordion.Title>
                What type of content can I find on this website?
              </Accordion.Title>
              <Accordion.Content>
                <p>
                  You can find articles on various topics including technology,
                  lifestyle, education, entertainment, and more.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title>How do I create an account?</Accordion.Title>
              <Accordion.Content>
                <p>
                  Click on the &quot; Sign Up &quot; button and fill in your
                  details such as email, username, and password. You can also
                  sign up using your social media accounts.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title>Is it free to access articles?</Accordion.Title>
              <Accordion.Content>
                <p>
                  es, most articles are free to read. However, we also offer
                  premium content for subscribers.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title>
                Can I contribute articles to the website?
              </Accordion.Title>
              <Accordion.Content>
                <p>
                  Yes, registered users can submit their own articles for
                  review. Once approved, your article will be published.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title>
                How can I subscribe to your newsletter?
              </Accordion.Title>
              <Accordion.Content>
                <p>
                  Scroll to the bottom of the homepage, enter your email in the
                  newsletter subscription box, and click &quot;Subscribe&quot;
                  to receive regular updates.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
