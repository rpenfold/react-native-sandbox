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
| Info | useInfo | A info block to display useful information |
| Number | useNumber | A number input |
| Object | useObject | A text input control for JSON objects |
| Select | useSelect | A value selector |
| Text | useText | A text input |

## Theming

Themes allow for control over the styling of the sandbox tool. Out of the box there is a default (light) and a dark theme.

```typescript
import SandboxRoot, { DefaultTheme, DarkTheme } from 'react-native-sandbox';

// ...

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors
    background: 'gray',
  }
}

function App() {
  return <SandboxRoot components={components} theme={theme} />;
}

```

Currently, the only supported editable theme properties are `colors`.

| Property | Description | Default | Dark |
|---|---|---|---|
| `text` | Default color for text | black | #eee |
| `background` | Default color for background | white | #222 |
| `surface` | Default background color for surfaces | #eee | #111 |
| `disabled` | Color for disabled text | #555 | #777 |
| `divider` | Color for dividers | #ccc | #555 |
| `info` | Color for informational items | #3498db | #3498db |
| `warning` | Color for warning items | #f1c40f | #f1c40f |
| `error` | Color for error items | #e74c3c | #e74c3c |
| `success` | Color for success items | #2ecc71 | #2ecc71 |
