import React from "react"
import Alea from "alea"
import watercolor from "watercolor-canvas"

// styles
import watercolorStyle from "./watercolor.module.scss"

export default class Watercolor extends React.PureComponent {
  constructor(props) {
    super(props)

    this.canvasElm1 = React.createRef()
    this.canvasElm2 = React.createRef()

    this.state = {
      size: [window.innerWidth, window.innerHeight],
      settings: {
        colors: 2,
        shapePoints: 6,
        spread: 150,
        colorSize:
          window.innerWidth / 3 >= window.innerHeight / 2
            ? window.innerHeight / 3
            : window.innerWidth / 3,
        deformations: 2,
        layers: 70,
        randomSeed: Math.random(),
        sigma: 2,
        blend: "lighten",
        mask: true,
        maskCircles: 180,
        maskCircleSize: 200,
      },
    }
  }

  drawBg() {
    const { settings, size } = this.state
    const canvas =
      this.props.foreground === 0
        ? this.canvasElm1.current
        : this.canvasElm2.current
    const ctx = canvas.getContext("2d")
    const rand = new Alea(settings.randomSeed)
    const canvasCenter = [size[1] / 2, size[0] / 2]

    ctx.clearRect(0, 0, size[0], size[1])

    const colors = new Array(settings.colors).fill(undefined).map(() => {
      const color = [(rand() * 256) | 0, (rand() * 256) | 0, (rand() * 256) | 0]

      const rads = rand() * Math.PI * 2
      const dist = Math.pow(rand(), 0.5) * settings.spread
      const position = [
        Math.cos(rads) * dist + canvasCenter[0],
        Math.sin(rads) * dist + canvasCenter[1],
      ]
      return { color, position }
    })

    const params = Object.assign({}, settings, {
      randomFn: rand,
      context: ctx,
      colors: colors,
    })
    const draw = watercolor(params)
    draw()
  }

  componentDidMount() {
    let inter

    const handleResize = () => {
      // set a throuttle to prevent watercolor keep redraw when resize
      // it's going to be terrible for performance
      clearTimeout(inter)
      inter = setTimeout(() => {
        this.setState(
          {
            size: [window.innerWidth, window.innerHeight],
            settings: {
              ...this.state.settings,
              colorSize:
                window.innerWidth / 3 >= window.innerHeight / 2
                  ? window.innerHeight / 3
                  : window.innerWidth / 3,
            },
          },
          () => this.drawBg()
        )
      }, 300)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }

  componentDidUpdate(prevProps, prevStates) {
    if (prevProps.foreground !== this.props.foreground) {
      this.setState(
        {
          settings: { ...this.state.settings, randomSeed: Math.random() },
        },
        () => this.drawBg()
      )
    }
  }

  render() {
    const { foreground } = this.props
    const { size } = this.state

    return (
      <>
        <canvas
          className={foreground === 0 ? watercolorStyle.canvas : ""}
          ref={this.canvasElm1}
          height={size[1]}
          width={size[0]}
        />
        <canvas
          className={foreground === 1 ? watercolorStyle.canvas : ""}
          ref={this.canvasElm2}
          height={size[1]}
          width={size[0]}
        />
      </>
    )
  }
}
