import type { IFile } from "../interfaces";



export const doseFileOpend = (arr : IFile[], id: string) => {
    return arr.some((file) => file.id == id)
}