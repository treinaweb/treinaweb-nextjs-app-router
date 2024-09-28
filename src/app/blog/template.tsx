export default function BlogTemplate({ children }: any ){
  return (
    <div style={{textAlign: 'center', padding: '50px'}}>
      <h3>Artigos</h3>
      {children}
    </div>
  )
}