// tslint:disable: no-console

import http from "http";
import app from "./app";

// Get port from environment and store in Express.
const port: number = (process.env.PORT || 3000) as number;
app.set("port", port);

/// Create HTTP server.
const server: http.Server = http.createServer(app);

server.listen(port, () => {
  console.log(` --->  Server started at http://localhost:${port} ${new Date()}`);
});

server.on("error", (error: any) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr!.port;
  console.log(" --->  Listening on " + bind);
});
