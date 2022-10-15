import React from 'react';

export interface DocsPluginContextData {
    document: string | null;
    clearDocument(): void;
    loadDocument(doc: string): void;
}

const DocsPluginContext = React.createContext<DocsPluginContextData>({
    document: null,
    clearDocument: () => console.warn('docs plugin not ready'),
    loadDocument: () => console.warn('docs plugin not ready'),
  });
  
  export default DocsPluginContext;
