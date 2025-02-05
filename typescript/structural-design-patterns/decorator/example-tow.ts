interface ServerRequest {
  handle(request: any): void;
}

class BaseServer implements ServerRequest {
  handle(request: any): void {
    console.log("Handling request", request);
  }
}

abstract class ServerRequestDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}

  abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator {
  handle(request: any): void {
    console.log("Logging request", request);

    this.serverRequest.handle(request);
  }
}

class AuthMiddleware extends ServerRequestDecorator {
  public handle(request: any): void {
    if (request.isAuthenticated) {
      console.log("Authenticating request", request);
      this.serverRequest.handle(request);
    } else {
      console.error("Authentication request");
    }
  }
}

// Client code

const request = {
  isAuthenticated: true,
  body: "hello world",
};

let server: ServerRequest = new BaseServer();
server = new LoggingMiddleware(server);
server = new AuthMiddleware(server);
server.handle(request);
