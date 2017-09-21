const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/mockvalues", (req, res) => {
  const mockEndpoint = "https://5lfoiyb0b3.execute-api.us-west-2.amazonaws.com/prod/mockcredit/values";
  fetch(mockEndpoint)
    .then(response => response.json())
    .then((json) => {
      res.status(200);
      res.json(json);
    })
    .catch((err) => {
      res.status(400);
      res.json(err);
    });
});

module.exports = router;
