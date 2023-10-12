import { FastifyInstance } from "fastify";

export default (fastify: FastifyInstance) => {
    fastify.get('/ping', async () => {
        return 'pong\n';
    });
}