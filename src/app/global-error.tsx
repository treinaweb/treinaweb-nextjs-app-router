'use client'

export default function GlobalError({error, reset}: any) {
  return (
    <html>
      <body>
        <h1>ERRO GLOBAL</h1>
        <button onClick={() => reset()}>Tentar novamente</button> 
      </body>
    </html>
  )
}