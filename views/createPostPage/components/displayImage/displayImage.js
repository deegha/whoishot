
import { ImageFilter } from '../../../../components'
import css from './styles.scss'
import { IoMdCloseCircleOutline } from "react-icons/io"

export const DisplayImage = ({src, filter, close}) => {


  const Component = ImageFilter[`${filter}`]
  

  return (
    <div className={css.imageContainer}>
      <div className={css.closeBtnContainer}>
        <span onClick={close} className={css.closeBtn}><IoMdCloseCircleOutline size={'2em'} /></span>
      </div>
      <Component image={src} />
    </div>
  )
  
}