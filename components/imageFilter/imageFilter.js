import ImageFilter from 'react-image-filter'

export const Sepia = ({image}) => {

  return (
    <ImageFilter
      image={image}
      filter={ 'sepia' } 
    />
  )
} 

export const Duotone = ({image}) => {

  return (
    <ImageFilter
      image={image}
      filter={ 'duotone' } 
      colorOne={ [40, 250, 250] }
      colorTwo={[40, 250, 250]  }
    />
  )
} 

export const Cool = ({image}) => {

  return (
    <ImageFilter
      image={image}
      filter={ [
        0.6, 0, 0, 0, 0,
        0, 1, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0,
      ]} 
    />
  )
} 

export const Vintage = ({image}) => {

  return (
    <ImageFilter
      image={image}
      filter={ [
        0.6, 0, 0, 0, 0.3,
        0, 1, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0,
      ]} 
    />
  )
} 

export const Beach = ({image}) => {

  return (
    <ImageFilter
      image={image}
      filter={ [
        1, 0, 0, 0, 0.2,
        0, 1, 0, 0, 0.1,
        0, -0.2, 0.5, 0, 0.3,
        0, 0, 0, 2, 1.1,
      ]} 
    />
  )
} 

export const Expo = ({image}) => {

  return (
    <ImageFilter
      image={image}
      filter={ [
        1, 0, -0.1, 0.2, 0,
        0, 1, 0, 0, 0,
        -0.1, 0.4, 1, 0, 0,
        0, 0.8, 0, 1.8, 1.5,
      ]} 
    />
  )
} 

export const Default = ({image}) => {

  return (
    <ImageFilter
      image={image}
      filter={ [
        1, 0, 0, 0, 0,
        0, 1, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0,
      ]} 
    />
  )
} 
