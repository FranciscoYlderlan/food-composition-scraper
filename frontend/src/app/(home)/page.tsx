import { Suspense } from 'react'
import { FoodItemTable } from './food-item-table'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>
}) {
  return (
    <div className="p-2">
      <Suspense fallback={<>Carregando ...</>}>
        {/* <FoodItemTable search={(await searchParams).search} /> */}
        <FoodItemTable />
      </Suspense>
    </div>
  )
}
