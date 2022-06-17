import { useRouter } from 'next/router'

import links, { Link } from 'data/links'

export function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = `${date.getMonth()}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  return `${day}.${month}.${year}`
}

export function useActualLink(): Link | null {
  const { route } = useRouter()
  return links.find((link) => link[1] === route) || null
}

export function useActualLinkName(): string {
  const actualLink = useActualLink()
  return actualLink ? actualLink[0] : ''
}
