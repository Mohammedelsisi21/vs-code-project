import type { IFile } from "../interfaces";


export const FileTree: IFile = {
    name: "VS_Code_Clone",
    isFolder: true,
    children: [
        {
            name: "node_modules",
            isFolder: true,
            children: [
                {
                    name: ".vite",
                    isFolder: true,
                    children: [{
                        name: "react.js",
                        isFolder: false,
                    }]
                }
            ]
        },
        {
            name: "index.html",
            isFolder: false
        }
    ]
}