import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { memo } from "react"
import BarList from "./BarList"
import FileSyntaxhighlighter from "./FileSyntaxhighlighter"


const FileOpendBar = () => {
    const { openFile, clickedFile } = useSelector((store: RootState) => store.fileTree)
    
    return (
    <div>
      <ul className="flex space-x-.5 bg-gray-100/10">
        {openFile.map((file) => <BarList key={file.id} file={file}/>)}
    </ul>
    <FileSyntaxhighlighter content={clickedFile.fileContent}/>
    </div>
  )
}

export default memo(FileOpendBar)