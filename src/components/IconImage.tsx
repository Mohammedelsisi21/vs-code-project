import { memo } from "react"

interface IProps {
    src: string,
    alt: string
}
const IconImage = ({src, alt}: IProps) => {
  return (
        <img src={src} alt={alt} className="w-5 h-5"/>
  )
}

export default memo(IconImage)