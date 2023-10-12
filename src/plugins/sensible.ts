import fastifyPlugin from "fastify-plugin";
import { fastifySensible } from "@fastify/sensible";
import { FastifyPluginAsync } from "fastify";

const sensiblePlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(fastifySensible, { errorHandler: false });
};

export default fastifyPlugin(sensiblePlugin);
