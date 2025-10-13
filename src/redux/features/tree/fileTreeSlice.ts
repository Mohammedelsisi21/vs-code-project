import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../../interfaces";


interface ICliked {
    fileName: string,
    fileContent: string
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
        }
    }
})

export const {setOpenedFile} = fileTreeSlice.actions

export default fileTreeSlice.reducer