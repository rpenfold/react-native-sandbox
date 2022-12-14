import React from 'react';
import DocsPluginContext from './DocsPluginContext';

function useDoc(content: string) {
    const context = React.useContext(DocsPluginContext);

    React.useEffect(() => {
        context.loadDocument(content);

        return (() => {
            context.clearDocument();
        });
    }, [content]);
}

export default useDoc;
