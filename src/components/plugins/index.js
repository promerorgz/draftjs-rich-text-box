import createLinkifyPlugin from 'draft-js-linkify-plugin';

const linkifyPlugin = createLinkifyPlugin();

export const plugins = [
    linkifyPlugin
]