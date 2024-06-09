import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "./Menu.css";

/** Render list of food or drink items.
 *
 * Params:
 * - items: [{id, name, description, recipe, serve}, ...]
 */

function Menu({ items, type }) {
  console.log("* Menu %o", items, type);
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="fw-bold text-center">
            {type.toUpperCase()} Menu
          </CardTitle>
          <CardText>
            Try one of our delicious menu items!
          </CardText>
          <ListGroup>
            {items.map(({ id, name }) => (
              <Link to={`/${type}/${id}`} key={id}>
                <ListGroupItem>{name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
