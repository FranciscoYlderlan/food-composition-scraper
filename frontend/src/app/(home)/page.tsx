import { Suspense } from 'react'
import FoodItemTableContainer from './food-item-table-container'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>
}) {
  const { search } = await searchParams
  return (
    <div className="p-2">
      <Suspense fallback={<>Carregando ...</>}>
        <FoodItemTableContainer search={search} />
      </Suspense>
    </div>
  )
}
