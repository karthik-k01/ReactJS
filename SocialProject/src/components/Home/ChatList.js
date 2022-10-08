import {
    
    Col,
    Badge,
    ListGroup
  } from "react-bootstrap";
import {FaRegUserCircle} from "react-icons/fa";
  
const ChatList = ({posts}) => {
  return (
    <Col md={3}>
    <ListGroup >
      {posts.map((post) => (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start chat-list-item"
          key={post.id}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold"><FaRegUserCircle /> {post.author}</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            2
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Col>
  );
};

export default ChatList;
