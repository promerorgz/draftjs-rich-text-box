import React, { useState } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, RichUtils } from 'draft-js';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { toolbarControls } from './utils/Controls';
import Preview from './Preview';
import { StyledRichEditor, RichToolbar, StyledDivider } from '../styles'




const RichEditor = () => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty());


  const handleChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }

  return (
    <>
      <StyledRichEditor>
        <RichToolbar color="default">
          {toolbarControls.map((control, i) => (
            <IconButton key={i} onClick={() => handleStyle(control.value)}>
              <control.icon />
            </IconButton>
          ))}
        </RichToolbar>
        <Editor editorState={editorState} onChange={handleChange} />
      </StyledRichEditor>
      <Divider />
      <Preview editorState={editorState} />
    </>
  )
}

export default RichEditor
