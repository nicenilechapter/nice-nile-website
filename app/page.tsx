import HeroSection from '@/components/landingpage/heroPage'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Navigation/>
      <HeroSection/>
    </main>
  )
}
