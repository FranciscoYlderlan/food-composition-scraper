import { FoodItemResponseType } from '@/models/schemas/zod/food-item-schema'
import { env } from 'process'
type getFoodItemsProps = {
  search?: string
  page?: number
  pageSize?: number
}

export async function getFoodItems({
  search = '',
  page = 1,
  pageSize = 10,
}: getFoodItemsProps): Promise<FoodItemResponseType> {
  const response = await fetch(
    `${env.API_URL}FoodItem?page=${page}&pageSize=${pageSize}&search=${search}`,
    { cache: 'no-store' }
  )
  return response.json()
}
