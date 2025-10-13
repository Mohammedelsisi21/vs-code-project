import { useDispatch } from 'react-redux'
import type { IFile } from '../interfaces'
import CloseTab from '../SVG/CloseTab'
import FileExteanionsIcon from './FileExteanionsIcon'
import { setClikedFile } from '../redux/features/tree/fileTreeSlice'

interface IPorps  {
    file: IFile
}
const BarList = ({ file } : IPorps) => {

  const dispatch = useDispatch()
  const onClick = () => {
    const {name, content} = file
    dispatch(setClikedFile({fileName: name, fileContent: content}))
  }
  
  return (<>
      <li className='flex cursor-pointer hover:bg-[#64646473] items-center justify-center w-fit mr-2 p-2 rounded-md' onClick={onClick}>
        <FileExteanionsIcon fileName={file.name}/>
        <span className='mx-1'>{file.name}</span>
        <span className='cursor-pointer hover:bg-[#64646473] rounded-md p-1'>
            <CloseTab />
        </span>
    </li>
  </>)
}

export default BarList