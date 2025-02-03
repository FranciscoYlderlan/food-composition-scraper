import { FoodItemSchemaType } from '@/models/schemas/zod/food-item-schema'
import { env } from 'process'

export async function getFoodItems(
  search: string
): Promise<FoodItemSchemaType[]> {
  const response = await fetch(
    `${env.API_URL}FoodItem?page=2&pageSize=10&search=${search}`,
    { cache: 'no-store' }
  )
  return response.json()
}
