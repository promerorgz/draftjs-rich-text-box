import React from 'react'
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor'
import { PreviewEditor } from '../styles';
import { Typography } from '@material-ui/core';

const Preview = ({ editorState }) => {

    const content = editorState ? EditorState.createWithContent(editorState.getCurrentContent()) : EditorState.createEmpty();

    return (
        <>
            <Typography variant="overline" color="primary" align="center">Live Preview</Typography>
            <PreviewEditor>
                <Editor readOnly editorState={content} onChange={() => { }} />
            </PreviewEditor>
        </>
    )
}

export default Preview
