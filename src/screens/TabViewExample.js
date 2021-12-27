import * as React from 'react';
import { View, useWindowDimensions,SafeAreaView,Text,StatusBar} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import AllProductsView from './AllProductsView';
import CategoryView from './CategoryView';
import { theme } from '../core/theme';

const FirstRoute = () => <CategoryView/>
const SecondRoute = () => <AllProductsView/>

export default function TabViewExample() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Category' },
      { key: 'second', title: 'Products' },
    ]);
   
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });
   
    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'yellow'}
            inactiveColor={'white'}
            style={{backgroundColor:theme.colors.primary}}
        />
    );
   
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}/>
    );
  }