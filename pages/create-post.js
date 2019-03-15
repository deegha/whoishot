import { connect } from 'react-redux'
import { CreatePostPage } from '../views/'

class CreatePost extends React.Component {

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

  render() {
    const { height } = this.state

    return (
      <CreatePostPage height={height-90} />
    )
  }
}

export default CreatePost
