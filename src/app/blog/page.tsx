'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default async function BlogHome() {
  const router = useRouter();

  const posts = [
    { id: '1', title: "Primeiro Post Dinamico", slug: 'primeiro-post-dinamico'},
    { id: '2', title: "Segundo Post Dinamico", slug: 'segundo-post-dinamico'},
    { id: '3', title: "Terceiro Post Dinamico", slug: 'terceiro-post-dinamico'},
  ]

  /* await new Promise(resolve => setTimeout(resolve, 5000)); */

  const handlePostClick = (slug: string) => {
    router.push(`/blog/posts?slug=${slug}`);
  }

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <li key={post.id}>
          <button onClick={() => handlePostClick(post.slug)}>{post.title}</button>
        </li>
      ))}
    </div>
  )
}

