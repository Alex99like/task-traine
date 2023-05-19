import LeftTop from '../assets/left-top.svg'
import RightTop from '../assets/right-top.svg'
import Logo from '../assets/logo.svg'
import BgCount from '../assets/bg-count.svg'
import { HTMLProps } from 'react'

const images = {
  'left-top': LeftTop,
  'right-top': RightTop,
  'logo': Logo,
  'bg-count': BgCount
}

interface IImageCustom {
  name: keyof typeof images
}

export const ImageCustom = ({ name, ...rest }: IImageCustom & HTMLProps<HTMLImageElement>) => {
  return (
    <img src={images[name]} {...rest} />
  )
}
