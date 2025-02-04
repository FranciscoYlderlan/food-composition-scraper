'use client'
import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FoodItemSchemaType } from '@/models/schemas/zod/food-item-schema'
import { PaginationSchemaType } from '@/models/schemas/zod/pagination-schema'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useRouter } from 'next/navigation'

type FoodItemTableProps = {
  data: FoodItemSchemaType[]
  pagination: PaginationSchemaType
}

export function FoodItemTable({ data, pagination }: FoodItemTableProps) {
  const router = useRouter()
  const totalPage = data.length
  const columnHeadersArray: Array<keyof FoodItemSchemaType> = [
    'code',
    'name',
    'scientificName',
    'group',
    'brand',
  ]
  const columnHelper = createColumnHelper<FoodItemSchemaType>()

  const columns = columnHeadersArray.map((columnName) => {
    return columnHelper.accessor(columnName, {
      id: columnName,
      header: columnName[0].toUpperCase() + columnName.slice(1),
    })
  })

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageSize: pagination.pageSize,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div>
      <div className="mt-6 overflow-hidden rounded-lg border border-border">
        <Table className="border">
          <TableHeader>
            {table.getHeaderGroups().map(({ id, depth, headers }) => (
              <TableRow key={id}>
                {headers.map(({ id, column, isPlaceholder, getContext }) => (
                  <TableHead key={id} className="bg-secondary">
                    <div>
                      {isPlaceholder
                        ? null
                        : flexRender(column.columnDef.header, getContext())}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="hover: cursor-pointer hover:bg-ring/40"
                onClick={() => router.push(`/details/${row.original.code}`)}
              >
                {row.getVisibleCells().map(({ id, column, getContext }) => (
                  <TableCell key={id} className="border">
                    {flexRender(column.columnDef.cell, getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination pagination={{ totalPage, ...pagination }} />
    </div>
  )
}
