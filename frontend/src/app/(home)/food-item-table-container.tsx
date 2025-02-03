import { FoodItemSchemaType } from '@/models/schemas/zod/food-item-schema'
import { getFoodItems } from '@/services/get-food-items'
import { FoodItemTable } from './food-item-table'

type FoodItemTableContainerProps = {
  search: string
}

export default async function FoodItemTableContainer({
  search,
}: FoodItemTableContainerProps) {
  const foodItems: FoodItemSchemaType[] = await getFoodItems(search)

  return <FoodItemTable data={foodItems} />
}
