import type { IFile } from '../interfaces'
import CloseTab from '../SVG/CloseTab'
import FileExteanionsIcon from './FileExteanionsIcon'

interface IPorps  {
    file: IFile
}
const BarList = ({ file } : IPorps) => {
  return (<>
    <li className='flex cursor-pointer hover:bg-[#64646473] items-center justify-center w-fit mr-2 p-2 rounded-md'>
        <FileExteanionsIcon fileName={file.name}/>
        <span className='mx-1'>{file.name}</span>
        <CloseTab />
        </li>
  </>)
}

export default BarList