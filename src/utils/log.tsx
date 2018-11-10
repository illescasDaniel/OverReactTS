export default class Log {

  public static out(message?: any, ...optionalParams: any[]) {
    Log._globalConsole.log(message, ...optionalParams)
  }

  public static inspect(message?: any, ...optionalParams: any[]) {
    Log._globalConsole.dir(message, ...optionalParams)
  }

  //

  public static info(message?: any, ...optionalParams: any[]) {
    Log._globalConsole.info(message, ...optionalParams)
  }

  public static warning(message?: any, ...optionalParams: any[]) {
    Log._globalConsole.warn(message, ...optionalParams)
  }

  public static error(message?: any, ...optionalParams: any[]) {
    Log._globalConsole.error(message, ...optionalParams)
  }

  //

  public static trace(message?: any, ...optionalParams: any[]) {
    Log._globalConsole.trace(message, ...optionalParams)
  }

  private static _globalConsole = global.console
}
