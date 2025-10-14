import { useSelector } from "react-redux"
import FileOpendBar from "./components/FileOpendBar"
import RecursiveComponent from "./components/RecursiveComponent"
import ResizeablePanel from "./components/ResizeablePanel"
import { FileTree } from "./data/FileTree"
import type { RootState } from "./redux/store"
import HomeWelcome from "./components/HomeWelcome"

const App = () => {
  const {openFile} = useSelector((store : RootState) => store.fileTree)
  return (
    <>
    <div className="h-screen flex items-start">
      <ResizeablePanel
      maxSize={60}
      minSize={20}
      collapsedSize={20}
      showLeftPanel
      leftPanel={<div className="py-2">
        <RecursiveComponent FileTree={FileTree}/>
      </div>}
      rightPanel={openFile.length ? <FileOpendBar /> : <HomeWelcome/>}
      />
    </div>
</>)
}

export default App