import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import RoutesList from "./RoutesList";
import AliceCafeAPI from "./api";
import "./App.css";

/** Main application.
 *
 * Props: (none)
 *
 * State:
 * - itemsFetch:
 * {snacks: [item,item, ...], drinks: [item,item, ...], isLoading: true|false}
 *     where each item is {id, name, description, recipe, serve}
 */

function App() {
  const [itemsFetch, setItemsFetch] = useState(
    {
      snacks: null,
      drinks: null,
      isLoading: true
    }
  );

  const { snacks, drinks, isLoading } = itemsFetch;
  console.log("* App %o", { snacks, drinks, isLoading });

  /**Fetches data on component mount*/
  useEffect(function fetchItemsOnMount() {
    console.log("useEffect fetchItemsOnMount");
    async function fetchItems() {
      const snacks = await AliceCafeAPI.getSnacks();
      const drinks = await AliceCafeAPI.getDrinks();
      setItemsFetch({ snacks, drinks, isLoading: false });
    }

    fetchItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  /**adds new snack or drink to the DB via API*/
  async function addItem({ menuItem, type }) {
    console.log("App - addItem", { menuItem, type });

    await AliceCafeAPI.addItem(
      menuItem,
      type
    );

    //add items to state
    setItemsFetch(curr => ({
      ...curr,
      [type]: [...curr[type], menuItem],
    }));

  }

  return (
    <div className="App">
      <NavBar />
      <RoutesList snacks={snacks} drinks={drinks} addItem={addItem} />
    </div>
  );
}

export default App;
