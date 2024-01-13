'use client'

import ChakraModal from './components/ChakraModal'
import ChakraTabs from './components/ChakraTabs'
import FAqs from './components/FAqs'
import Hero from './components/Hero'
import RowCol from './components/RowCol'

export default function Home() {
  return (
  <>
  <Hero/>
  <RowCol/>
  <FAqs/>
  <ChakraTabs/>
  <ChakraModal/>
  </>
  )
}
