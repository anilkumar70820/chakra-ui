import { fonts } from "./fonts";
import { Providers } from "./providers";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={`${fonts.fontRoboto.variable} ${fonts.fontRubik.variable} ${fonts.fontPoppins.variable} ${fonts.fontInter.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}