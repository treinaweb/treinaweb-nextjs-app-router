import Header from "@/ui/components/Header/Header";

export default function SobreLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}