import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../../interfaces";


interface ICliked {
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
            state.clickedFile.fileName = actions.payload.fileName
            state.clickedFile.fileContent = actions.payload.fileContent
        }
    }
})

export const { setOpenedFile , setClikedFile } = fileTreeSlice.actions

export default fileTreeSlice.reducer