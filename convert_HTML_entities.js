/* Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

function convertHTML(str) {
  const entity = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.split("").reduce((init, curr) => {
    if (curr in entity) {
      init += entity[curr];
    } else {
      init += curr;
    }
    return init;
  }, "");
}

convertHTML("Dolce & Gabbana");
