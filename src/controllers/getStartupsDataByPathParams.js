import startups from "../data/startups.js";

const getStartupsDataByPathParams = (req, res) => {
  const { field, term } = req.params; // field:country, term:india
  const allowedFields = ["country", "continent", "industry"];

  if (!allowedFields.includes(field)) {
    res.status(400);
    res.json({
      message:
        "Search field not allowed. Please use only 'country', 'continent', 'industry'",
    });
    return;

    // return res.status(400).json({
    //   message:
    //     "Search field not allowed. Please use only 'country', 'continent', 'industry'",
    // });
  }

  let data = startups.filter(
    (eachObj) => eachObj[field].toLowerCase() === term.toLowerCase(),
  );

  res.json(data);
};

export default getStartupsDataByPathParams;
