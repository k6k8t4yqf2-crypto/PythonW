module.exports = {
  apps: [
    {
      name: "pacos-website",
      script: ".next/standalone/server.js",
      cwd: "/var/www/pacos-website",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
