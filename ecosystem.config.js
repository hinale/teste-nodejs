module.exports = {
  apps : [{
    name: 'API',
    script: 'index.js',
    watch: '.',
    watch_delay: 1000,
    ignore_watch: ["node_modules"],
  }],
};
