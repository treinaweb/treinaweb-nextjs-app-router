'use client'
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function BlogPost() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  const posts = [
    { slug: 'primeiro-post-dinamico', title: "Primeiro Post Dinamico", content: 'Lorem 1 ipsum Lorem Loremdolor sit amet' },
    { slug: 'segundo-post-dinamico', title: "Segundo Post Dinamico", content: 'Lorem 2 ipsum Lorem dolor sit ametLorem ' },
    { slug: 'terceiro-post-dinamico', title: "Terceiro Post Dinamico", content: 'Lorem 3 ipsum dolor sit amet Lorem Lorem' },
  ]
  
  const post = posts.find(post => post.slug === slug)

  if (slug === 'erro') {
    throw new Error('Erro Intencional - Erro Global Teste');
  }

  return (
    <div style={{textAlign: 'center', padding: '20px'}}>
      <h1>{post?.title}</h1>
      <br />
      <p>{post?.content}</p>
      <button onClick={() => router.back()}>Voltar...</button>
    </div>
  )
}