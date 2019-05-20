import { UPDATE_EDITOR_STATE } from './constants';

export const updateEditor = (editorState) => {
    return {
        type: UPDATE_EDITOR_STATE,
        payload: editorState
    }
}