// ecosystem.config.js (CommonJS)
module.exports = {
  apps: [
    {
      name: "sveltekit-app",
      script: "build/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 5173,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
