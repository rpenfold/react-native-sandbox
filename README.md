> This is a work in progress. Expect frequent breaking changes until the library reaches a stable `v1.0.0` version.

Provides a sandbox environment for component development with minor configuration requirements.

# Usage

First, create sandbox definitions. Use sandbox hooks to specify controls.

```typescript
import { useText } from 'react-native-sandbox';

export function ButtonPlayground() {
  const text = useText('Text', 'Button text');

  return <Button text={text} />;
}
```

Then, render the sandbox from within your app.

```typescript
import SandboxRoot from 'react-native-sandbox';

const components = [
  {
    name: 'Button',
    components: {
      ButtonPlayground,
    },
  },
];

function App() {
  return <SandboxRoot components={components} />;
}
```

## Controls

Controls are rendered in the order that the hooks are invoked in.

| Type | Hook | Description |
|---|---|---|
| Boolean | useBoolean | A switch control for boolean props  |
| Color | useColor | A color picker |
| Divider | useDivider | A divider in the component control panel |
| Label | useLabel | A label to display in component control panel |
| Number | useNumber | A number input |
| Object | useObject | A text input control for JSON objects |
| Select | useSelect | A value selector |
