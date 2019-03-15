import css from './styles.scss'

export class PostCard extends React.PureComponent {

  
  render() {
    const { post } = this.props  
    
    return (
      <div className={css.container} >
        <img src={post.image_url}  />
      </div>
    )
  }

}