import * as React from 'react';
import { useState } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import './App.css';
import manatee from './components/images/manatee.jpg';
import map from './components/images/map.jpg'
import map2 from './components/images/map2.png'
import manatee2 from './components/images/manatee2.jpg';
import manatee3 from './components/images/manatee3.jpg';
import manatee4 from './components/images/manatee4.jpg';
import manatee5 from './components/images/manatee5.png';
import manatee6 from './components/images/manatee6.jpg';
import downtown from './components/images/downtown.jpg';
import old from './components/images/old.jpg';
import alligator from './components/images/alligator.jpg';
import osprey from './components/images/osprey.jpg';
import airboat from './components/images/airboat.jpg';




const name = 'Explorer';
const welcome = <h2>Welcome, {name}, to the site; gain knowledge all about The St. Johns River below:</h2>;
const welcome2 = <h3>Bonus! Count how many manatee's you can find on each of the pages.</h3>;

const pagesDefault = [
  {
    name: <h4>About The River</h4>,
    details: <h2>The St. Johns River is starts in Brevard County and meeting the Atlantic Ocean at Duval County, the St. Johns is Florida's primary commercial and recreational waterway.</h2>,
    img: <div>
      <img src={map2}  />
    </div>,
    img2: <div>
      <img src={manatee2}  />
    </div>,
    key: "1"
  },
  {
    name: <h4>Fun Fact</h4>,
    img: <div>
      <img src={downtown} />
    </div>,
    img2: < div >
  <img src={manatee3} />
    </div >,
    details: <h2>•Is the longest river in the state of
    Florida.
<br></br>
•The St. Johns is rare, it flows from
North to South!
<br></br>
• Though you may not want to drink
it, The St. Johns is predominately
fresh water!
<br></br>
  • The river is actually connected to
14 lakes and plenty of Florida’s
Springs.</h2>,
   
    
    key: "2"
  },
  {
    name: <h4>History</h4>,
    details: <h2>• Early 1500’s Spanish seamen
    first mapped the St. Johns River
    and called the river, Rio de
    Corrientes, River of Currents.
    <br></br>
      • 1890 The first bridge across the
    St. Johns River at Jacksonville
    is a train bridge
      <br></br>
      • 1962 The French established
    the first outpost on the River
    called Fort Caroline.
    The French called the river
    La Riviere du Mai, River
    of May, because they
    arrived there on May 1.
    <br></br>
      • The St. Johns River was designated an
    American Heritage River by President Clinton.
    The St. Johns is the only river in Florida
    and one of only 14 rivers in the
    entire United States to receive
    this prestigious national recognition.
    <br></br>
    • Within the past 50 years, urban areas
    in the northern and central parts
    of the state have grown considerably.
    In the upper basin, population
    increased by 700 percent
    between 1950 and 2000,
    and is expected to rise another
 1.5 million by 2020.</h2>,
    img: <div>
      <img src={old} height={400} width={600} />
    </div>,
    img2: <div>
      <img src={manatee4} height={400} width={600} />
    </div>,
    key: "3"
  },
  {
    name: <h4>Ecosystem</h4>,
    details: <h2>There are a variety of animals you can see at and around the river:<br></br>
    • Woodpecker
    <br></br>
• Scrub Jay<br></br>
• Blue Heron<br></br>
• Manatees<br></br>
<hr></hr>
But be careful!<br></br>
Dangerous animals live here too!<br></br>

• Alligators roam the river, watch out!<br></br>
• Florida Rattlesnake<br></br>
• Florida Coral Snake<br></br>
• Cotton mouth Moccasin…</h2>,
    img: <div>
      <img src={alligator}  />
    </div>,
    img2: <div>
      <img src={osprey}  />
    </div>,
    img3: <div>
      <img src={manatee5}  />
    </div>,
    key: "4"
  },
  {
    name: <h4>Game</h4>,
    details: <h4>Count the Manatees you see in the image below</h4>,
    img:
      <div>
        <img src={manatee} height={400} width={600} />
      </div>,
    key: "5"
  },
  {
    name: <h4>Explore The River</h4>,
    details: <h4>Explore The River! Various tours are offered on pontoon boats, airboats, and kayaks! Remember you can look but don't touch.
    </h4>,
    img: <div>
      <img src={airboat} />
    </div>,
    img2: <div>
      <img src={manatee6} />
    </div>,
    key: "6"
  }
]

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column'
  },

  buttonStyle: {
    flex: 1,
    padding: 25,
  },
});

function HomeScreen({ navigation }) {
  let [pages, setpages] = useState(pagesDefault)
  let renderButton = ({ item }) => (<View style={{
    flex: 1,
    flexDirection: "row", alignItems: "center"
  }}>

    <Button title="Learn more" style={styles.buttonStyle}
      onPress={() => navigation.push('Details', { item: item, items: pages })
      }></Button>
    <Text>{item.name}
    </Text>
  </View>
  )


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#b3ccff' }}>
      <Text style={{ fontSize: 30, marginBottom: 5 }}><h1>The St. Johns River</h1></Text>
      <Text style={{ marginBottom: 10 }}>{welcome}</Text>
      <Text>{welcome2}</Text>

      <div>
        <img src={map} height={200} width={200} />
      </div>
      <FlatList data={pages} renderItem={renderButton}></FlatList>
    </View>
  );
}


function DetailsScreen({ navigation, route }) {
  const { item, items } = route.params;
  const [count, setcount] = useState(0)
  let nextItemIndex = items.findIndex((curItem) => curItem == item)
  nextItemIndex = (nextItemIndex + 1) % items.length

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#b3ccff' }}>
      <Text>{item.details}</Text>
      <Text>{item.img}</Text>
      <Text>{item.img2}</Text>
      <Text>{item.img3}</Text>

      <Text>Manatees Spotted: {count}</Text>
      <Button title="Count Manatee"
        onPress={() => setcount((prevValue) => prevValue + 1)} >
      </Button>
      <Button title="Reset"
        onPress={() => setcount(0)} >
      </Button>
      <Button title="Home"
        onPress={() => navigation.navigate('Home')}>
      </Button>
      {nextItemIndex < items.length ?

        <Button title={`Suggested Next Page`}
          onPress={() => navigation.push('Details', { item: items[nextItemIndex], items: items })}>
        </Button>
        : undefined}
    </View>
  );
}

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen}
          options={({ route }) => ({ title: route.params.item.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;