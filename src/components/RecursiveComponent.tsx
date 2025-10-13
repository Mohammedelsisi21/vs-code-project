import { memo, useCallback, useState } from "react"
import type { IFile } from "../interfaces"
import BootomArrowIcon from "../SVG/BootomArrowIcon"
import RightArrowIcon from "../SVG/RightArrowIcon"
import FileExteanionsIcon from "./FileExteanionsIcon"
import { useDispatch, useSelector } from "react-redux"
import { setActiveTab, setOpenedFile } from "../redux/features/tree/fileTreeSlice"
import type { RootState } from "../redux/store"
import { doseFileOpend } from "../utils"

interface IProps {
    FileTree: IFile
}
const RecursiveComponent = ({FileTree}: IProps) => {
    const  {id ,name, isFolder, children} = FileTree
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const dispatch = useDispatch()
    const {openFile} = useSelector((store: RootState) => store.fileTree)

    // ** Handlers
    const toggle = useCallback(() => setIsOpen(prev => !prev),[])

    const onFileOpen = () => {
        const isOpenFile = doseFileOpend(openFile, id)
        if(isOpenFile) return
        dispatch(setOpenedFile([...openFile, FileTree]))
        dispatch(setActiveTab(id))
    }
    return (<>
        <div className="ml-2 mb-2">
        <div className={`flex items-center w-fit mb-2 cursor-pointer ${!isFolder ? "ml-2" : null}`} onClick={toggle}>
            {
                isFolder ? <>
                    <div className="flex items-center mr-1">
                        {isOpen ? <><RightArrowIcon /></> : <><BootomArrowIcon /></>}
                        <span className="mr-1"><FileExteanionsIcon fileName={name} isFolder={isFolder} isOpen={isOpen}/></span>
                        <span>{name}</span>
                    </div>
                </> :
                <div className="flex items-center" onClick={onFileOpen}>
                    <span className="mr-1"><FileExteanionsIcon fileName={name}/></span>
                    <span>{name}</span>
                </div>
            }
        </div>
            {isOpen && children && children?.map((file, indx) => <RecursiveComponent key={indx} FileTree={file} />)}
    </div>
</>)
}

export default memo(RecursiveComponent)