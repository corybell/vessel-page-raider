async function handleSuccess(run) {
  try {
    console.log(JSON.stringify(run, null, 2))
  } catch (error) {
    console.log(error)
  }
}

function handleError(err) {
  console.log(err)
}

module.exports = {
  handleError,
  handleSuccess,
}
