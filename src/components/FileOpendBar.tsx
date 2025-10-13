import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { memo } from "react"
import BarList from "./BarList"


const FileOpendBar = () => {
    const { openFile } = useSelector((store: RootState) => store.fileTree)
    
    return (
    <ul className="flex space-x-3">
        {openFile.map((file) => <BarList key={file.id} file={file}/>)}
    </ul>
  )
}

export default memo(FileOpendBar)