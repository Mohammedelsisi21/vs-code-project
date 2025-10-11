import FileComponent from "./components/FileComponent"

const App = () => {
  return (
    <>
    <div className="space-y-0.5">
      <FileComponent fileName="index.tsx"/>
      <FileComponent fileName="index.html"/>
    </div>
</>)
}

export default App