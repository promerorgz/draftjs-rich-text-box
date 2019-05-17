import React from 'react'
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor'
import { PreviewEditor } from '../styles';

const Preview = ({ editorState }) => {

    const content = editorState ? EditorState.createWithContent(editorState.getCurrentContent()) : EditorState.createEmpty();

    return (
        <PreviewEditor>
            <Editor readOnly editorState={content} onChange={() => { }} />
        </PreviewEditor>
    )
}

export default Preview
