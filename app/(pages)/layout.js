import { Debug } from 'components/debug'
import { GSAP } from 'components/gsap'
import { RealViewport } from 'components/real-viewport'
import { ThirdPartyScripts } from 'components/third-party-scripts'
import 'styles/global.scss'
import { fonts } from '../fonts'

export const metadata = {
  title: 'Savvycoding',
  description: 'just pure vibes here',
}
// # Calls:
// gsap for ScrollTriggerConfig and lenis
// googletagmanager
export default async function Layout({ children }) {
  return (
    <html lang="en" className={fonts.className}>
      <head></head>
      <body>
        <RealViewport />
        {children}
        <Debug />
        <GSAP />
        <ThirdPartyScripts />
      </body>
    </html>
  )
}
