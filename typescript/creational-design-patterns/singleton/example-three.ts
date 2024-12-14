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

// NOTE: Global State: Leads to shared state and increased coupling

class Application {
  constructor(private logger: Logger) {}

  run(): void {
    this.logger.log("Application is running");
    this.logger.log("Application is shutting down");
  }
}
const logger = Logger.getInstance();
const app = new Application(logger);

app.run();
