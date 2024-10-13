
import './App.css'
import { Button } from './Components/Common/Button'
import { SectionTitle } from './Components/Common/SectionTitle'
import { Hero } from './Components/Home/Hero'
import { ProblemSolution } from './Components/Home/ProblemSolution'
import { Footer } from './Components/Share/Footer'
import { MobileMenu } from './Components/Share/MobileMenu'
import { Navbar } from './Components/Share/Navbar'
function App() {
  return (
    <main className='font-nunito-sans bg-[url(img/bannar.svg)] min-h-svh bg-no-repeat bg-top'>
    {/* <h1 className='text-center font-bold text-3xl'>love</h1>
    <Button>Primary button</Button>
    <Button className={"text-black bg-slate-300"}>secondary button</Button>
    <SectionTitle gradient="Solution">Problem & </SectionTitle> */}
    <Navbar/>
    <Hero/>
    <ProblemSolution/>
    <Footer/>
    </main>
  )
}

export default App
