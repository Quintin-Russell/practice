/** @jsx jsx */
import React, { useState } from "react";
import { jsx, css } from '@emotion/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
import Footer from "../components/footer";
import Typewriter from "../components/typewriter";
import Marquee from "react-fast-marquee";

import pageArr from "../pages/pages"
import lessThan768 from "../components/functions/lessthan768";
import style from "../style/style";
import layout from "../style/layout"

const jobDesc = [style.incon, style.light, layout.padding25]
const marqueeDiv = [layout.flex, layout.alignC, layout.justCent, layout.margin1rem, style.borderLight]
const marqueeA = [layout.margin1rem, layout.padding2rem, style.incon]

const settings = {
  pages: 2,
  bkg1: {
    offset: 0,
    factor: 1
  },
  bkg2: {
    offset: 1,
    factor: 1
  },
  bkg3: {
    offset: 0,
    factor: 0
  },
  parallax1: {
    offset: 0.3,
    factor: 1,
    speed: 0.75
  }
}

export default function LandingPage(props) {
  const [firstTWCompleted, setFirstTWCompleted] = useState(null)

  setTimeout(() => {
    setFirstTWCompleted(true)
  }, 2500)

  const render2ndTW = (firstTWCompleted) => {
    if (!firstTWCompleted) return <></>

    return (
      <Typewriter
        font='monts'
        fontSize={(!lessThan768(props.screenSize))
          ? 'font3rem'
          : 'font2halfrem'}
        tarString="At my core, I am a constant asker of why? and how did you do that?.
                  On the outside, I use React.js, jQuery, Express.js, PostgreSQL, Python,
                  and more to create web-based applications. I am actively looking for
                  opportunities that allow me to learn everyday and improve in what I know."
        bold={['why?', 'how', 'did', 'you', 'do', 'that?.', 'React.js,', 'jQuery,', 'Express.js,', 'PostgreSQL,', 'Python,']}
        interval={175} />
    )
  }

  const renderMarquee = (screenHeight, screenWidth) => {
    if (screenHeight > 640 && screenWidth > 585) return (
      <div css={style.fade}>
        <Marquee
          style={{ height: '100%' }}
          pauseOnHover={true} gradient={false}>
          {
            pageArr.map(x => {
              return (
                <div
                  key={x.name}
                  style={{
                    minWidth: `${props.screenSize / pageArr.length}px`,
                    borderRadius: '3rem'
                  }}
                  css={[marqueeDiv]}>
                  <a css={(!lessThan768(props.screenSize)) ? [...marqueeA, style.font2halfrem] : [...marqueeA]} href={x.hash}>
                    <p>{x.display}</p>
                  </a>
                </div>
              )
            })
          }
        </Marquee>
      </div>

    )
  }

  return (
    <>
      <Parallax pages={settings.pages}>

        <ParallaxLayer
          css={[layout.bkg1]}
          factor={settings.bkg1.factor}>
          <Header screenSize={props.screenSize} />
        </ParallaxLayer>

        <ParallaxLayer
          css={[layout.bkg2]}
          offset={settings.bkg2.offset}
          factor={settings.bkg2.factor}>
          <Footer />
        </ParallaxLayer>

        <ParallaxLayer
          offset={settings.parallax1.offset}
          speed={settings.parallax1.speed}
          factor={settings.parallax1.factor}
        >
          <div css={layout.margin1rem}>
            <div css={(!lessThan768(props.screenSize))
              ? [...jobDesc, style.font3rem]
              : [...jobDesc, style.font2halfrem]}>
              <span css={style.landingPgTxt_or}>{`<`}</span><span css={style.landingPgTxt_bl}>{`QuintinRussell`}</span>
            </div>
            <div css={(!lessThan768(props.screenSize))
              ? [...jobDesc, style.font3rem]
              : [...jobDesc, style.font2halfrem]}>
              <span css={style.landingPgTxt_bl}>{`profession =“software-engineer”`}</span>
            </div>
            <div css={(!lessThan768(props.screenSize))
              ? [...jobDesc, style.font3rem]
              : [...jobDesc, style.font2halfrem]}>
              <span css={style.landingPgTxt_bl}>{`tools=[“JavaScript”, “Python”, “CSS”, “HTML”]`}</span>
            </div>
            <div css={(!lessThan768(props.screenSize))
              ? [...jobDesc, style.font3rem, style.landingPgTxt_or]
              : [...jobDesc, style.font2halfrem, style.landingPgTxt_or]}>
              {`>`}
            </div>

          </div>

          <div css={[layout.smallSidePadding]}>
            <Typewriter
              font='pfDisp'
              fontSize={(!lessThan768(props.screenSize))
                ? 'font3rem'
                : 'font2halfrem'}
              tarString="
              I build intelligent and impactful applications that work.
              "
              bold={["I", "build", "intelligent", "and", "impactful", "applications", "that", "work."]}
              cursorDisappear={true}
              interval={200}
            />

            {render2ndTW(firstTWCompleted)}

          </div>

          <div css={(!lessThan768(props.screenSize))
            ? [...jobDesc, layout.margin1rem, style.font3rem]
            : [...jobDesc, layout.margin1rem, style.font2halfrem]}>
            <span css={style.landingPgTxt_or}>{`</`}</span><span css={style.landingPgTxt_bl}>{`QuintinRussell`}</span><span css={style.landingPgTxt_or}>{`>`}</span>
          </div>

        </ParallaxLayer>

        <ParallaxLayer
          offset={1.15}
          factor={0.5}
          speed={0.75}>
          {renderMarquee(props.screenHeight, props.screenSize)}
        </ParallaxLayer>

      </Parallax>
    </>
  )
}
