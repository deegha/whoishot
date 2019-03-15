import MasonryLayout from 'react-masonry-layout'
import Link from 'next/link'
import { Head,Nav, PostCard, Header } from '../../components/'




const rightBtn = () => {
  return (
    <Link prefetch href="/create-post">
      <a>
      Create post
      </a>
    </Link>
  )
}

import css from './styles.scss'

export const LandingView = ({posts:{posts}, height}) => {
  
  return (
    <div className={css.container}>
      <Head title="Home" />
      <Header rightBtn={rightBtn()} />
      <div className={css.wrapper} style={{minHeight:height-100}}>
        <div className={css.stats}>
          <div className={css.firstPlace}>
            
          </div>
          <div className={css.otherPlaces}></div>
        </div>
        <div className={css.gallery}>

          LandingView

        </div>
      </div>
      
    </div>
  )
}