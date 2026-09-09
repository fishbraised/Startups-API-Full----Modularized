import users from "../data/users.js";

// Get startups where description contains "cutting edge" or userSearchInput. Add another route for this.
// https://dummyjson.com/products/search?q=phone' similar to this

// Or get based on product id.

const getUsers = (req, res) => {
  const { name, age, role, department, isActive } = req.query;

  let filteredData = users;

  if (name) {
    filteredData = filteredData.filter(
      (eachObj) => name.toLowerCase() === eachObj.name.toLowerCase(),
    );
  }

  if (age) {
    filteredData = filteredData.filter(
      (eachObj) => JSON.parse(age) === eachObj.age,
    );
  }

  if (role) {
    filteredData = filteredData.filter(
      (eachObj) => role.toLowerCase() === eachObj.role.toLowerCase(),
    );
  }

  if (department) {
    filteredData = filteredData.filter(
      (eachObj) =>
        department.toLowerCase() === eachObj.department.toLowerCase(),
    );
  }

  if (isActive) {
    filteredData = filteredData.filter(
      (eachObj) => JSON.parse(isActive.toLowerCase()) === eachObj.isActive,
    );
  }

  res.json(filteredData);
};

export default getUsers;
