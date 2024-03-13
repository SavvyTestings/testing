import Link from 'next/link'
import s from './footer.module.scss'

export function Footer() {
  return (
    <footer className={s.footer}>
      <Link href="https://twitter.com/savvycoding" target="_blank">
        savvy.is.coding
      </Link>
      <Link href="https://twitter.com/savvycoding" target="_blank">
        twitter
      </Link>
    </footer>
  )
}
