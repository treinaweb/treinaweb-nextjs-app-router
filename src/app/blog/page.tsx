import Link from "next/link"

export default async function BlogHome() {

  const posts = [
    { id: '1', title: "Primeiro Post Dinamico", slug: 'primeiro-post-dinamico'},
    { id: '2', title: "Segundo Post Dinamico", slug: 'segundo-post-dinamico'},
    { id: '3', title: "Terceiro Post Dinamico", slug: 'terceiro-post-dinamico'},
  ]

  await new Promise(resolve => setTimeout(resolve, 5000));

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.slug}</Link>
        </li>
      ))}
    </div>
  )
}

