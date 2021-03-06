import React from 'react';
import Editor from 'draft-js-plugins-editor';
import { RichUtils } from 'draft-js';

import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { StyledRichEditor, RichToolbar } from '../styles'

import Preview from './Preview';
import { toolbarControls } from './utils/Controls';
import { plugins } from "./plugins";


import { updateEditor } from '../store/actions';
import { connect } from 'react-redux';


const RichEditor = (props) => {

    const { editorState, updateEditor } = props;

    const handleChange = (editorState) => {
        updateEditor(editorState);
    };

    const handleStyle = (style) => {
        updateEditor(RichUtils.toggleInlineStyle(editorState, style));
    };

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
                <Editor
                    editorState={editorState}
                    onChange={handleChange}
                    placeholder="Enter some text..."
                    plugins={plugins} />
            </StyledRichEditor>
            <Divider />
            <Preview editorState={editorState} plugins={plugins} />
        </>
    );
}


const mapStateToProps = ({ editorState }) => ({ editorState });

const mapDispatchToProps = dispatch => ({
    updateEditor: (editorState) => dispatch(updateEditor(editorState))
});

export default connect(mapStateToProps, mapDispatchToProps)(RichEditor)
