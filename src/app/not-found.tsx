import Link from "next/link";

export default function NotFound() {
  return(
    <div style={{textAlign: 'center', padding: '50px'}}>
      <h1>Página não encontrada</h1>
      <p>Você está procurando uma página que não existe</p>
      <Link href={"../"}>Voltar...</Link>
    </div>
  )
}