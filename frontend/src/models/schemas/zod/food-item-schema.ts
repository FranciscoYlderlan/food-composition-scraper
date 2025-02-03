import { z } from 'zod'

const FoodItemSchema = z.object({
  code: z.string().min(1, 'Code cannot be empty'),
  name: z.string().min(1, 'Name cannot be empty'),
  scientificName: z.string().optional(),
  group: z.string().min(1, 'Group cannot be empty'),
  brand: z.string().optional(),
  // components: z.array(ComponentSchema),
})

type FoodItemSchemaType = z.infer<typeof FoodItemSchema>

export { FoodItemSchema, type FoodItemSchemaType }
