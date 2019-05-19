import React from "react"
import { Link } from "gatsby"

// components
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <>
    <SEO
      title="About"
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
        "about",
      ]}
    />
    <article className="about-article">
      <h2>Who Is LCTOAN. Anyway?</h2>
      <p>
        Leo Cant Think Of A Name，因為想不到名字的關係，就直接承認了。
        <br />
        目前是兩年經驗不學無術的自學網頁前端工作者，曾經做過近五年毫無相干的人力資源工作，實際上是非常閉俗又完全稱得上是死魚的人。
      </p>
      <p>
        Leo Cant Think Of A Name, I just admit I cant come out any decent name.
        <br />
        I'm a so call self-taught front-end developer for around two years
        experiences, and have been a human resource coordinator for almost 5
        years, but is definitely not a people person.
      </p>
    </article>
    <hr className="seperator" />
    <article className="about-article">
      <h2>Where Can I Find Leo?</h2>
      <p>
        台北市各大地下道系統(包括下水道)，或是上班日的旅盟資訊辦公室，最簡單的方法大概是透過{" "}
        <Link to="/contact">Contact</Link> 裡面的各種聯絡方式了。
      </p>
      <p>
        Every underground tunnel system(sewer included), or Lemon IT.'s office
        if it's working day. But the easiest way to find me is by all the
        contact information in <Link to="/contact">Contact</Link> page.
      </p>
    </article>
    <hr className="seperator" />
    <article className="about-article">
      <h2>What Does Leo Do For Living?</h2>
      <p>
        專營網站建置，大概像是日勝生加賀屋、花蓮理想大地、六福餐飲集團等等的網站，欲知詳情請到{" "}
        <Link to="/works">Works</Link> 看個仔細吧！
      </p>
      <p>
        I do websites, like radium kagaya, promised land resort, Leofoo
        restaurants etc... If your wanna learn more, just go check out{" "}
        <Link to="/works">Works</Link> page.
      </p>
    </article>
    <hr className="seperator" />
    <article className="about-article">
      <h2>Why Leo Want to Build This Website?</h2>
      <p>
        各種各樣的理由，像是想要做一個網站自己爽一下、或是提供一些公開資訊，如果你有任何商業提案或是工作的機會歡迎找我。
      </p>
      <p>
        There's various reasons, firstable, I think it's just fun to do,
        second... I could provide some information in case someone wanna reach
        me for some works purposal, everything is welcome!
      </p>
    </article>
    <hr className="seperator" />
  </>
)

export default AboutPage
