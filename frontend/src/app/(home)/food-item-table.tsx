'use client'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FoodItemSchemaType } from '@/models/schemas/zod/food-item-schema'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

type FoodItemTableProps = {
  data: FoodItemSchemaType[]
}

export function FoodItemTable({ data }: FoodItemTableProps) {
  const router = useRouter()
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
        pageSize: 10,
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
      <div className="flex items-center justify-between">
        <div className="flex basis-1/3 items-center">
          <p className="whitespace-nowrap font-bold">
            {`Página ${table.getState().pagination.pageIndex + 1} de ${table.getPageCount()}`}

            {` Total de ${table.getFilteredRowModel().rows.length}`}
          </p>
        </div>
        <div className="mt-4 space-x-1">
          <Button
            variant={'outline'}
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft size={14} />
            <span className="sr-only">Primeira página </span>
          </Button>
          <Button
            variant={'outline'}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft size={14} />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button
            variant={'outline'}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight size={14} />
            <span className="sr-only">Página seguinte</span>
          </Button>
          <Button
            variant={'outline'}
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight size={14} />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
