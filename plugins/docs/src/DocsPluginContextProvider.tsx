import React from 'react';
import DocsPluginContext from './DocsPluginContext';
import Document from './components/Document';
import useSandbox from 'react-native-sandbox/src/useSandbox';

function DocsPluginContextProvider(props) {
  const {children} = props;
  const { activeComponent, registerComponentPanel } = useSandbox();
  const [document, setDocument] = React.useState<string | null>(null);

  const loadDocument = React.useCallback((doc: string) => {
    setDocument(doc);
  }, [activeComponent]);

  React.useEffect(() => {
    if (document && document.trim() !== '') {
      registerComponentPanel({ id: 'docs', title: 'Docs', component: Document });
    }
  }, [document, activeComponent]);

  return (
    <DocsPluginContext.Provider
      value={{
        loadDocument,
        document
      }}>
      {children}
    </DocsPluginContext.Provider>
  );
}

export default DocsPluginContextProvider;
