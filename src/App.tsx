import FileOpendBar from "./components/FileOpendBar"
import RecursiveComponent from "./components/RecursiveComponent"
import ResizeablePanel from "./components/ResizeablePanel"
import { FileTree } from "./data/FileTree"

const App = () => {
  return (
    <>
    <div className="h-screen flex items-start">
      <ResizeablePanel
      minSize={20}
      collapsedSize={20}
      showLeftPanel
      leftPanel={<div className="py-2">
        <RecursiveComponent FileTree={FileTree}/>
      </div>}
      rightPanel={<FileOpendBar />}
      />
    </div>
</>)
}

export default App