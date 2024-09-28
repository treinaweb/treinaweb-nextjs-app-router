'use client'
export default function ErrorPage({error, reset} : any) {
  return (
    <div style={{textAlign: 'center', color: 'red'}}>
      <h1>Error: {error.message}</h1>
    </div>
  )
}