import { v4 as uuid } from "uuid";
import type { IFile } from "../interfaces";

export const FileTree: IFile = {
  id: uuid(),
  name: "VS_Code_Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "react.tsx",
              isFolder: false,
              content: `import React from "react";

const ReactTsx = () => {
  return <div>Hello from React TSX file</div>;
};

export default ReactTsx;`
            },
            {
              id: uuid(),
              name: "react.js",
              isFolder: false,
              content: `export default function ReactJS() {
  console.log("This is a mock React.js file inside vite build folder");
}`
            },
            {
              id: uuid(),
              name: "react.jsx",
              isFolder: false,
              content: `import React from "react";

const ReactJSX = () => <p>Hello from React JSX file</p>;

export default ReactJSX;`
            }
          ]
        }
      ]
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
          content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VS Code Clone</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
        },
        {
          id: uuid(),
          name: "robots.txt",
          isFolder: false,
          content: `User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml`
        }
      ]
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick} className="btn">{label}</button>;
};

export default Button;`
            },
            {
              id: uuid(),
              name: "Expire.tsx",
              isFolder: false,
              content: `import React from "react";

class Expire extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { component: props.children };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ component: null }), this.props.seconds * 1000);
  }

  render() {
    return this.state.component;
  }
}

export default Expire;`
            }
          ]
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
          content: `import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <h1>Welcome to VS Code Clone</h1>
      <Button label="Click Me" />
    </div>
  );
}

export default App;`
        },
        {
          id: uuid(),
          name: "main.tsx",
          isFolder: false,
          content: `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
        },
        {
          id: uuid(),
          name: "index.css",
          isFolder: false,
          content: `body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  margin: 0;
  padding: 0;
}

.btn {
  background-color: #007acc;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background-color: #005ea0;
}`
        },
        {
          id: uuid(),
          name: "utils.ts",
          isFolder: false,
          content: `export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US");
};

export const randomId = () => Math.random().toString(36).substring(2, 9);`
        },
        {
          id: uuid(),
          name: "config.json",
          isFolder: false,
          content: `{
  "name": "vs_code_clone",
  "version": "1.0.0",
  "author": "Mohamed Haribi",
  "framework": "React + Vite"
}`
        },
        {
          id: uuid(),
          name: "README.md",
          isFolder: false,
          content: `# VS Code Clone

A simple React + TypeScript project structure simulating how VS Code organizes files.

## Features
- React + Vite setup
- TypeScript support
- Organized folder structure`
        }
      ]
    }
  ]
};
