import React from 'react'
import createLinkPlugin from 'draft-js-anchor-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import { IconButton } from '@material-ui/core';
import FormatBold from '@material-ui/icons/FormatBold';
import FormatItalic from '@material-ui/icons/FormatItalic';
import FormatUnderlined from '@material-ui/icons/FormatUnderlined';


const BoldButton = <IconButton><FormatBold/></IconButton>
const ItalicButton = <IconButton><FormatItalic/></IconButton>
const UnderlineButton = <IconButton><FormatUnderlined/></IconButton>


const linkPlugin = createLinkPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin({
    structure: [
        BoldButton,
        ItalicButton,
        UnderlineButton,
        linkPlugin.LinkButton
    ]
});


export const TheToolbar = () =>{
    const { InlineToolbar } = inlineToolbarPlugin;

    return(
        <InlineToolbar>
            {
                externalProps => (
                    <>
                        <BoldButton {...externalProps} />
                        <ItalicButton {...externalProps} />
                        <UnderlineButton {...externalProps} />
                    </>
                )
            }
        </InlineToolbar>
    )
}


export const plugins = [
    linkPlugin,
    inlineToolbarPlugin
];