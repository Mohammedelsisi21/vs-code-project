import FileComponent from "./components/FileComponent"
import FolderComponent from "./components/FolderComponent"

const App = () => {
  return (
    <>
    <div className="space-y-0.5 m-7">
      <FileComponent fileName="index.tsx"/>
      <FolderComponent folderName="node_modules"/>
    </div>
</>)
}

export default App