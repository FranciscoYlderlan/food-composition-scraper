import { z } from 'zod'
import { PaginationSchema } from './pagination-schema'

const FoodItemSchema = z.object({
  code: z.string().min(1, 'Code cannot be empty'),
  name: z.string().min(1, 'Name cannot be empty'),
  scientificName: z.string().optional(),
  group: z.string().min(1, 'Group cannot be empty'),
  brand: z.string().optional(),
  // components: z.array(ComponentSchema),
})

const FoodItemResponseSchema = z.object({
  items: z.array(FoodItemSchema),
  pagination: PaginationSchema,
})

type FoodItemSchemaType = z.infer<typeof FoodItemSchema>
type FoodItemResponseType = z.infer<typeof FoodItemResponseSchema>

export {
  FoodItemResponseSchema,
  FoodItemSchema,
  type FoodItemResponseType,
  type FoodItemSchemaType,
}
