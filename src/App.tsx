import FileOpendBar from "./components/FileOpendBar"
import RecursiveComponent from "./components/RecursiveComponent"
import { FileTree } from "./data/FileTree"

const App = () => {
  return (
    <>
    <div className="pt-5 h-screen flex items-start">
      <div className="w-70 h-screen border-r">
        <RecursiveComponent FileTree={FileTree}/>
      </div>
      <FileOpendBar />
    </div>
</>)
}

export default App