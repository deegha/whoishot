import css from './styles.scss'

export const Selection = ({callback, component, active}) => {


  return (
    <div onClick={callback} className={active?css.filterActive:css.filter}>
      {component}  
    </div>  
  )
}