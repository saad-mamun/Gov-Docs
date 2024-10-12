
import './App.css'
import { Button } from './Components/Common/Button'
import { SectionTitle } from './Components/Common/SectionTitle'
import { Footer } from './Components/Share/Footer'
import { MobileMenu } from './Components/Share/MobileMenu'
import { Navbar } from './Components/Share/Navbar'
function App() {
  return (
    <main className=''>
    {/* <h1 className='text-center font-bold text-3xl'>love</h1>
    <Button>Primary button</Button>
    <Button className={"text-black bg-slate-300"}>secondary button</Button>
    <SectionTitle gradient="Solution">Problem & </SectionTitle> */}
    <Navbar/>
    <div className='min-h-[50svh]'></div>
    <Footer/>
    </main>
  )
}

export default App
