import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SandboxRoot, { DarkTheme } from 'react-native-sandbox';
import ControlsPlugin, { useText, useDivider, useColor, useBoolean, useSelect, useNumber, useInfo } from '@react-native-sandbox/controls';
import DocsPlugin, { useDoc } from '@react-native-sandbox/docs';

const SIZES = [
  { label: 'small', value: 10 },
  { label: 'medium', value: 16 },
  { label: 'large', value: 36 },
];
const COLORS = ['red', 'green', 'blue', 'orange'];
const TYPES = ['solid', 'link', 'outlined'];

export function Button(props) {
  const { text, size, color, type, padding = 16, uppercase } = props;

  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[
        {backgroundColor: type === 'solid' ? color : 'transparent', padding, borderRadius: 10},
        type === 'outlined' && {
          borderWidth: 1,
          borderColor: color,
        }
      ]}
    >
      <Text
        style={[
          {
            textAlign: 'center',
            color: type !== 'solid' ? color : 'white',
            textTransform: uppercase ? 'uppercase' : 'none',
            fontSize: size
          },
        ]}
      >{text ?? ''}</Text>
    </TouchableOpacity>
  );
}

export function ButtonPlayground() {
  useInfo('These controls modify the behavior and appearance of the component.')
  const text = useText('Text', 'Button text');
  const uppercase = useBoolean('Text Uppercase');
  const size = useSelect('Text size', 16, SIZES);
  useDivider();
  const color = useColor('Color', 'red', COLORS);
  const type = useSelect('Type', 'solid', TYPES);
  const padding = useNumber('Padding', 16);

  return (
    <View style={{ padding: 20 }}>
      <Button
        text={text}
        uppercase={uppercase}
        size={size}
        color={color}
        type={type}
        padding={padding}
      />
    </View>
  )
}

export function ButtonVariations() {
  useDoc(`Does this work
with multiple
lines?

yup
  `)
  return (
    <View style={{padding: 16}}>
      {TYPES.map((type) => (
        <View
          key={type}
          style={{ marginBottom: 16 }}
        >
          <Text style={{ fontSize: 16, textTransform: 'capitalize' }}>{type}</Text>
          <View
            style={{ flexDirection: 'row' }}
          >
            {COLORS.map((color) => (
              <View
                key={`${type}-${color}`}
                style={{ flex: 1, padding: 8 }}
              >
                <Button
                  text="Press me"
                  color={color}
                  type={type}
                  uppercase
                />
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}

const components = [
  {
    name: 'Button',
    components: {
      ButtonPlayground,
      'Variations': ButtonVariations,
    },
  },
];

export default function App() {
  return (
    <SandboxRoot components={components} plugins={[ControlsPlugin, DocsPlugin]} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
