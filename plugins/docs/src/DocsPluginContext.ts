import React from 'react';

export interface DocsPluginContextData {
    document: string | null;
    loadDocument(doc: string): void;
}

const DocsPluginContext = React.createContext<DocsPluginContextData>({
    document: null,
    loadDocument: () => console.warn('docs plugin not ready'),
  });
  

  export default DocsPluginContext;
