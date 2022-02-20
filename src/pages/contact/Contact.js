import HotelPage from "../hotels/HotelPage";
import Container from "react-bootstrap/container";
import styled from "styled-components";
import ContactUs from "./ContactUs";
import ContactForm from "./ContactForm";

const Section = styled.div`
   {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom:2rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .article-one,
  .article-two {
    flex:1;
    margin-left: 1rem;
    box-shadow:5px 5px 5px var(--grey);
    border-radius:1rem;
    padding:0.5rem;
    @media(max-width:768px){
      margin:1rem;
    }
  }
   h3,
  p {
    text-align: left;
    margin: 0.5rem;
    padding: 0.5rem;
    letter-spacing: 0.5px;
  }
  }
`;

function Contact() {
  return (
    <>
      <HotelPage />
      <Container>
        <Section>
          <article className="article-one">
            <ContactForm />
          </article>
          <article className="article-two">
            <ContactUs />
          </article>
        </Section>
      </Container>
    </>
  );
}

export default Contact;
