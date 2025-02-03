import { z } from 'zod'

const PaginationSchema = z.object({
  totalItems: z.number(),
  totalPages: z.number(),
  currentPage: z.number(),
  pageSize: z.number(),
})

type PaginationSchemaType = z.infer<typeof PaginationSchema>

type PaginationControlsType = {
  onPageChange: (pageIndex: number) => Promise<void> | void
} & PaginationSchemaType

export {
  PaginationSchema,
  type PaginationControlsType,
  type PaginationSchemaType,
}
