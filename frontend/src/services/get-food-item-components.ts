import { env } from '@/env/'
import { ComponentSchemaType } from '@/models/schemas/zod/component-schema'

export async function getComponents(
  code: string
): Promise<ComponentSchemaType[]> {
  const response = await fetch(
    `${env.API_URL}FoodItem/${code}/components
`,
    { cache: 'no-store' }
  )
  return response.json()
}
