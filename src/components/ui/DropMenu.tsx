import { memo, useEffect, useRef } from "react"
import { useDispatch, useSelector} from "react-redux"
import { setClikedFile, setOpenedFile } from "../../redux/features/tree/fileTreeSlice"
import type { RootState } from "../../redux/store"


interface IPorps {
    setShowMenu: (val: boolean) => void
    positionMenu: {
        x: number,
        y: number
    }
}
const DropMenu = ({positionMenu: {x , y},setShowMenu}:IPorps) => {

    const {addIdRemoveTab, openFile} = useSelector((store: RootState) => store.fileTree)

    const dispatch = useDispatch()
    const meuneRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handelOpenMenu = (event: MouseEvent) => {
            if(meuneRef.current && !meuneRef.current.contains(event?.target as Node)) {
                setShowMenu(false)
            }
        }

        window.addEventListener("click", handelOpenMenu)

        return () => {
            window.removeEventListener("click", handelOpenMenu)
        }
    },[setShowMenu])


    const onCloseTabAll = () => {
        dispatch(setOpenedFile([]))
    }

    const onCloseTab = () => {
        const filtered = openFile.filter((file) => file.id  !== addIdRemoveTab)
        const lastFile = filtered[filtered.length - 1]
        if(!lastFile) {
            dispatch(setOpenedFile([]))
            dispatch(setClikedFile({activeTab: null, fileContent: "", fileName: ""}))
        }
        dispatch(setOpenedFile(filtered))
        const {id, name,content}= lastFile
        dispatch(setClikedFile({activeTab: id, fileContent: content, fileName: name}))
        setShowMenu(false)
    }
    return (
        <div ref={meuneRef}>
            <ul className="border border-gray-200 rounded-md overflow-hidden bg-white/80 text-black" style={{position:"absolute", top: y, left: x}}>
                <li className="px-3 py-1 cursor-pointer hover:bg-black/20 duration-300 border-b border-b-gray-600" onClick={onCloseTab}>Close</li>
                <li className="px-3 py-1 cursor-pointer hover:bg-black/20 duration-300" onClick={onCloseTabAll}>Close All</li>
            </ul>
        </div>
    )
}

export default memo(DropMenu)