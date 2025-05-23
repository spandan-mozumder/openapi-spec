import {z} from '@hono/zod-openapi'

// inputs from the user in the request
export const ParamsSchema = z.object({
  id: z.string().min(1).max(10).openapi({
    param: {
      name: "id",
      in: "path",
    },
    example: "123",
  })
})