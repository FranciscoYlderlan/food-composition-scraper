import { ComponentSchemaType } from '@/models/schemas/zod/component-schema'
import { Suspense } from 'react'
import { ComponentTable } from '../component-table'

async function getComponents(code: string): Promise<ComponentSchemaType[]> {
  const response = await fetch(
    `http://localhost:5172/api/FoodItem/${code}/components
`,
    { cache: 'no-store' }
  )
  return response.json()
}

export default async function Component({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params
  const components = await getComponents(code)

  return (
    <div>
      <Suspense fallback={<>Carregando ...</>}>
        <ComponentTable data={components} />
      </Suspense>
    </div>
  )
}
