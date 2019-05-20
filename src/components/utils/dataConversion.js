import { convertToRaw, convertFromRaw, EditorState, CompositeDecorator } from 'draft-js';
import { getLinks, editorLink } from '../plugins/links';

const decorator = new CompositeDecorator([{
    strategy: getLinks,
    component: editorLink
}]);

export const convertToJSON = (editorState) => {
    const content = editorState.getCurrentContent();
    const contentToSave = JSON.stringify(convertToRaw(content));
    return contentToSave;
}


export const convertToEditorState = (editorContent) => {
    const content = convertFromRaw(editorContent);
    const editorState = EditorState.createWithContent(content, decorator)
    return editorState;
}