import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Positioning } from "@/components/positioning"
import { Areas } from "@/components/areas"
import { CoreServices } from "@/components/core-services"
import { AppliedLogistics } from "@/components/applied-logistics"
import { WhyChoose } from "@/components/why-choose"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Positioning />
        <Areas />
        <CoreServices />
        <AppliedLogistics />
        <WhyChoose />
      </main>
      <SiteFooter />
    </div>
  )
}