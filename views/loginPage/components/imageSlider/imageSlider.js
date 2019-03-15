
// const sl1 = '../../../../static/sl1.jpg'
// const sl2 = '../../../../static/sl2.jpg'
// const sl3 = '../../../../static/sl3.jpg'
// const sl4 = '../../../../static/sl4.jpg'
// const sl5 = '../../../../static/sl5.jpg'
// const sl6 = '../../../../static/sl6.jpg'
// const sl7 = '../../../../static/sl7.jpg'
// const sl8 = '../../../../static/sl8.jpg'
// const sl9 = '../../../../static/sl9.jpg'
// const sl10 = '../../../../static/sl10.jpg'
// const sl11 = '../../../../static/sl11.jpg'
// const sl12 = '../../../../static/sl12.jpg'
// const sl13 = '../../../../static/sl13.jpg'
// const sl14 = '../../../../static/sl14.jpg'

const sl1 = '../../../../static/sl1.png'
const sl2 = '../../../../static/sl2.png'
const sl3 = '../../../../static/sl3.png'
const sl4 = '../../../../static/sl4.png'
const sl5 = '../../../../static/sl5.png'
const sl6 = '../../../../static/sl6.png'
const sl7 = '../../../../static/sl7.png'
const sl8 = '../../../../static/sl8.png'
const sl9 = '../../../../static/sl9.png'

const imgArray = [
  sl1,
  sl2, 
  sl3,
  sl4, 
  sl5, 
  sl6, 
  sl7, 
  sl8, 
  sl9, 
]
import css from './styles.scss'

export class ImageSlider extends React.Component {

  state = {
    selected: 1
  }

  componentDidMount() {
    this.startChange()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  startChange = () => {
    this.timer = setInterval(() => this.setState(pre => ({selected: pre.selected > 7?0:pre.selected+1})), 10000)
  }

  render () {
    const { selected } = this.state

    return (
      <div className={css.sliderContainer}>
        <img src={imgArray[selected]} key={imgArray[selected]} />
      </div>
    )
  }
} 