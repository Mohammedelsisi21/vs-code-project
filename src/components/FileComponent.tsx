import FileIcon from "../SVG/FileIcon"

interface IProps {
    fileName: string
}
const FileComponent = ({fileName}: IProps) => {
    return (<>
        <div className="flex items-center mb-2">
        <span className="mr-2">
            <FileIcon />
        </span>
        <span>{fileName}</span>
      </div>
</>)
}

export default FileComponent