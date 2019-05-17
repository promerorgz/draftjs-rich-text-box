import FormatBold from '@material-ui/icons/FormatBold'
import FormatItalic from '@material-ui/icons/FormatItalic'
import FormatUnderlined from '@material-ui/icons/FormatUnderlined'
import {
    BOLD,
    ITALIC,
    UNDERLINE
} from './constants';

export const controls = {
    bold: {
        icon: FormatBold,
        value: BOLD,
    },
    italic: {
        icon: FormatItalic,
        value: ITALIC,
    },
    underline: {
        icon: FormatUnderlined,
        value: UNDERLINE,
    }
};

export const toolbarControls = [
    controls.bold,
    controls.italic,
    controls.underline
];