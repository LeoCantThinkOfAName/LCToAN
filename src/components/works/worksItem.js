import React, { useRef, useEffect, useState } from "react"

// components
import Img from "gatsby-image"

// styles
import workStyle from "./work.module.scss"
import LightBox from "../lightbox/lightbox"

const WorksItem = ({ data }) => {
  const { frontmatter } = data
  const [init, setInit] = useState(false)
  const [lightBoxOn, setLightboxOn] = useState(false)
  const thumbnail = useRef(null)

  useEffect(() => {
    let inter

    setInit(true)

    thumbnail.current.addEventListener("mousemove", e => {
      clearTimeout(inter)
      let width = thumbnail.current.offsetWidth
      let height = thumbnail.current.offsetHeight

      thumbnail.current.style.transform = `perspective(1000px) rotate3d(${
        e.offsetY > height / 2 ? -1 : 1
      }, ${e.offsetX > width / 2 ? 1 : -1}, 0, 15deg) scale(1.15)`

      inter = setTimeout(() => {
        thumbnail.current.style = ""
      }, 1000)
    })
  }, [])

  const openLightbox = (e, frontmatter) => {
    e.preventDefault()
    const { id } = frontmatter

    // window.location.hash = titleEn
    document.querySelector(`#${id}`).scrollIntoView({
      behavior: "smooth",
    })
    setLightboxOn(true)
  }

  return (
    <>
      <figure className={init ? workStyle.workItem : workStyle.workItemHide}>
        <div className={workStyle.anchor} id={frontmatter.id} />
        <a
          href={`#${frontmatter.id}`}
          className={workStyle.workThumbnailLink}
          ref={thumbnail}
          onClick={e => openLightbox(e, frontmatter)}
        >
          <Img
            fluid={frontmatter.cover.childImageSharp.fluid}
            className={workStyle.workThumbnail}
          />
        </a>
        <figcaption>
          <div
            href={frontmatter.url}
            target="_blank"
            rel="noopener noreferrer"
            className={workStyle.workInfo}
          >
            <div>{frontmatter.title}</div>
            <div>{frontmatter.titleEn}</div>
            <div className={workStyle.workDate}>{frontmatter.date}</div>
          </div>
        </figcaption>
      </figure>

      <LightBox
        frontmatter={frontmatter}
        setLightboxOn={setLightboxOn}
        lightBoxOn={lightBoxOn}
      />
    </>
  )
}

export default WorksItem
