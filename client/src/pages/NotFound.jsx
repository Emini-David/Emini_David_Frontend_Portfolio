import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'

export default function NotFound() {
  usePageMeta({ title: 'Page not found' })
  return (
    <section className="page-hero not-found">
      <Reveal className="container">
        <p className="section-label">404</p>
        <h1 className="section-title">This page does not exist.</h1>
        <p className="section-intro">The link may be broken or the page may have moved.</p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </Reveal>
    </section>
  )
}
