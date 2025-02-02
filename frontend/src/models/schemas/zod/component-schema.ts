import { z } from 'zod'

const ComponentSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Name cannot be empty'),
  unit: z.string().min(1, 'Unit cannot be empty'),
  value: z.number().optional(),
  standardDeviation: z.number().optional(),
  minValue: z.number().optional(),
  maxValue: z.number().optional(),
  dataCount: z.number().int().optional(),
  references: z.string().optional(),
  dataType: z.string().optional(),
  foodItemCode: z.string().min(1, 'FoodItemCode cannot be empty'),
})

type ComponentSchemaType = z.infer<typeof ComponentSchema>

export { ComponentSchema, type ComponentSchemaType }
