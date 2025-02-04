'use client'
import { PaginationSchemaType } from '@/models/schemas/zod/pagination-schema'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'

export type PaginationProps = {
  pagination: PaginationSchemaType & { totalPage: number }
}

export function Pagination({ pagination }: PaginationProps) {
  const { totalItems, totalPages, totalPage, pageSize } = pagination

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const { replace } = useRouter()

  const onPageChange = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="mt-4 flex w-full items-center justify-between">
      <span className="text-xs text-muted-foreground md:text-sm">
        Total de {totalItems} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <span className="text-xs text-muted-foreground md:text-sm">
          {totalPage} de {pageSize} item(s)
        </span>
        <div className="flex text-xs font-medium md:text-sm">
          Página {currentPage} de {totalPages}
        </div>
        <div className="flex items-center gap-1">
          <Button
            type="button"
            onClick={() => onPageChange(1)}
            variant="outline"
            size="xs"
            className="size-8 p-0"
            disabled={currentPage === 1}
          >
            <ChevronsLeft size={14} />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            variant="outline"
            size="xs"
            className="size-8 p-0"
            disabled={currentPage === 1}
          >
            <ChevronLeft size={14} />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            variant="outline"
            size="xs"
            className="size-8 p-0"
            disabled={totalPages <= currentPage}
          >
            <ChevronRight size={14} />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button
            type="button"
            onClick={() => onPageChange(totalPages)}
            variant="outline"
            size="xs"
            className="size-8 p-0"
            disabled={totalPages <= currentPage}
          >
            <ChevronsRight size={14} />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
