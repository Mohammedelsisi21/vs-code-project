import { memo, useEffect, useRef } from "react"


interface IPorps {
    setShowMenu: (val: boolean) => void
    positionMenu: {
        x: number,
        y: number
    }
}
const DropMenu = ({positionMenu: {x , y},setShowMenu}:IPorps) => {

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


    
    return (
        <div ref={meuneRef}>
            <ul className="border border-gray-200 rounded-md overflow-hidden bg-white/80 text-black" style={{position:"absolute", top: y, left: x}}>
                <li className="px-3 py-1 cursor-pointer hover:bg-black/20 duration-300 border-b border-b-gray-600">Close</li>
                <li className="px-3 py-1 cursor-pointer hover:bg-black/20 duration-300">Close All</li>
            </ul>
        </div>
    )
}

export default memo(DropMenu)