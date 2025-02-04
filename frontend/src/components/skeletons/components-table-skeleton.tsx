import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ComponentSchemaType } from '@/models/schemas/zod/component-schema'
import { createColumnHelper } from '@tanstack/react-table'
import { Skeleton } from '../ui/skeleton'

export function ComponentsTableSkeleton() {
  const columnHelper = createColumnHelper<ComponentSchemaType>()
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
  const columns = columnHeadersArray.map((columnName) => {
    return columnHelper.accessor(columnName, {
      id: columnName,
      header: columnName[0].toUpperCase() + columnName.slice(1),
    })
  })

  const skeletonRows = Array.from({ length: 30 }, (_, i) => i)

  return (
    <div>
      <div className="mt-6 overflow-hidden rounded-lg border border-border">
        <Table className="border">
          <TableHeader>
            <TableRow>
              {columnHeadersArray.map((columnName, index) => (
                <TableHead key={index} className="bg-secondary">
                  <div>{columnName[0].toUpperCase() + columnName.slice(1)}</div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {skeletonRows.map((_, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((_, colIndex) => (
                  <TableCell key={colIndex} className="border">
                    <Skeleton className="h-4 w-40 rounded-full" />
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
