
import { Inter, Poppins, Roboto, Rubik } from 'next/font/google'

const fontRubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight:['400','500','600','700']
});
const fontPoppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight:['400','500','600','700']
});

const fontInter = Inter({
    subsets:['latin'],
    variable:'--font-inter',
    weight:['400','500','600','700']
});
const fontRoboto = Roboto({
    subsets:['latin'],
    variable:'--font-roboto',
    weight:['400','500','700']
})

export const fonts = {
  fontRubik,fontPoppins,fontInter,fontRoboto,
}