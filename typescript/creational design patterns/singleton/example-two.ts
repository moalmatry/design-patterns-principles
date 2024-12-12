class Logger {
  private static instance: Logger;
  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date();

    console.log(`[${timestamp.toLocaleString()}] - ${message}`);
  }
}

const loggerOne = Logger.getInstance();

const loggerTwo = Logger.getInstance();

loggerOne.log("This is the first log message One");
loggerTwo.log("This is the first log message Two");
