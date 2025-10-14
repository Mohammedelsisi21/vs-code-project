import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs';


interface IProps {
    content: string
}
const FileSyntaxhighlighter = ({ content } : IProps) => {
    return (<>
        <SyntaxHighlighter language="javascript" style={tomorrowNightBright}
        showLineNumbers
        customStyle={{
            width: "100%",
            height: "calc(100vh - 46px)",
            background: "transparent"
        }}>
            {String(content)}
        </SyntaxHighlighter>
</>)
}

export default FileSyntaxhighlighter