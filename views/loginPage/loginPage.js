
import { Header } from '../../components'
import css from './styles.scss'

export class LandingPage extends React.PureComponent {
  render () {
    const { width, height } = this.props
    return (
      <div>
        <Header />
        <div className={css.container}>
          <div className={css.imageSlider}>
            
          </div>
          <div className={css.form}></div>
        </div>
      </div>
    )
  }
}