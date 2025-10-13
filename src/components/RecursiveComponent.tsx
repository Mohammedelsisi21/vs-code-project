import { memo, useCallback, useState } from "react"
import type { IFile } from "../interfaces"
import BootomArrowIcon from "../SVG/BootomArrowIcon"
import RightArrowIcon from "../SVG/RightArrowIcon"
import FileExteanionsIcon from "./FileExteanionsIcon"

interface IProps {
    FileTree: IFile
}
const RecursiveComponent = ({FileTree: {name, isFolder, children}}: IProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)


    // ** Handlers
    const toggle = useCallback(() => setIsOpen(prev => !prev),[])

    
    return (<>
        <div className="ml-2 mb-2">
        <div className={`flex items-center w-fit mb-2 cursor-pointer ${!isFolder ? "ml-2" : null}`} onClick={toggle}>
            {
                isFolder ? <>
                    <div className="flex items-center mr-1">
                        {isOpen ? <><RightArrowIcon /></> : <><BootomArrowIcon /></>}
                        <span className="mr-1"><FileExteanionsIcon fileName={name} isFolder={isFolder} isOpen={isOpen}/></span>
                    </div>
                </> :
                <span className="mr-1"><FileExteanionsIcon fileName={name}/></span>
            }
            <span>
                {name}
            </span>
        </div>
            {isOpen && children && children?.map((file, indx) => <RecursiveComponent key={indx} FileTree={file} />)}
    </div>
</>)
}

export default memo(RecursiveComponent)