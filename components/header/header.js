import css from './styles.scss'
import Link from 'next/link'

class Header extends React.PureComponent {

  render () {
    return(
      <div>
        <div className={css.container}>
          <div className={css.headerLeft}>
            <Link prefetch href="/">
              <a>
              <h1 className={css.siteName}>
                hot shot
              </h1>
              </a>
            </Link>
          </div>
          <div className={css.headerRight}>
            {this.props.rightBtn}
          </div>
        </div>
        <div className={css.space} />
      </div>
    )
  }
}

export default Header