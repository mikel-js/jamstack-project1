import React from "react"
import DynamicComponent from "./DynamicComponent"
import { storyblokEditable } from "@storyblok/js"

const Page = ({ blok }) => {
  const content =
    blok.body &&
    blok.body.map(childBlok => (
      <DynamicComponent blok={childBlok} key={childBlok._uid} />
    ))
  return <div {...storyblokEditable(blok)}>{content}</div>
}

export default Page
