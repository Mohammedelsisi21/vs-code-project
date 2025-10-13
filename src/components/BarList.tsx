import { useDispatch, useSelector } from 'react-redux'
import type { IFile } from '../interfaces'
import CloseTab from '../SVG/CloseTab'
import FileExteanionsIcon from './FileExteanionsIcon'
import { setActiveTab, setClikedFile } from '../redux/features/tree/fileTreeSlice'
import type { RootState } from '../redux/store'

interface IPorps  {
    file: IFile
}
const BarList = ({ file } : IPorps) => {
  const {activeTab} = useSelector((store:RootState) => store.fileTree)
  const dispatch = useDispatch()
  const onClick = () => {
    const {id,name, content} = file
    dispatch(setClikedFile({fileName: name, fileContent: content}))
    dispatch(setActiveTab(id))
  }
  
  return (<>
      <li className={`border-t-2 ${file.id === activeTab ? "border-t-[#ccc] bg-[#2e2e2e75]" : "border-transparent"}`} onClick={onClick}>
        <div className='flex cursor-pointer hover:bg-[#64646473] items-center justify-center w-fit p-2 rounded-md'>
          <FileExteanionsIcon fileName={file.name}/>
          <span className='ml-1'>{file.name}</span>
          <span className='cursor-pointer hover:bg-[#64646473] rounded-md p-1'>
            <CloseTab />
          </span>
        </div>
    </li>
  </>)
}

export default BarList