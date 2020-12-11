import log4js from'log4js';

var logger = log4js.getLogger();

console.log(logger.trace('test1'))
logger.debug('test2')
logger.info('test3')
logger.warn('test4')
logger.error('test4')
logger.fatal('test4')


console.log(123);