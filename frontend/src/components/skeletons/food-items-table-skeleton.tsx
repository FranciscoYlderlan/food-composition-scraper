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

export function FoodItemsTableSkeleton() {
  const columnHelper = createColumnHelper<FoodItemSchemaType>()

  const columnHeadersArray: Array<keyof FoodItemSchemaType> = [
    'code',
    'name',
    'scientificName',
    'group',
    'brand',
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
                    <Skeleton className="h-4 w-20 rounded-full" />
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
