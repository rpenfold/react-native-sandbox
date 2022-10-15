import React from 'react';
import { useSandbox } from 'react-native-sandbox/internal';
import DocsPluginContext from './DocsPluginContext';
import DocumentContainer from './components/DocumentContainer';

function DocsPluginContextProvider(props) {
  const {children, options} = props;
  const { activeComponent, registerComponentPanel } = useSandbox();
  const [document, setDocument] = React.useState<string | null>(null);

  const clearDocument = React.useCallback(() => setDocument(null), []);

  const loadDocument = React.useCallback((doc: string) => {
    setDocument(doc);
  }, [activeComponent]);

  React.useEffect(() => {
    if (document && document.trim() !== '') {
      registerComponentPanel({
        id: 'docs',
        title: 'Docs',
        component: () => <DocumentContainer renderer={options?.renderer} />,
      });
    }
  }, [document]);

  return (
    <DocsPluginContext.Provider
      value={{
        clearDocument,
        loadDocument,
        document
      }}>
      {children}
    </DocsPluginContext.Provider>
  );
}

export default DocsPluginContextProvider;
