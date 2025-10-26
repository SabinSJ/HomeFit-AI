export default `#graphql
  type Query {
    hello: String!
    status: ServerStatus!
  }

  type ServerStatus {
    online: Boolean!
    timestamp: String!
  }
`;
