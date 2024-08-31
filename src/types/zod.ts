import {
  FastifyReply,
  FastifyRequest,
  RawRequestDefaultExpression,
  RawServerDefault,
  RawReplyDefaultExpression,
  ContextConfigDefault,
} from 'fastify';
import { RouteGenericInterface, RouteShorthandOptions } from 'fastify/types/route';
import { FastifySchema } from 'fastify/types/schema';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

export type FastifyRequestZod<TSchema extends FastifySchema> = FastifyRequest<
  RouteGenericInterface,
  RawServerDefault,
  RawRequestDefaultExpression<RawServerDefault>,
  TSchema,
  ZodTypeProvider
>;

export type FastifyReplyZod<TSchema extends FastifySchema> = FastifyReply<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  RouteGenericInterface,
  ContextConfigDefault,
  TSchema,
  ZodTypeProvider
>;

export type RouteShorthandOptionsZod<TSchema extends FastifySchema> = RouteShorthandOptions<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  RouteGenericInterface,
  ContextConfigDefault,
  TSchema,
  ZodTypeProvider
>;
