import React from 'react';
import { StoreProvider } from './store';
import Router from './navigation/Navigator';
import FlashMessage from 'react-native-flash-message';
import { AssetsLoader } from './components';
import { YellowBox, ImageRequireSource } from 'react-native';
YellowBox.ignoreWarnings(['VirtualizedLists', 'Non-serializable']);

const images: ImageRequireSource[] = [require('./assets/coinbase.png'), require('./assets/icon.png')];
const fonts: { [key: string]: number } | any = {
  // ...Icon.Ionicons.font,
  Roboto: require('native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
};

const App: React.FC<any> = () => <Router />;

const AppContainer: React.FC<any> = () => {
  return (
    <StoreProvider>
      <AssetsLoader assets={{ images, fonts }}>
        <App />
      </AssetsLoader>
      <FlashMessage position="top" />
    </StoreProvider>
  );
};

export default AppContainer;
