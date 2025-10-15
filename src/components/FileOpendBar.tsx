import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { memo, useState } from "react"
import BarList from "./BarList"
import FileSyntaxhighlighter from "./FileSyntaxHighlighter"
import DropMenu from "./ui/DropMenu"



const FileOpendBar = () => {
  const { openFile, clickedFile } = useSelector((store: RootState) => store.fileTree)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [positionMenu, setPositionMenu] = useState<{x: number, y: number}>({x: 0, y: 0})


  return (
  <div>
    <ul
    className="flex space-x-.5 bg-gray-100/10 border-b border-b-[#333333a8]"
    onContextMenu={(e) => {
            e.preventDefault()
            setPositionMenu({x: e.clientX, y: e.clientY})
            setShowMenu(true)
          }}>
      {openFile.map((file) => <BarList key={file.id} file={file}/>)}
  </ul>
  <FileSyntaxhighlighter content={clickedFile.fileContent}/>
  {showMenu && <DropMenu positionMenu={positionMenu} setShowMenu={setShowMenu}/>}
  </div>
  )
}

export default memo(FileOpendBar)



// useEffect
// useRef
// 