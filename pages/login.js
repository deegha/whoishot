import { LoginPage } from '../views'
class Login extends React.Component {

  state = { 
    width: 0, 
    height: 0 ,
    email: '',
    password: ''
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  onChange = (feild, value) => this.setState({
    [feild]: value
  })

  render () {
    return (
      <LoginPage {...this.state} onChange={this.onChange}/>
    )
  }
}

export default Login