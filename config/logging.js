const intel =  require('intel');
const path = require('path');
const logrotate = require('logrotator');

const SERVER_LOGGER_NAMESPACE = 'SERVER';

const logsDir = path.resolve(__dirname, '/', 'logs');
const appLogDir = logsDir + '/app';
const errorLogDir = logsDir + '/error';
const logLevel = (process.env.LOG_LEVEL || 'INFO').toUpperCase();
const rootLogger = intel.getLogger(SERVER_LOGGER_NAMESPACE);
console.log("=======================");
console.log("logsDir " + logsDir);
console.log("=======================");

const dateFormat = '%Y-%m-%d %H:%M:%S.%L';

/**
 * remove default handlers,
 * by default intel uses console handler,
 * without that, it will use both default and custom
 */
intel.config({
  handlers: {}
});

/**
 * common formatter
 */
const formatter = new intel.Formatter({
  datefmt: dateFormat,

  // add || to placehold UUID for proper logstash parsing
  format: '%(date)s | %(levelname)s::%(name)s | %(message)s'
});

const consoleFormatter = new intel.Formatter({
  colorize: true,

  // add || to placehold UUID for proper logstash parsing
  format: '%(levelname)s::%(name)s %(message)s'
});

/**
 * ================
 * SERVER.XX
 * Configuring root logger to use across backend
 * ================
 */


/**
 * handler to write to log file all logs that NOT starting with |UUID|
 */
const handlerFileOutputNoUUID = new intel.handlers.File({
  file: path.resolve(appLogDir, 'app.log'),
  formatter
});

rootLogger.addHandler(handlerFileOutputNoUUID);

/**
 * logger level based on env variable
 */
rootLogger.setLevel(rootLogger[logLevel]);

if (process.env.NODE_ENV === 'development') {
  const handlerConsoleNoUUID = new intel.handlers.Console({
    formatter: consoleFormatter
  });

  rootLogger.addHandler(handlerConsoleNoUUID);
}


/**
 * ================
 * Separate error handler to write all logs with ERROR
 * to additional file
 * ================
 */
rootLogger.addHandler(new intel.handlers.File({
  file: path.resolve(errorLogDir, 'error.log'),
  level: intel.ERROR,
  formatter
}));

module.exports = intel;

/**
 * ================
 * Log files rotation
 * ================
 */
const rotator = logrotate.create();
rotator.register(path.resolve(logsDir, 'app.log'),    {schedule: '1m', size: '10m', compress: true, count: 100});
rotator.register(path.resolve(logsDir, 'error.log'),  {schedule: '1m', size: '10m', compress: true, count: 100});

rotator.on('error', function(err) {
  rootLogger.error('Log files rotation error', err);
});

rotator.on('rotate', function(file) {
  rootLogger.info(`Log file ${file} was rotated`);
});
