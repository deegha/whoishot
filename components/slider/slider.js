
import css from './styles.scss'

export class SliderBar extends React.Component {

  state = { isDragging: false, value: 1 }

  handleMouseDown = (e) => {
    this.setState({ isDragging: true });
    e.stopPropagation();
    e.preventDefault;
  }
  
  handleMouseUp = (e) => {
    this.setState({ isDragging: false });
    e.stopPropagation();
    e.preventDefault;
  }

  handleMouseMove = (e) =>  {
    const { onChange, min, max } = this.props;
    if (this.state.isDragging) {
      const { left, right } = this.rootDOM.getBoundingClientRect();
      const rLeft = left - document.body.getBoundingClientRect().left;
      
      let value = ((e.clientX - rLeft) / (right - rLeft)) * 100;
      if (value < min) value = min;
      if (value > max) value = max;

      this.setState({ value });
      if (onChange) onChange(value);
    }
    e.stopPropagation();
    e.preventDefault;
  }

  render () {
    const { min, max } = this.props
    const { isDragging } = this.state
    let { value } = this.state
    if (typeof value === 'undefined') value = min

    return (
      <div
        className={css.component}
        ref={c => { this.rootDOM = c; }}
        onMouseUp={this.handleMouseUp}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
      >
        <div
          className={css.sliderButton}
          style={{ left: value }}>
          &nbsp;
        </div>
        &nbsp;
      </div>
    );
  }
}