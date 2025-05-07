import {z} from '@hono/zod-openapi'

// outputs from the server in the response
export const UserSchema = z.object({
  name: z.string().min(1).max(100).openapi({
    example: "John"
  }),
  age: z.number().int().openapi({
    example: 12
  }),
  id: z.string().min(1).max(10).openapi({
    example: "123"
  }),
})