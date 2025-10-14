import { useDispatch, useSelector } from 'react-redux'
import type { IFile } from '../interfaces'
import CloseTab from '../SVG/CloseTab'
import FileExteanionsIcon from './FileExteanionsIcon'
import { setClikedFile, setOpenedFile } from '../redux/features/tree/fileTreeSlice'
import type { RootState } from '../redux/store'

interface IPorps  {
    file: IFile
}
const BarList = ({ file } : IPorps) => {
  const {clickedFile: {activeTab}, openFile} = useSelector((store:RootState) => store.fileTree)
  const dispatch = useDispatch()
  const onClick = () => {
    const {id,name, content} = file
    dispatch(setClikedFile({fileName: name, fileContent: content, activeTab: id}))
  }

  const onRemove = (idSelected: string) => {
    const filterOpenFile = openFile.filter((file) => file.id !== idSelected)
    const lastFile = filterOpenFile[filterOpenFile.length - 1]
    if(!lastFile) {
      dispatch(setOpenedFile([]))
      dispatch(setClikedFile({activeTab: null, fileContent: "", fileName: ""}))
    }
    const {id ,name, content} = lastFile
    dispatch(setOpenedFile(filterOpenFile))
    dispatch(setClikedFile({activeTab: id, fileContent: content, fileName: name}))
}

  
  return (<>
      <li className={`border-b-2 ${file.id === activeTab ? "border-t-[#ccc] bg-[#000000]" : "border-transparent"}`} onClick={onClick}>
        <div className='flex cursor-pointer hover:bg-[#00000057] items-center justify-center w-fit p-2 rounded-md'>
          <FileExteanionsIcon fileName={file.name}/>
          <span className='ml-1'>{file.name}</span>
          <span className='cursor-pointer hover:bg-[#000000] rounded-md p-.5 ml-1' onClick={(e) => {
            e.stopPropagation()
            onRemove(file.id)
          }}>
            <CloseTab />
          </span>
        </div>
    </li>
  </>)
}

export default BarList