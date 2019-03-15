import { connect } from 'react-redux'
import css from './styles.scss'

const PageContainer = ({ children, style }) => {
  console.log(style)
  return(
    <div style={style} className={css.container}>
      {children}
    </div>
  )
}

export default PageContainer