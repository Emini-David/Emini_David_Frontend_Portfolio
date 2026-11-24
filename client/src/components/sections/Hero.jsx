import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SocialLinks from '../SocialLinks'
import portfolio from '../../config/portfolio'

export default function Hero() {
  const { firstName, middleName, lastName, title, description, profileImage, profileImageCutout, profileImageAlt } = portfolio
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy hero-copy--enter">
          <p className="hero-greeting">Hi, I&rsquo;m</p>
          <h1 id="hero-title" className="hero-name">
            <span className="hero-name-typing hero-name-first" aria-hidden="true">{firstName}</span>
            <span className="hero-name-typing hero-name-lastline" aria-hidden="true">
              {middleName} <span className="text-accent">{lastName}</span>
            </span>
            <span className="sr-only">{firstName} {middleName} {lastName}</span>
          </h1>
          <p className="hero-role">
            <span className="hero-role-line" aria-hidden="true" />
            {title}
          </p>
          <p className="hero-desc">{description}</p>

          <div className="hero-actions">
            <Link to="/portfolio" className="btn btn-primary">
              View Projects <FiArrowRight aria-hidden="true" />
            </Link>
            <Link to="/#contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>

          <SocialLinks className="hero-social" />
        </div>

        <div className="hero-visual hero-visual--enter">
          <div className={`hero-photo hero-photo--intro ${profileImageCutout ? 'hero-photo--cutout' : ''}`}>
            <img src={profileImage} alt={profileImageAlt} width="700" height="900" fetchPriority="high" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  )
}
