import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { EditorState } from 'draft-js';

const defaultState = {
    editorState: EditorState.createEmpty()
}

const reducer = (state = defaultState, { payload, type }) => {

    if (type === 'UPDATE_EDITOR_STATE') {
        if (payload) {
            return {
                ...state,
                editorState: payload
            };
        }
    }
    return state;
}

export const store = createStore(reducer, applyMiddleware(logger));