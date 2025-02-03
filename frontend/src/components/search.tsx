'use client'

import { Search as SearchIcon } from 'lucide-react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Search() {
  const [search, setSearch] = useState<string>('')
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    if (term) {
      params.set('search', term)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="relative flex w-full items-center justify-start gap-2">
      <div className="relative inline-flex w-full items-center justify-start gap-2 whitespace-nowrap rounded-md border border-input bg-muted/30 p-2.5 text-sm font-medium text-muted-foreground shadow-sm transition-colors transition-none hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-full [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
        <SearchIcon size={14} />
        <Input
          id="search"
          name="search"
          placeholder="Buscar por nome"
          className="absolute right-0 z-10 h-full w-full border-none pl-8"
          autoComplete="off"
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          onKeyDown={(e) => {
            const target = e.target as HTMLInputElement
            if (e.key === 'Enter') {
              handleSearch(target.value)
            }
          }}
          defaultValue={searchParams.get('search')?.toString()}
        />
      </div>
      <Button
        type="submit"
        onClick={() => {
          handleSearch(search) // Chama handleSearch ao clicar no botão
        }}
      >
        Buscar
      </Button>
    </div>
  )
}
