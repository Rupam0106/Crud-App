import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <div className="d-flex pt-4 pb-5">
      <Container>
        <Row>
          <Col xs={68} md={55}>
            <Image
              src="https://source.unsplash.com/random/200x200/?img=2/"
              thumbnail
            />
          </Col>
        </Row>
      </Container>
      <div >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint
        consequatur, eveniet nam numquam tenetur quaerat ducimus. Praesentium
        tempora laborum fugiat id ex. Eos error, rerum quidem aut eveniet
        consectetur enim cupiditate! Quasi ipsa impedit quae aut quis, possimus
        odit autem odio rem voluptates!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima saepe totam nihil earum porro rerum aut exercitationem deleniti maiores unde iusto sequi, beatae, accusantium obcaecati odio dolorum sint harum dolore magni atque sapiente?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sit minima dicta, optio dolore aspernatur error expedita vel impedit numquam culpa commodi accusantium aut pariatur harum voluptate eos veritatis est magnam molestiae fuga corporis laborum. Distinctio ipsa suscipit quaerat autem aperiam harum inventore explicabo.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ex odit assumenda distinctio expedita optio architecto error, inventore explicabo facere unde mollitia accusantium alias rerum nobis aliquam id? Numquam aliquid molestiae porro dolore? Vero eius modi optio deleniti quae beatae necessitatibus ipsam illo totam.
        Lorem, ipsum dolor Ducimus dignissimos dolorum ipsum aspernatur, praesentium sapiente magnam minima. Nisi dignissimos, dicta vero earum beatae repellendus assumenda 
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur ullam necessitatibus tempora placeat iure eligendi, exercitationem quia enim doloribus! Aut placeat a sit voluptates expedita exercitationem. Porro dolorum adipisci similique! Ex fugiat beatae culpa, nesciunt maxime tempore similique possimus vel repellendus assumenda earum!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur ullam necessitatibus tempora placeat iure eligendi, exercitationem quia enim doloribus! Aut placeat a sit voluptates expedita exercitationem. Porro dolorum adipisci similique! Ex fugiat beatae culpa, nesciunt maxime tempore similique possimus vel repellendus assumenda earum!
        </p>
      </div>
    </div>
  );
};

export default About;
