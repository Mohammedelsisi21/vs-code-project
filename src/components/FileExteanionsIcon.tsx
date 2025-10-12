import { memo } from "react"
import IconImage from "./IconImage"


interface IProps {
    fileName: string
}
const FileExteanionsIcon = ( {fileName}:IProps) => {
    const exteanions = fileName.split(".").pop()

    if(exteanions === "tsx") return <IconImage src="/icons/react_ts.svg" alt={fileName}/>
    if(exteanions === "jsx") return <IconImage src="/icons/react.svg" alt={fileName}/>
    if(exteanions === "html") return <IconImage src="/icons/html.svg" alt={fileName}/>
    if(exteanions === "js") return <IconImage src="/icons/javascript.svg" alt={fileName}/>

}

export default memo(FileExteanionsIcon)