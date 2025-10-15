import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../../interfaces";


interface ICliked {
    activeTab: string | null
    fileName: string,
    fileContent: string | undefined
}

interface IInitialState {
    openFile: IFile[],
    clickedFile: ICliked
    addIdRemoveTab: string | null
}

const initialState: IInitialState = {
    openFile: [],
    clickedFile: {
        activeTab: null,
        fileName: "",
        fileContent: ""
    },
    addIdRemoveTab: null
}

const fileTreeSlice = createSlice({
    name: "fileTree",
    initialState,
    reducers: {
        setOpenedFile: (state, actions : PayloadAction<IFile[]>) => {
            state.openFile = actions.payload
        },
        setClikedFile: (state, actions: PayloadAction<ICliked>) =>{
            state.clickedFile = actions.payload
        },
        setAddIdTab: (state, actions: PayloadAction<string | null>) =>{
            state.addIdRemoveTab = actions.payload
        }
    }
})

export const { setOpenedFile , setClikedFile,setAddIdTab } = fileTreeSlice.actions

export default fileTreeSlice.reducer