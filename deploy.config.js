module.exports = {
    apps: [
      {
        name: "GIVAUDAN", // Format JCWD-{batchcode}-{groupnumber}
        script: "./projects/server/src/index.js",
        env: {
          NODE_ENV: "production",
          PORT: 8404,
        },
        time: true,
      },
    ],
  };
  