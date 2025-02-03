import { FoodItemResponseType } from '@/models/schemas/zod/food-item-schema'
import { getFoodItems } from '@/services/get-food-items'
import { FoodItemTable } from './food-item-table'

type FoodItemTableContainerProps = {
  search: string
  page: number
}

export default async function FoodItemTableContainer({
  search,
  page,
}: FoodItemTableContainerProps) {
  const { items, pagination }: FoodItemResponseType = await getFoodItems({
    search,
    page,
  })
  return <FoodItemTable data={items} pagination={pagination} />
}
