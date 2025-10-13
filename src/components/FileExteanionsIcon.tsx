import { memo } from "react"
import IconImage from "./IconImage"
import FileIcon from "../SVG/FileIcon"
import { exteanionsIconePath } from "../const"


interface IProps {
    fileName: string,
    isOpen?: boolean,
    isFolder?: boolean
}

const FileExteanionsIcon = ( {fileName, isOpen, isFolder}:IProps) => {
    const exteanions = fileName.split(".").pop()
    if(exteanions && Object.prototype.hasOwnProperty.call(exteanionsIconePath, exteanions)) {
    const path = isFolder ? `${exteanionsIconePath[exteanions]}${isOpen ? "-open": "" }.svg` : `${exteanionsIconePath[exteanions]}`;
    
    return <IconImage src={path} alt={fileName}/>
}

    if(isFolder)return <IconImage src={`/icons/folder-default${isOpen ? "-open" : ""}.svg`} alt={fileName}/>

    return <FileIcon />
}

export default memo(FileExteanionsIcon)