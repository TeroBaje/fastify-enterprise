import fastifyPlugin from "fastify-plugin";
import { fastifySensible } from "@fastify/sensible";
import { FastifyPluginAsync } from "fastify";

const sensiblePlugin: FastifyPluginAsync = async (fastify) => {
    fastify.register(fastifySensible)
    
}


export default fastifyPlugin(sensiblePlugin)