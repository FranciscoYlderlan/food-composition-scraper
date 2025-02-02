export default async function Component({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params
  return <div>É isso aiiiiiii {code}</div>
}
