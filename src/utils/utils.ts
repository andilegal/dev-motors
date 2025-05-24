import { BASE_URL } from "@/constants"
import { redirect } from "next/navigation"


export const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

export async function getItemBySlug(slug: string) {
  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug
    }),
    props: 'slug,title,content,metadata',
    read_key: process.env.READ_KEY as string
  })

  const fullUrl = `${BASE_URL}?${queryParams.toString()}`

  try {
    const res = await fetcher(fullUrl, { next: { revalidate: 120 } })

    return res
  } catch {
    redirect('/')
  }
} 