/** API calls for Snack or Booze.
 *
 * Static class tying together methods used to get/send to the API.
 */


class SnackOrBoozeAPI {
  static base_api_url = "http://localhost:5001";

  /** getSnacks
   * Fetch list of snacks
   * [{id, name, description, recipe, serve}, ...]
  */

  static async getSnacks() {
    console.log("getSnacks");
    const response = await fetch(`${this.base_api_url}/snacks`);
    return await response.json();
  }

  /** getDrinks
   * Fetch list of drinks
   * [{id, name, description, recipe, serve}, ...]
  */

  static async getDrinks() {
    console.log("getDrinks");
    const response = await fetch(`${this.base_api_url}/drinks`);
    return await response.json();
  }

  /** addItem
   * Adds item to the list of drinks or snacks
   * item: {id, name, description, recipe, serve}
   * type: "snacks" || "drinks"
  */

  static async addItem(item, type) {
    console.log("addItem");

    const response = await fetch(`${this.base_api_url}/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...item })
    });
    return await response.json();
  }

}

export default SnackOrBoozeAPI;
