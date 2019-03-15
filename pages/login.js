import { LandingPage } from '../views'
class LoginPage extends React.Component {

  state = { width: 0, height: 0 }

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

  render () {
    return (
      <LandingPage {...this.state} />
    )
  }
}

export default LoginPage