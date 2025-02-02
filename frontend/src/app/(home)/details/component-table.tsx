'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ComponentSchemaType } from '@/models/schemas/zod/component-schema'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useRouter } from 'next/navigation'

type ComponentTableProps = {
  data: ComponentSchemaType[]
}

export function ComponentTable({ data }: ComponentTableProps) {
  const router = useRouter()
  const columnHeadersArray: Array<keyof ComponentSchemaType> = [
    'id',
    'name',
    'unit',
    'foodItemCode',
    'name',
    'dataCount',
  ]
  const columnHelper = createColumnHelper<ComponentSchemaType>()

  // const columns = [
  //   columnHelper.accessor('code', {
  //     header: 'Código',
  //   }),
  // ]

  const columns = columnHeadersArray.map((columnName) => {
    return columnHelper.accessor(columnName, {
      id: columnName,
      header: columnName[0].toUpperCase() + columnName.slice(1),
    })
  })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
              <TableRow key={row.id}>
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
    </div>
  )
}
