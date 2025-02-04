import { FoodItemsTableSkeleton } from '@/components/skeletons/food-items-table-skeleton'
import { Suspense } from 'react'
import FoodItemTableContainer from './food-item-table-container'

export default async function Page(props: {
  searchParams?: Promise<{
    search?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const search = searchParams?.search || ''
  const currentPage = Number(searchParams?.page) || 1

  return (
    <div className="p-2">
      <Suspense
        key={search + currentPage}
        fallback={<FoodItemsTableSkeleton />}
      >
        <FoodItemTableContainer search={search} page={currentPage} />
      </Suspense>
    </div>
  )
}
