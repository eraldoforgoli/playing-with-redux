const configs = {
  development: {
    apiURL: "http://localhost:3001"
  },
  production: {
    apiURL: "http://localhost:3001"
  },
  test: {
    apiURL: "http://localhost:3001"
  }
};

const env = process.env.NODE_ENV || "development";

export default configs[env];
