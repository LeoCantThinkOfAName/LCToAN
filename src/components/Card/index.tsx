import Img from "gatsby-image"
import React, { useState } from "react"

import { WorksData } from "../../types"
import styled from "styled-components"
import Modal from "../Modal/index"

import { trackCustomEvent } from "gatsby-plugin-google-analytics"

interface CardProp {
  data: WorksData
}

interface ModalInterface {
  title: string
  url: string
  description: string
  open: boolean
  imgs: any[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = React.createContext<ModalInterface>({
  title: "",
  url: "",
  description: "",
  open: false,
  imgs: [],
  setOpen: () => {},
})

const StyledDiv = styled.div`
  opacity: 0.7;
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`

const Card: React.FC<CardProp> = ({ data }) => {
  const { title, thumbnail, imgs, description, url } = data
  const [open, setOpen] = useState(false)
  const context: ModalInterface = {
    title,
    url,
    description,
    imgs,
    open,
    setOpen,
  }

  const handleClick = (title: string) => {
    setOpen(true)
    trackCustomEvent({
      category: "Works Visited",
      action: "Click",
      label: title,
    })
  }

  return (
    <ModalContext.Provider value={context}>
      <StyledDiv onClick={() => handleClick(data.title)} title={title}>
        <Img fluid={thumbnail} />
      </StyledDiv>
      <Modal />
    </ModalContext.Provider>
  )
}

export default Card
