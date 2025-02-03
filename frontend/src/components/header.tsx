import { Search } from '@/components/search'
import { Suspense } from 'react'

export function Header() {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 mb-6 flex items-center justify-between gap-6 border-b border-muted px-8 py-3 backdrop-blur">
      <Suspense>
        <Search />
      </Suspense>
    </header>
  )
}
