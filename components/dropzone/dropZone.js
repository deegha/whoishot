import css from './styles.scss'

export const DropZone = ({children, width, height, onChange}) => {

  return (
    <div className={css.wrapper} style={{width, height}}>
      {children}
      <input 
        onChange={onChange}
        type="file" className={css.input} />
    </div>
  )
}