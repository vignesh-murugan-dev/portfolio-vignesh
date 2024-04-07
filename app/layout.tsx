import './globals.css'

export const metadata = {
  title: 'Vignesh Murugan',
  description: 'Vignesh Murugan, Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
