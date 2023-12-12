import { StatusBar } from 'expo-status-bar';
import { Styles } from './theme';
import { Text, View } from 'react-native';
import { Card } from './components/card';
import { Colors } from './theme/colors';
import People from './screens/people';
import Parks from './screens/parks';
import Bikes from './screens/bikes';
import Bikes2 from './screens/bikes2';
import ParentScreen from './screens/ParentScreen';
import ChildScreen from './screens/ChildScreen';

export default function App() {
  return (
    // <View style={[Styles.container, { backgroundColor: "gray" }]}>
    //   <Text style={[Styles.textWhite, Styles.h1]}>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Card
    //     title="Hello World from App.js!"
    //     content="Lorem ipsum dolor sit amed."
    //     type="dark" />
    // </View> //title ve content attribute denir.

    //<People /> //screens içerisinde hazırladığımız ekranı main içerisinde uygulama açıldığında gösterir.

    //<Parks />
    //<Bikes2 />

    <ParentScreen title="Parent Screen Kalıtım"> 
      <Text>Hello World!!!!</Text>
      <ChildScreen />
    </ParentScreen>
  );
}