import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/** Render a snack.
 *
 * Props:
 * - items: [{id, name, description, recipe, serve}, ...]
 * - cantFindPath: path to redirect to if not found
 */

function Item({ item }) {
  console.log("* Snack");

  const { name, description, recipe, serve } = item;
  return (
    <section className="Item">
      <Card>
        <CardBody>
          <CardTitle className="fw-bold text-center">{name}</CardTitle>
          <CardText className="font-italic">{description}</CardText>
          <p><b>Recipe:</b> {recipe}</p>
          <p><b>Serve:</b> {serve}</p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
