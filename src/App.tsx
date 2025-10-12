import RecursiveComponent from "./components/RecursiveComponent"
import { FileTree } from "./data/FileTree"

const App = () => {
  return (
    <>
    <div className="my-10">
    <RecursiveComponent FileTree={FileTree}/>
</div>
</>)
}

export default App