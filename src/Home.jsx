import { Card, CardBody, CardTitle } from "reactstrap";

/** Homepage
 *
 * Props:
 * snacks: [{item}, ...]
 * drinks: [{item}, ...]
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
              Welcome to Silicon Valley's premier dive cafe!
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
