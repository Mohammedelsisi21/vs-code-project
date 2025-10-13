import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { memo } from "react"
import BarList from "./BarList"


const FileOpendBar = () => {
    const { openFile, clickedFile } = useSelector((store: RootState) => store.fileTree)
    
    return (
    <div>
      <ul className="flex space-x-.5">
        {openFile.map((file) => <BarList key={file.id} file={file}/>)}
    </ul>
    {clickedFile.fileContent}
    </div>
  )
}

export default memo(FileOpendBar)