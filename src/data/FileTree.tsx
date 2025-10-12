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
                        name: "react.tsx",
                        isFolder: false,
                    },{
                        name: "react.js",
                        isFolder: false,
                    },
                    {
                        name: "react.jsx",
                        isFolder: false,
                    }
                ]}
            ]
        },
        {
            name: "pulbic",
            isFolder: true,
            children: [
                {
                    name: "index.html",
                    isFolder: false
                }
            ]
        },
        {
            name: "src",
            isFolder: true,
            children: [
                {
                    name: "components",
                    isFolder: true,
                    children: [
                        {
                            name: "Button.tsx",
                            isFolder: false
                        }
                    ]
                }
            ]
        }
    ]
}