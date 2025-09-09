export function sortByDate<T extends { date: Date }>(
  items: T[],
  order: 'asc' | 'desc' = 'desc'
): T[] {
  return items.sort((a, b) => {
    const timeA = a.date.getTime()
    const timeB = b.date.getTime()
    return order === 'desc' ? timeB - timeA : timeA - timeB
  })
}
