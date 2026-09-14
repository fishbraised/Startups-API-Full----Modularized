import users from "../data/users.js";

const getSearchUsers = (req, res) => {
  const { id, name } = req.query;

  let filteredData = users;

  if (id) {
    filteredData = filteredData.filter(
      (eachObj) => JSON.parse(id) === eachObj.id,
    );
  }

  if (name) {
    filteredData = filteredData.filter(
      (eachObj) => name.toLowerCase() === eachObj.name.toLowerCase(),
    );
  }

  res.json(filteredData);
};

export default getSearchUsers;
