const winston = require('winston');

var logger = new winston.Logger;

var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.File)({
        name: 'info-file',
        filename: './log/log-info.log',
        level: 'info'
      }),
      new (winston.transports.File)({
        name: 'error-file',
        filename: './log/log-error.log',
        level: 'error'
      })
    ]
  });

module.exports = logger;