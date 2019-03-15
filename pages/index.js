import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { Head,Nav } from '../components/'
import { LandingView } from '../views/landingPage/landingView'
import { getPosts } from '../actions/postsActions'

class LandingPage extends React.Component {
  state = { width: 0, height: 0 }

  componentDidMount() {
    this.props.getPosts()
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

    const { posts } = this.props
    
    return (
      <LandingView posts={posts} {...this.state} />
    )
  }
}

const mapStateToProps = ({posts}) => ({
  posts
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
