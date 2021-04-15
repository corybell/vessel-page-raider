require("dotenv").config()
const cron = require("node-cron")
const { run, handleSuccess, handleError } = require("./raids/demo")
const { CRON_PATTERN } = process.env

cron.schedule(CRON_PATTERN, () => {
  run().then(handleSuccess).catch(handleError)
})

console.log("READY...")
