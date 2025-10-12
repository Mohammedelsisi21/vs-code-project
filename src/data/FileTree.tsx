import type { IFile } from "../interfaces";


export const FileTree: IFile = {
    name: "VS_Code_Clone",
    isFolder: true,
    children: [
        {
            name: "node_modules",
            isFolder: true
        },
        {
            name: "index.html",
            isFolder: false
        }
    ]
}