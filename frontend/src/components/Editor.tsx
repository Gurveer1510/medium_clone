import ReactQuill from "react-quill";
import { useEffect, useRef } from "react";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
    
        value: string,
        onChange: (value: string) => void,
        theme : string,
        style:string
    
}

function Editor({value, onChange, theme, style} : EditorProps) {
  

    const inputRef = useRef<ReactQuill>(null);
    useEffect(() => {
        // Focus the input field when the component mounts
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);
    
  return (
    <div className={`flex flex-col`}>
      <div className=
      {`p-1 mx-8 mt-10 border h-full border-gray-300 shadow-lg rounded-lg1 ${style}`}>
        <ReactQuill
        ref={inputRef}
          className={`border h-full focus`}
          theme={theme}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Editor;
