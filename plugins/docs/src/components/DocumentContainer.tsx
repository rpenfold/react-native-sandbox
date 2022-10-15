import React from 'react';
import DocsPluginContext from '../DocsPluginContext';
import Document from './Document';

function DocumentContainer(props) {
    const { renderer: Component = Document } = props;
    const context = React.useContext(DocsPluginContext);

    return (
        <Component content={context.document} />
    );
}

export default DocumentContainer;
