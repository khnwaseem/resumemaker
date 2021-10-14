import React,{useState,useRef,useEffect} from 'react'
import {Editor, EditorState,convertToRaw,DefaultDraftBlockRenderMap,blockRenderMap} from 'draft-js';
import Immutable from 'immutable'
import '../../assets/css/resume-data-input/summary.css'

import 'draft-js/dist/Draft.css';

const Summary = (props) => {


     const [editorState, setEditorState] = useState(EditorState.createEmpty());


      let summm = []
     let summaryValue = convertToRaw(editorState.getCurrentContent()).blocks
     summaryValue.map((va,i) => {

       console.log(va.text)
        summm.push({summary: va.text})
        // newSummary[i]["summ"] = va.text
        // console.log(newSummary)


     })

     const handleSubmit = (e) => {
       e.preventDefault()
         localStorage.setItem("summary",JSON.stringify(summm))
           props.history.push("/resumetemplate")
     }

       const editor = useRef(null);

       const focusEditor = () => {
          editor.current.focus();
        }

        let {wrapper} = DefaultDraftBlockRenderMap.get('unordered-list-item')
        const blockRenderMap = Immutable.Map({
         'unstyled': {
           element: 'li',
           wrapper
           }
       });

  const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

        useEffect(() => {
             focusEditor()
           }, []);

      return (
        <div className="resume__input__data__summary">
            <div className="resume__input__data__header">
          <h1>Summary</h1>
          <p>Write a short summary telling more about yourself, your strengths and experience. </p>
            </div>

        <div className="resume__input__summary" onClick={focusEditor}>
          <Editor
            ref={editor}
             editorState={editorState}
             onChange={editorState => setEditorState(editorState)}
                 blockRenderMap={extendedBlockRenderMap}
              />
            </div>
            <div className="resume__experience__button">
                <button className="resume__experience__button__previous">Previous</button>
                <button className="resume__experience__button__next" onClick={handleSubmit}>Next</button>
            </div>
          </div>
              )


}

export default Summary
