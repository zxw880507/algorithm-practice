/* Inventory Update
Compare and update the inventory stored in a 2D array against 
a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). 
If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item. */

function updateInventory(arr1, arr2) {
  const obj1 = Object.fromEntries(arr1.map((el) => el.reverse()));
  const objEntry = arr2.reduce((a, b) => {
    if (a[b[1]]) {
      a[b[1]] += b[0];
    } else {
      a[b[1]] = b[0];
    }
    return a;
  }, obj1);

  return Object.entries(objEntry)
    .map((el) => el.reverse())
    .sort((a, b) => {
      const nameA = a[1].toUpperCase();
      const nameB = b[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
}
