const axios = require("axios");

let last = null;

const requestDoubleApi = async () => {
  const response = await axios.get(
    "https://gluck-backend-mfgep5u4mq-rj.a.run.app/games/double/history.php"
  );
  const data = response.data[0];
  const isEqual = data?.number === last?.number;
  if (!isEqual) {
    last = data;
    console.log(last);
  }
};

module.exports = {
  requestDoubleApi,
};
