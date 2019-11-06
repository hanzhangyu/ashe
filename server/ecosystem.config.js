const { name, isDev } = require('./src/lib/env');

module.exports = {
  apps: [
    {
      name,
      script: 'src/app.js',
      node_args: isDev ? ['--inspect'] : '',

      instances: isDev ? 1 : 'max',
      exec_mode: isDev ? 'fork_mode' : 'cluster_mode',
      watch: isDev ? ['src', 'config'] : false,
      watch_delay: 1000,
      instance_var: `${name}_instance_id`,

      pid_file: `var/${name}.pid`,
      error_file: 'var/error.log',
      out_file: 'var/output.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',

      min_uptime: 1000,
      listen_timeout: 5000,
      kill_timeout: 2000,
      wait_ready: true,
      max_restarts: 5,
      restart_delay: 3000,
      autorestart: true,
    },
  ],
};
