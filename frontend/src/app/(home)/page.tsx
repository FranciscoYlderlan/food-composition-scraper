import { TableSkeleton } from '@/components/skeletons/table-skeleton'
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
    <Suspense key={search + currentPage} fallback={<TableSkeleton />}>
      <FoodItemTableContainer search={search} page={currentPage} />
    </Suspense>
  )
}
