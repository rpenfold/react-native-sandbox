> This is a work in progress. Expect frequent breaking changes until the library reaches a stable `v1.0.0` version.

Provides a sandbox environment for component development with minor configuration requirements.

## Motivation

Storybook is a game-changer for helping to produce, iterate on, and document high-quality and robust UI components. However, support for Storybook in React Native seems to trail behind and the development experience leaves much to be desired. Additionally, many of the powerful plugins in the Storybook ecosystem aren't compatible with React Native development.

`react-native-sandbox` was built as a lightweight alternative and purpose-built for React Native. It doesn't require any dev servers or environment setup. Just write your sandboxes, render the `SandboxRoot`, and you're all set. It's also built to feel like a React tool using React Hooks and simple props for configuring most plugins.

## Intallation

Open a terminal in your project's folder and run

```shell
npm install react-native-sandbox
```

## Usage

First, create a component that will be used in the sandbox. This is what will display in the frame when the sandbox is opened.

```typescript
import { useText } from 'react-native-sandbox';

export function ButtonSandbox() {
  return <Button text={text} />;
}
```

Then, create a sandbox group configuration. You can group multiple sandbox components together. This is useful for representing the same components in multiple ways, such as different usage patterns, variations of the same component, etc.; or it can also be useful for colocating similar categories of components together.

```typescript
export default {
  name: 'Button',
  components: {
    ButtonSandbox,
    'Variations': ButtonVariations
  },
};
```

Lastly, add a `SandboxRoot` and connect the sandboxes.

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
  return <SandboxRoot components={[Buttons]} />;
}
```

## Auto-loader

Rather than having to manually wire up all of the sandboxes it is highly recommended to use the auto-loader. To do so first, add the following script to the `package.json`:

```json
{
  "scripts": {
    "sandbox": "sandbox-loader -o ./sandboxFiles.ts",
  },
}
```

Use the `-o` or `--output` option to specify the file to output. This is the file that will be imported in the `SandboxRoot`.

Next use the naming convention `*.sandbox.(js|jsx|tsx)` for modules containing sandboxes. These files need to have a default export that is a configuration for the sandbox group. See Usage above for more details.

Now, run the script `npm run sandbox`. Upon completion you will notice that all files matching the prescribed pattern will not be imported into the output file and re-exported.

Finally, import that file and provide it to the `SandboxRoot`:

```typescript
import sandboxes from './sandboxFiles';

// ...

function App() {
  return <SandboxRoot components={sandboxes} />;
}
```

Now, whenever a new sandbox file is added, just run `npm run sandbox` again and it will automatically be loaded in.

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

## Plugins

`react-native-sandbox` uses a plugin to add additional functionality. They can be downloaded from NPM or custom-built for advanced scenarios. More documentation to come on how to build custom plugins.

Here are a few with first-party support on NPM:

- `@react-native-sandbox/backdrop`
- `@react-native-sandbox/controls`
- `@react-native-sandbox/docs`
- `@react-native-sandbox/grid`

To enable a plugin simply import it into the root file, and add it via the `plugins` prop into `SandboxRoot`.

```typescript
import SandboxRoot from 'react-native-sandbox';
import MyPlugin from 'my-plugin';

function App() {
  return <SandboxRoot components={sandboxes} plugins={[MyPlugin]} />;
}
```

## Migrating from 0.1.17

Prior to v0.1.17 controls were part of the core library. In an effort to provide extensibility and scalable controls have been pulled into a separate plugin library `@react-native-sandbox/controls`. Please see that package for more information about configuring the plugin.

## Contributions

Contributions are absolutely welcome! More details will hopefully come soon around how to get into building and extending the tool. At the moment, I am the sole developer of the project and work on it in my free time. Most of my work is intended to support my professional needs. If there is a feature that would benefit your workflows, feel free to reach out.
