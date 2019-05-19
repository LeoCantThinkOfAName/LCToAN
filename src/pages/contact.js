import React from "react"

// components
import SEO from "../components/seo"
import ContactForm from "../components/form/form"

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact"
        keywords={[
          "LCTOAN.",
          "Leo Can't Think Of A Name",
          "front-end",
          "web",
          "front-end developer",
          "web developer",
          "react",
          "node.js",
          "website",
          "contact",
        ]}
      />
      <ContactForm />

      <div>
        <p>
          或是你可以透過以下的社群連結找到我...
          <br />
          騙你的，身為一個自閉兒，我才不用社群軟體呢，哼。請直接寄信給我吧。
        </p>
        <p>
          Or you can find me on the social medias listed below...
          <br />
          Just kidding... As a helpless introvert as me, I don't actively using
          any social media. Just send me a mail instead.
        </p>
      </div>
    </>
  )
}

export default ContactPage
