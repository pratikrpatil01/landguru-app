import { FaBeer, FaPlus } from "react-icons/fa";
import {
  Accordion,
  Card,
  Container,
  useAccordionButton,
} from "react-bootstrap";
import "./Index.css";
import { accordionData } from "../../assets/AccordionData";
function Accordions() {
  return (
    <Container>
      <div className="text-center mb-5">
        <h1>
          Do you have any quesion
        </h1>

      </div>
      <Accordion defaultActiveKey="0">
        {accordionData &&
          accordionData.map((item, index) => (
            <Card className="pt-3 pb-1 p-3">
              <AccordionHeader eventKey={index}>
                <div className="accordion-header">{item.title}</div>
              </AccordionHeader>
              <Accordion.Collapse eventKey={index}>
                <Card.Body className="pt-0 pb-0 pl-4 ml-2 accordion-body">
                  <p>{item.description}</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
      </Accordion>
    </Container>
  );
}

export default Accordions;

function AccordionHeader({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <div onClick={decoratedOnClick}>
      <div className="d-flex text-center">
        <span className="mr-3">
          <FaPlus className="accordion-icon " />
        </span>
        <h4>{children}</h4>
      </div>
    </div>
  );
}
