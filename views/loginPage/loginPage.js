
import { Header, TextInput } from '../../components'
import { ImageSlider } from './components/imageSlider/imageSlider'
import css from './styles.scss'


export class LoginPage extends React.PureComponent {
  render () {
    const { width, height, onChange, email, password } = this.props
    return (
      <div>
        <div className={css.container}>
          <div className={css.imageSlider}>
            <ImageSlider />
          </div>
          <div className={css.form}>
            <div className={css.title}>
              <h1>Path to be a star</h1>
            </div>
            <div className={css.formController}>
              <div className={css.fb}>Continue with facebook</div>
            </div>
            <div className={css.seperator}>
              <hr />
            </div>
            <div className={css.formController}>
              <TextInput 
                value={email}
                name={'email'}
                lable={"Email"}
                type={"text"} 
                placeholder="Enter email"
                onChange={onChange}/>
            </div>
            <div className={css.formController}>
              <TextInput 
                value={email}
                name={'email'}
                lable={"Email"}
                type={"text"} 
                placeholder="Enter password"
                onChange={onChange}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}