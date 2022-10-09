
Adds flexible documentation to `react-native-sandbox`.

## Installation

Requires `react-native-sandbox`. Ensure that your sandbox is configured correctly before proceeding.

Open a terminal in your project's folder and run

```shell
npm install @react-native-sandbox/docs
```

Modify your sandbox root to load the plugin:

```typescript
import DocsPlugin from '@react-native-sandbox/docs';

// ...

function Sandbox() {
    return <SandboxRoot components={comonents} plugins={[DocsPlugin]}>
}
```

## Usage

Documentation is registered to a sandbox by using the `useDoc` hook. At the moment this can only be called once per sandbox. The supported content type is text in the form of a string.

```typescript
import MyComponent from './MyComponent';
import { useDocs } from '@react-native-sandbox/docs';
import documentation from './documentation.txt';


function MyComponentSandbox() {
    // renders a panel containing the provided content
    useDocs(documentation);

    return (<MyComponent />);
}
```

Support for additional content types such as Markdown and React coming soon.
