// Require the framework and instantiate it

// ESM
import Fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { ZodError } from 'zod';

export function buildFastify() {
  const server = Fastify({
    logger: true,
  });

  server.setValidatorCompiler(validatorCompiler);
  server.setSerializerCompiler(serializerCompiler);

  server.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
      reply.code(400).send(JSON.parse(error.message));
      return;
    }
    reply.send(error);
  });

  // server.register(signupRoute, { prefix: '/api/signup' });
  // server.register(resetPasswordRoute, { prefix: '/api/resetPassword' });
  // server.register(schedulesRoute, { prefix: '/api/schedules' });

  return server;
}

// Run the server!
const start = async () => {
  const server = buildFastify();
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

void start();
