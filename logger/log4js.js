// 日志配置文件
import path from "path";
import log4js from "log4js";

// log4js默认的日志级别如下：ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF

const __dirname = path.resolve("./");
log4js.configure({
  appenders: {
    // 配置打印输出源
    trace: {
      type: "console", // 控制台打印日志
      // type: "file", // 表示日志输出为普通文件，在此种配置下日志会输出到目标文件夹的目标文件中，并会随着文件大小的变化自动份文件
      // type: "dateFile", // 表示是输出按时间分文件的日志，在此种配置下,日志会输出到目标目录下，并以时间格式命名，随着时间的推移，以时间格式命名的文件如果尚未存在，则自动创建新的文件.
      // compress: true, //（默认为false） - 在滚动期间压缩备份文件（备份文件将具有.gz扩展名）
      // maxLogSize: 10000000, // 文件最大存储空间,单位是字节,只在type: file模式有效,表示文件多大时才会创建下一个文件（ xxx.log .1 之类）
      filename: path.join(__dirname, "/logger/logs", "trace", "trace"), // 写入日志文件的路径
      pattern: "yyyy-MM-dd.log", //确定何时滚动日志的模式,只在type: dateFile模式有效,(默认为.yyyy-MM-dd0),表示一个文件的时间命名模式,格式:.yyyy-MM-dd-hh:mm:ss.log,在生成文件中会依照pattern配置来在filename的文件结尾追加一个时间串来命名文件。
      encoding: "utf-8", // default "utf-8"，文件的编码
      alwaysIncludePattern: true, //将模式包含在当前日志文件的名称以及备份中,只在type: dateFile模式有效,(默认为false),配置为ture即最终的日志路径文件名为filename + pattern
      //backups： 只在type: file模式有效,表示备份的文件数量,如果文件过多则会将最旧的删除。
    },
    file: {
      type: "file",
      filename: path.join(__dirname, "/logger/logs", 'log'),
      pattern: "yyyy-MM-dd.log",
      encoding: "utf-8",
      alwaysIncludePattern: true,
    },
    console: {
      type: "console",
    }
  },
  categories: {
    default: { appenders: ["console"], level: "trace" },
    cheese: { appenders: ["console", "file"], level: "warn" },
  }
});

export const logger = log4js.getLogger();
export const loggerCheese = log4js.getLogger('cheese');