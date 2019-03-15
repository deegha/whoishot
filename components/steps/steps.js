import css from './styles.scss'

const Point = ({text, selected}) => {

  return  (
    <div className={selected?css.pointSelected:css.point}>
      <span />
      <p>
        {text}
      </p>
    </div>
  )
}

export class Steps extends React.Component {

  render() {
    const { step } = this.props

    return (
      <div className={css.container}>
        <div className={css.line}>
          <Point selected={step>0} text={'Shoot your best picture'} />
          <Point selected={step>1} text={'Size matters'} />
          <Point selected={step>2} text={'Right colors to match the scene'} />
          <Point selected={step>3} text={'Star in the making'} />
        </div>
      </div>
    )
  }
} 