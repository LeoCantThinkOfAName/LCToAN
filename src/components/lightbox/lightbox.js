import React, { useState, useEffect, useContext } from "react"
import { useGesture } from "react-use-gesture"

// context
import { ThemeContext } from "../../context/themContext"

// components
import Img from "gatsby-image"
import Transition from "../transition/lightboxTransition"

// styles
import lightboxStyle from "./lightbox.module.scss"

const LightBox = ({ frontmatter, setLightboxOn, lightBoxOn }) => {
  console.log(frontmatter)
  const { theme } = useContext(ThemeContext)
  const [gallery] = useState(frontmatter.snapshots)
  const [current, setCurrent] = useState(0)
  const bind = useGesture(({ down, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2
    if (!down && trigger) {
      const dir = xDir < 0 ? 1 : -1
      setCurrent(current + dir)
    }
  })

  const closeLightBox = () => {
    setLightboxOn(false)
  }

  const navigate = dir => {
    setCurrent(current + dir)
  }

  useEffect(() => {
    if (current >= gallery.length) {
      setCurrent(0)
    } else if (current <= -1) {
      setCurrent(gallery.length - 1)
    }
  }, [current])

  return (
    <Transition lightBoxOn={lightBoxOn}>
      {lightBoxOn ? (
        <div
          className={
            theme === "#fff"
              ? lightboxStyle.lightbox
              : lightboxStyle.lightboxDark
          }
        >
          <div
            className={lightboxStyle.closeArea}
            tabIndex="0"
            onFocus={() => closeLightBox()}
          />
          <button
            className={lightboxStyle.closeBtn}
            title="Close"
            onClick={() => closeLightBox()}
          >
            ╳
          </button>
          <ul>
            {gallery.map((pic, index) => (
              <li
                key={index}
                {...bind()}
                className={
                  index === current
                    ? lightboxStyle.active
                    : lightboxStyle.hidden
                }
              >
                <h3 className={lightboxStyle.title}>
                  {frontmatter.title} {frontmatter.titleEn} - {frontmatter.date}
                </h3>
                <figure>
                  <div className={lightboxStyle.imageWrapper}>
                    <Img fluid={pic.childImageSharp.fluid} />
                  </div>
                  <figcaption>
                    <div>
                      <p className={lightboxStyle.description}>
                        {frontmatter.caption[current]}
                        <br />
                        {frontmatter.captionEn[current]}
                      </p>
                      {frontmatter.url &&
                        frontmatter.url.map(url => (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener"
                            title={`Go to ${frontmatter.titleEn}`}
                            key={url}
                          >
                            {url}
                          </a>
                        ))}
                    </div>
                    <div>
                      <button
                        className={lightboxStyle.navigator}
                        title="Previos"
                        onClick={() => navigate(-1)}
                      >
                        ←
                      </button>
                      <button
                        className={lightboxStyle.navigator}
                        title="Next"
                        onClick={() => navigate(1)}
                      >
                        →
                      </button>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Transition>
  )
}

export default LightBox
