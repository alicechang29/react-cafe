import { Card, CardBody, CardTitle } from "reactstrap";

/** Homepage
 *
 * Props:
 * snacks: [{item}, ...]
 * drinks: [{item}, ...]
 *
 * State: none
 *
 * App -> { Home }
 */

function Home({ snacks, drinks }) {
  console.log("* Home");

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="fw-bold">
              Welcome to Alice's Cafe!
            </h3>
            <p>Snacks: {snacks.length}</p>
            <p>Drinks: {drinks.length}</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
