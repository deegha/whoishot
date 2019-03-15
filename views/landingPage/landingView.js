import MasonryLayout from 'react-masonry-layout'
import Link from 'next/link'

import css from './styles.scss'
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

          <MasonryLayout
            sizes={[ { columns: 1, gutter: 10 },
              { mq: '468px', columns: 1, gutter: 15 },
              { mq: '544px', columns: 2, gutter: 15 },
              { mq: '840px', columns: 3, gutter: 15 },
              { mq: '1200px', columns: 4, gutter: 15 },
              { mq: '1324px', columns: 4, gutter: 15 } ]}

            id="masonry-layout"
            // infiniteScroll={this.loadItems}
            >
            {posts.map(post => <PostCard post={post} /> )}
        </MasonryLayout>

        </div>
      </div>
      
    </div>
  )
}