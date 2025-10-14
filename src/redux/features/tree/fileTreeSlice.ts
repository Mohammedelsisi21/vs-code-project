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
}

const initialState: IInitialState = {
    openFile: [],
    clickedFile: {
        activeTab: null,
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
    }
})

export const { setOpenedFile , setClikedFile } = fileTreeSlice.actions

export default fileTreeSlice.reducer