import { Header, DropZone, ImageFilter, SliderBar, Steps } from '../../components'
import Icon, { FontAwesome, Feather, MaterialCommunityIcons } from 'react-web-vector-icons'
import css from './styles.scss'
import AvatarEditor from 'react-avatar-editor'

import { DisplayImage, Selection } from './components'

export class CreatePostPage extends React.Component {
  state = {
    step: 1,
    url: '',
    file: '',
    cropedImage: '',
    scale: 1,
    filter: 'Default'
  }

  handleChange = (event) => {
    const image = event.target.files.length > 0 ?URL.createObjectURL(event.target.files[0]): ""
    this.setState({
      file: image,
      step:2,
    })
  }

  setEditorRef = (editor) => this.editor = editor

  onClickSave = () => {
    if (this.editor) {
      const canvasScaled = this.editor.getImageScaledToCanvas()
      canvasScaled.toBlob(blob => {
        this.setState({cropedImage:URL.createObjectURL(blob), step:3})
      })
    }
  }

  changeCropSize = (value) =>  {
    this.setState({ scale: Math.round(value) });
  }

  setFilteredImage = (filter) => () => {
    this.setState({filter})
  }

  startNew = () => {
    this.setState({
      step: 1,
      url: '',
      file: '',
      cropedImage: '',
      scale: 1,
      filter: 'Default'
    })
  }

  render() {
    const { height } = this.props
    const { file, cropedImage, scale, step, filter } = this.state

    const scaleFinal =  scale < 14 ? 1: scale/14
    return (
      <div>
        <Header />
        <div className={css.container}  style={{minHeight: height}}>
          <div className={css.imageArea}>
            {cropedImage !== ''? (
              <DisplayImage close={this.startNew} src={cropedImage}  filter={filter}/>
            ): (
              (file !== '')? (
                <div className={css.imageContainer} >
                 <AvatarEditor
                  ref={this.setEditorRef}
                  image={file}
                  width={280}
                  height={280}
                  border={20}
                  color={[0,0,0, 0.3]} // RGBA
                  scale={scaleFinal}
                  rotate={0}
                />
                 <div className={css.sliderContaiennr}> 
                  <SliderBar  min="1" max="100" onChange={this.changeCropSize} />
                 </div>
                </div>
              ): (
                <DropZone width={305} height={305} onChange={this.handleChange}>
                <div className={css.dropzone}>
                  <div className={css.drop}>
                    drop zone
                  </div>
                </div>
                </DropZone>
              )
            )}
            {cropedImage && (
              <div className={css.filters}>
                <Selection 
                  active={filter === 'Default'}
                  callback={this.setFilteredImage('Default')} 
                  component={<ImageFilter.Default image={cropedImage} />} />
                <Selection 
                  active={filter === 'Sepia'}
                  callback={this.setFilteredImage('Sepia')} 
                  component={<ImageFilter.Sepia image={cropedImage} />} />
                <Selection 
                  active={filter === 'Cool'}
                  callback={this.setFilteredImage('Cool')} 
                  component={<ImageFilter.Cool image={cropedImage} />} />
                <Selection 
                  active={filter === 'Vintage'}
                  callback={this.setFilteredImage('Vintage')} 
                  component={<ImageFilter.Vintage image={cropedImage} />} />
                <Selection 
                  active={filter === 'Beach'}
                  callback={this.setFilteredImage('Beach')} 
                  component={<ImageFilter.Beach image={cropedImage} />} />
                <Selection 
                  active={filter === 'Expo'}
                  callback={this.setFilteredImage('Expo')} 
                  component={<ImageFilter.Expo image={cropedImage} />} />
      
            </div> 
            )}
            {file && (
              <div className={css.postBtn} onClick={this.onClickSave}>
                  Perfect!, Next
              </div>
            )}
          
          </div>
          <div className={css.infromationArea}>
           <Steps step={step}/>   
          </div>
        </div>
      </div>    
    )
  }
}