import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FoodItemSchemaType } from '@/models/schemas/zod/food-item-schema'
import { createColumnHelper } from '@tanstack/react-table'
import { Skeleton } from '../ui/skeleton'

export function TableSkeleton() {
  const columnHelper = createColumnHelper<FoodItemSchemaType>()

  const columnHeadersArray: Array<keyof FoodItemSchemaType> = ['code']
  const columns = columnHeadersArray.map((columnName) => {
    return columnHelper.accessor(columnName, {
      id: columnName,
      header: columnName[0].toUpperCase() + columnName.slice(1),
    })
  })

  const skeletonRows = Array.from({ length: 10 }, (_, i) => i)

  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-border">
      <Table className="border">
        <TableHeader>
          <TableRow>
            {columnHeadersArray.map((columnName, index) => (
              <TableHead key={index} className="bg-secondary">
                <Skeleton className="h-5 w-full rounded-full" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {skeletonRows.map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((_, colIndex) => (
                <TableCell key={colIndex} className="border">
                  <Skeleton className="h-5 w-full rounded-full" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
