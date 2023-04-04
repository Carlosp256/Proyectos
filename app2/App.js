import * as React from 'react';
import { View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Tab1 from './screens/Tab1';
import Tab2 from './screens/Tab2';

const renderScene = SceneMap({
  tab1: Tab1,
  tab2: Tab2,
});

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'tab1', title: 'Tab 1' },
    { key: 'tab2', title: 'Tab 2' },]);

    return (
    <View style={{ flex: 1 }}>
    <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    />
    </View>
    );
    }