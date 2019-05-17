import React, { useState } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, RichUtils } from 'draft-js';
import { Typography, IconButton } from '@material-ui/core';
import { toolbarControls } from './utils/Controls';
import Preview from './Preview';
import { StyledRichEditor, RichToolbar } from '../styles'




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
      <Typography variant="headline" color="primary">Enter text here:</Typography>
      <StyledRichEditor>
        <RichToolbar>
          {toolbarControls.map((control, i) => (
            <IconButton key={i} onClick={() => handleStyle(control.value)}>
              <control.icon />
            </IconButton>
          ))}
        </RichToolbar>
        <Editor editorState={editorState} onChange={handleChange} />
      </StyledRichEditor>
      <Preview editorState={editorState} />
    </>
  )
}

export default RichEditor
