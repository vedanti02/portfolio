import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Projects from '@/app/components/Projects'
import Testimonials from '@/app/components/Testimonials'
import Experience from '@/app/components/Experience'
import CTA from '@/app/components/CTA'
import Footer from '@/app/components/Footer'
import Education from './components/Education'

export default function Home() {
  return (
    <main className=''>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}