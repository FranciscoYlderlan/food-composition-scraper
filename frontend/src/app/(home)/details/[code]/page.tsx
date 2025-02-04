import { TableSkeleton } from '@/components/skeletons/table-skeleton'
import { getComponents } from '@/services/get-food-item-components'
import { Suspense } from 'react'
import { ComponentTable } from '../component-table'

export default async function Component({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params
  const components = await getComponents(code)

  return (
    <Suspense fallback={<TableSkeleton />}>
      <ComponentTable data={components} />
    </Suspense>
  )
}
