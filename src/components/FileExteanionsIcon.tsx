import { memo } from "react"
import IconImage from "./IconImage"
import FileIcon from "../SVG/FileIcon"


interface IProps {
    fileName: string,
    isOpen?: boolean,
    isFolder?: boolean
}
const FileExteanionsIcon = ( {fileName, isOpen, isFolder}:IProps) => {
    const exteanions = fileName.split(".").pop()
    console.log(exteanions)

    // ** files
    if(exteanions === "tsx") return <IconImage src="/icons/react_ts.svg" alt={fileName}/>
    if(exteanions === "jsx") return <IconImage src="/icons/react.svg" alt={fileName}/>
    if(exteanions === "html") return <IconImage src="/icons/html.svg" alt={fileName}/>
    if(exteanions === "js") return <IconImage src="/icons/javascript.svg" alt={fileName}/>

    // ** folders
    if(exteanions === "node_modules" && isFolder) return <IconImage src={`/icons/folder-node${isOpen ? "-open" : ""}.svg`} alt={fileName}/>
    if(exteanions === "public" && isFolder) return <IconImage src={`/icons/folder-public${isOpen ? "-open" : ""}.svg`} alt={fileName}/>
    if(exteanions === "components" && isFolder) return <IconImage src={`/icons/folder-components${isOpen ? "-open" : ""}.svg`} alt={fileName}/>
    if(exteanions === "src" && isFolder) return <IconImage src={`/icons/folder-src${isOpen ? "-open" : ""}.svg`} alt={fileName}/>
    if(exteanions === "VS_Code_Clone" && isFolder) return <IconImage src={`/icons/folder-vscode${isOpen ? "-open" : ""}.svg`} alt={fileName}/>

    if(isFolder)return <IconImage src={`/icons/folder-default${isOpen ? "-open" : ""}.svg`} alt={fileName}/>

    return <FileIcon />
}

export default memo(FileExteanionsIcon)