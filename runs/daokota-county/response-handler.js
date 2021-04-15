const { GraphQLClient, gql } = require('graphql-request')
const { GQL_ENDPOINT } = process.env
const gqlClient = new GraphQLClient(GQL_ENDPOINT)

const mutation = gql`
  mutation AddRun($run: RunInput!) {
    createRun(run: $run) {
      id
      clinicSearch {
        id
      }
      clinicDetails {
        id
      }
    }
  }
`

async function handleSuccess (run) {
  try {
    const response = await gqlClient.request(mutation, { run })
    console.log(JSON.stringify(response, null, 2))
  } catch (error) {
    console.log(error)
  }
}

function handleError (err) {
  console.log(err)
}

module.exports = {
  handleSuccess,
  handleError,
}
