export default {
  Query: {
    hello: () => "Hello from GraphQL!",
    status: () => ({
      online: true,
      timestamp: new Date().toISOString(),
    }),
  },
};
