# VS Code Clone

A **VS Code-like interface** built with **Vite + React + TypeScript + Tailwind CSS + ReduxToolkit**.
This project simulates a lightweight version of Visual Studio Code, complete with tab management and syntax highlighting.

---

## Features

- Built using **Vite** for lightning-fast performance.
- **TypeScript** for type safety and clean code structure.
- **Tailwind CSS** for responsive and modern UI styling.
- **Redux Toolkit** for managing open tabs and application state.
- **React-resizable-panels** to create a flexible and resizable layout like VS Code.
- **React-syntax-highlighter** to display file content with syntax highlighting.
- **uuid** for generating unique IDs for files, tabs, and components.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-------------|----------|
| **React + Vite** | Project setup & rendering |
| **TypeScript** | Static typing and better DX |
| **Tailwind CSS** | Styling and layout |
| **Redux Toolkit** | State management |
| **React-resizable-panels** | Resizable layout panels |
| **React-syntax-highlighter** | Syntax highlighting for code content |
| **uuid** | Generate unique IDs dynamically |
| **Context Menu** that allows you to: |
    - Close a single tab
    - Close all open tabs at once


---

## 📂 Folder Structure
VS_Code_Clone/
├── public/
│ ├── index.html
│ ├── robots.txt
├── src/
│ ├── components/
│ │ ├── Button.tsx
│ │ ├── Expire.tsx
│ ├── App.tsx
│ ├── main.tsx
│ ├── index.css
│ ├── utils.ts
│ ├── config.json
├── README.md


---

## ⚙️ Tab Management

All opened tabs are stored in **Redux state**, allowing the app to track which files are active or recently opened.
You can manage tabs directly via the **context menu**, which provides two options:
- **Close Tab:** Removes a single selected tab.
- **Close All Tabs:** Clears all open tabs instantly.

---

## 🎮 Demo

🔗 [Live Demo Here](#)
_(Replace “#” with your actual deployed link)_

---

## 🖼️ Screenshots

_Add your screenshots below this section:_

<div align="center">
  <img src="./assets/Home.png" alt="Home" width="30%" style="border-radius: 8px; margin-right: 10px;" />
  <img src="./assets/Mune.png" alt="Menu" width="30%" style="border-radius: 8px; margin-right: 10px;" />
  <img src="./assets/openFile.png" alt="Open File" width="30%" style="border-radius: 8px;" />
</div>

---

## 🧑‍💻 Author

**Mohamed Abdelrafea (Mohamed Elsisi)**
  Indie Developer | React Developer
  [LinkedIn](https://www.linkedin.com/in/mohammed-abdelrafea/)
  [GitHub](https://github.com/Mohammedelsisi21)

---

## 🏃‍♂️ Run the Project

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

