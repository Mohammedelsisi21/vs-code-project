import { useState } from "react"
import type { IFile } from "../interfaces"
import BootomArrowIcon from "../SVG/BootomArrowIcon"
import FileIcon from "../SVG/FileIcon"
import { FolderIcon } from "../SVG/FolderIcon"
import RightArrowIcon from "../SVG/RightArrowIcon"

interface IProps {
    FileTree: IFile
}
const RecursiveComponent = ({FileTree: {name, isFolder, children}}: IProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)


    // ** Handlers
    const toggle = () => setIsOpen(prev => !prev)
    return (<>
        <div className="ml-2 mb-2">
        <div className="flex items-center mb-2 cursor-pointer" onClick={toggle}>
            {
                isFolder ? <>
                    <div className="flex items-center mr-1">
                        {isOpen ? <><RightArrowIcon /></> : <><BootomArrowIcon /></>}
                        <FolderIcon />
                    </div>
                </> : <span className="mr-1"><FileIcon /></span>
            }
            <span>
                {name}
            </span>
        </div>
            {isOpen && children && children?.map((file, indx) => <RecursiveComponent key={indx} FileTree={file} />)}
    </div>
</>)
}

export default RecursiveComponent