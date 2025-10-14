import { memo, type ReactNode } from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";


interface IProps {
    defaultLayout?: number[] | undefined;
    leftPanel: ReactNode
    rightPanel: ReactNode
    showLeftPanel: boolean
    collapsedSize: number
    minSize: number
    maxSize: number
    
}

const ResizeablePanel = ({defaultLayout = [30, 70], leftPanel, rightPanel, showLeftPanel,collapsedSize, minSize,maxSize} : IProps) => {
    const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;};

    return (<>
    <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="conditional">
        {showLeftPanel && <>
                <Panel defaultSize={defaultLayout[0]} collapsible={true} collapsedSize={collapsedSize} minSize={minSize} maxSize={maxSize}>{leftPanel}</Panel>
                <PanelResizeHandle className="border-r border-r-[#333333a8]" />
            </>}
        <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>

    </>)
}

export default memo(ResizeablePanel)