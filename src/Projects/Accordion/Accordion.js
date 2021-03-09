import React from 'react';
import './Accordion.css'

function Accordion() {
    const questions = [
        {
          id: 1,
          title: "Do I have to allow the use of cookes?",
          info:
            "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
        },
        {
          id: 2,
          title: "How do I change my My Page password?",
          info:
            "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
        },
        {
          id: 3,
          title: "What is BankID?",
          info:
            "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
        },
        {
          id: 4,
          title: "Whose birth number can I use?",
          info:
            "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
        },
      ];

    return (
        <div className="faq_container bg-light mb-5 mt-5 pt-5">
        {questions.map((question) => (
          <FaqChild {...question} key={question.id} />
        ))}
      </div>
    )
}


// Child component
function FaqChild({ title, info }) {
    const [open, setOpen] = useState(false);
  
    const parentRef = useRef();
    return (
      <div className="accordion_wrap">
        <div
          className="d-flex justify-content-between content_header"
          onClick={() => setOpen(!open)}
        >
          <div className="d-flex justify-content-between">
            <span className="letter pr-4">
              <i className="far fa-question-circle" />
            </span>
            <h3>{title}</h3>
          </div>
          <h2
            className={
              open ? "fas fa-chevron-circle-up" : "fas fa-chevron-circle-down"
            }
          ></h2>
        </div>
  
        <div
          className="content"
          ref={parentRef}
          style={
            open
              ? { height: parentRef.current.scrollHeight + "px" }
              : { height: "0px" }
          }
        >
          <div className="d-flex justify-content-between">
            <span className="letter text-dark mb-2 pr-4">A.</span>
            <p>{info}</p>
          </div>
        </div>
      </div>
    );
  }

export default Accordion
