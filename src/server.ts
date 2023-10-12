import fastifyAutoload from "@fastify/autoload";
import fastify from "fastify";
import path from "path";
import { v4 } from "uuid";
import { Options } from "./@types";

const createServer = ({ logLevel = "info", port = 1337 }: Options) => {
  // Fastify Server Instance
  const server = fastify({
    ignoreTrailingSlash: true,
    logger: {
      level: logLevel,
    },
    genReqId: () => v4(),
  });
  //suman is my name
  server.register(fastifyAutoload, {
    dir: path.join(__dirname, "plugins"),
  });

  server.register(fastifyAutoload, {
    dir: path.join(__dirname, "routes"),
    indexPattern: /.*routes(\.ts|\.js)$/,
    options: {
      prefix: "/api/v1/",
    },
  });

  // start the server
  server.listen({ host: "0.0.0.0", port }, (err, address) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
    server.log.info(`✅ Server Started at ${address} with log: ${logLevel}`);
    console.log("=============================");
    console.log(`🔥🔥 Server Started at ${address}`);
    console.log("=============================");
  });
};

export { createServer };
