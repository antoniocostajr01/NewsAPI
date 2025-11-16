const cron = require('node-cron');
const { fetchAndSaveEdition } = require("../services/editionService");

cron.schedule(
    '0 5 * * *',
    fetchAndSaveEdition
)