import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../../interfaces";


interface ICliked {
    fileName: string,
    fileContent: string | undefined
}

interface IInitialState {
    activeTab: string | null
    openFile: IFile[],
    clickedFile: ICliked
}

const initialState: IInitialState = {
    activeTab: null,
    openFile: [],
    clickedFile: {
        fileName: "",
        fileContent: ""
    }
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
        setActiveTab: (state, actions: PayloadAction<string>) => {
            state.activeTab = actions.payload
        }
    }
})

export const { setOpenedFile , setClikedFile, setActiveTab } = fileTreeSlice.actions

export default fileTreeSlice.reducer