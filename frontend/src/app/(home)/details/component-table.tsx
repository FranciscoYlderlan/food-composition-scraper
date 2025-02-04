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

type ComponentTableProps = {
  data: ComponentSchemaType[]
}

export function ComponentTable({ data }: ComponentTableProps) {
  const columnHeadersArray: Array<keyof ComponentSchemaType> = [
    'name',
    'unit',
    'standardDeviation',
    'minValue',
    'maxValue',
    'dataCount',
    'references',
    'dataType',
  ]

  const columnHelper = createColumnHelper<ComponentSchemaType>()

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
    <div className="my-6 w-full overflow-hidden rounded-lg border border-border">
      <Table className="border">
        <TableHeader>
          {table.getHeaderGroups().map(({ id, headers }, index) => (
            <TableRow key={id + index}>
              {headers.map(
                ({ id, column, isPlaceholder, getContext }, index) => (
                  <TableHead key={id + index} className="bg-secondary">
                    <div>
                      {isPlaceholder
                        ? null
                        : flexRender(column.columnDef.header, getContext())}
                    </div>
                  </TableHead>
                )
              )}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row, index) => (
            <TableRow key={row.id + index}>
              {row
                .getVisibleCells()
                .map(({ id, column, getContext }, index) => (
                  <TableCell key={id + index} className="border">
                    {flexRender(column.columnDef.cell, getContext())}
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
