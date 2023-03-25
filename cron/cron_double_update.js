var cron = require("node-cron");
const {
  requestDoubleApi,
} = require("../interface/http/gluck_endpoint_service");

const cron_double_update = () => {
  cron.schedule("*/10 * * * * *", () => {
    console.log("running a task every minute");
    requestDoubleApi();
  });
};

cron_double_update();
