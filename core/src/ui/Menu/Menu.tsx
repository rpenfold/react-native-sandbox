import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import { useTheme } from '../theme';
import MenuItem from './MenuItem';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  search: {
    borderRadius: 4,
    borderWidth: 1,
    padding: 6,
  },
  logoContainer: {
    marginBottom: 16,
  },
});

function Menu(props) {
  const {activeComponent, components, onPress, logo} = props;
  const [searchText, setSearchText] = useState('');
  const search = searchText.toLowerCase();
  const { colors } = useTheme();

  const searchResults = components.filter(
    (component) =>
      component.name.toLowerCase().includes(search) ||
      Object.keys(component.components)
        .join(' ')
        .toLowerCase()
        .includes(search),
  );

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <View style={[styles.header, { backgroundColor: colors.surface, borderColor: colors.divider }]}>
        <SafeAreaView />
        {logo && <View style={styles.logoContainer}>{logo}</View>}
        <TextInput
          value={searchText}
          onChange={({nativeEvent}) => {
            setSearchText(nativeEvent.text);
          }}
          style={[styles.search, { backgroundColor: colors.background, borderColor: colors.divider, color: colors.text }]}
          placeholder="Search..."
        />
      </View>
      <ScrollView>
        {searchResults.map((component) => {
          if (!component) {
            return null;
          }
          const {name, components: _components} = component;

          const resultComponents = Object.keys(_components)
            .filter((x) => x.toLowerCase().includes(search))
            .reduce(
              (prev, curr) => ({
                ...prev,
                [curr]: _components[curr],
              }),
              {},
            );

          return (
            <MenuItem
              key={name}
              title={name}
              onPress={onPress}
              subItems={resultComponents}
              activeComponent={activeComponent}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Menu;
