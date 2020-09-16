import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Provider as PaperProvider,
  Appbar,
  BottomNavigation
} from 'react-native-paper';
import styled from 'styled-components/native';
import Dashboard from './screens/Dashboard';
import Transactions from './screens/Transactions';
import Withdraw from './screens/Withdraw';
import More from './screens/More';

const CustomText = styled.Text`
  color: white;
  margin-right: 10px;
  font-size: 15px;
`;

const routes = [
  { key: 'dashboard', title: 'Home', icon: 'home-outline' },
  { key: 'transactions', title: 'Transactions', icon: 'arrow-left-right' },
  { key: 'withdraw', title: 'Withdraw', icon: 'cash-multiple' },
  { key: 'more', title: 'More', icon: 'menu' }
];

const renderScene = BottomNavigation.SceneMap({
  dashboard: Dashboard,
  transactions: Transactions,
  withdraw: Withdraw,
  more: More
});

const App = () => {
  const [index, setIndex] = React.useState(1);
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Appbar.Header style={{ justifyContent: 'space-between' }}>
        <Appbar.Action icon="message-text-outline" />
        <Appbar.Action icon="cards-heart" />
        <CustomText>Edit</CustomText>
      </Appbar.Header>
      <BottomNavigation
        shifting={false}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>
  );
};

export default App;
