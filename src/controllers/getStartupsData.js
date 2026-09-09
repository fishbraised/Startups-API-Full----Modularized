import startups from "../data/startups.js";

const getStartupsData = (req, res) => {
  const { country, industry, has_mvp, continent, is_seeking_funding } =
    req.query;

  let filteredData = startups; // 100 objects

  if (country) {
    filteredData = filteredData.filter(
      (eachObj) => country.toLowerCase() === eachObj.country.toLowerCase(),
    );
  } // 100 ---> 40 objects

  if (industry) {
    filteredData = filteredData.filter(
      (eachObj) => industry.toLowerCase() === eachObj.industry.toLowerCase(),
    ); // 40 ---> 20 objects
  }

  if (has_mvp) {
    filteredData = filteredData.filter(
      (eachObj) => JSON.parse(has_mvp.toLowerCase()) === eachObj.has_mvp,
    );
  }

  if (continent) {
    filteredData = filteredData.filter(
      (eachObj) => continent.toLowerCase() === eachObj.continent.toLowerCase(),
    );
  }

  if (is_seeking_funding) {
    ((filteredData = filteredData.filter(
      (eachObj) =>
        JSON.parse(is_seeking_funding.toLowerCase()) ===
        eachObj.is_seeking_funding,
    )),
      console.log("filteredData: ", filteredData));
  }

  res.json(filteredData); // 20 objects in res
};

export default getStartupsData;
