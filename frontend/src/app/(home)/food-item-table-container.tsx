import { FoodItemSchemaType } from '@/models/schemas/zod/food-item-schema'
import { FoodItemTable } from './food-item-table'

async function getFoodItems(search: string): Promise<FoodItemSchemaType[]> {
  console.log('search', search)
  const response = await fetch(
    `http://localhost:5172/api/FoodItem?page=2&pageSize=10&search=${search}`,
    { cache: 'no-store' }
  )
  return response.json()
}

type FoodItemTableContainerProps = {
  search: string
}

export default async function FoodItemTableContainer({
  search,
}: FoodItemTableContainerProps) {
  const foodItems: FoodItemSchemaType[] = await getFoodItems(search)

  return <FoodItemTable data={foodItems} />
}
