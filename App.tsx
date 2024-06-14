/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  Image,
  LayoutAnimation,
  UIManager,
  Platform,
  StatusBar,
  FlatList,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {homeStyles, CARTICON} from './src/Home_Style';
import {setLanguage, getLanguage} from './src/storeConfig';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [langSelected, setLangSelected] = useState(1); // 1 - Engish 2 - Arabic
  const [cartCount, setCartCount] = useState(0); // 1 - Engish 2 - Arabic

  const [products, setProducts] = useState([]); // 1 - Engish 2 - Arabic

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [langSelected]);

  const getData = () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        },
      };
      let language = langSelected == 1 ? 'en' : 'ar';
      fetch(
        'https://shopifyapptst1.bma.ae/react-native-exercise/?lang=' + language,
        options,
      )
        .then(response => response.json())
        .then(data => {
          setProducts(data.data.products);
          setCartCount(0);
        })
        .catch(error => console.error(error));
    } catch (error) {}
  };
  const percent = (string: any) => {
    const comaarray = string.split(',');
    const stringArray = comaarray[0].split(' ');
    return stringArray[1];
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const changeLan = (langSelected: any) => {
    setLangSelected(langSelected);
  };

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={homeStyles.listContainer}
        key={index}>
        <Image
          style={homeStyles.imgStyle}
          source={{
            uri: item?.images[1],
          }}
        />
        <Text
          style={homeStyles.titleTxt}>
          {item.title}
        </Text>
        <View
          style={homeStyles.priceContainer}>
          <View
            style={homeStyles.priceRow}>
            <Text style={homeStyles.currTxt}>
              {item.currency}
            </Text>
            <Text style={homeStyles.price_min_txt}>
              {item.price_min}
            </Text>
            <Text
              style={homeStyles.cmpr_txt}>
              {item?.compare_at_price_min}
            </Text>
          </View>
          <View
            style={homeStyles.offer_sec}>
            <View
              style={homeStyles.per_parent}>
              <Text
                style={homeStyles.per_txt}>
                {percent(item['offer-message'])}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            addToCart();
          }}
          style={homeStyles.add_cart_view}>
          <Text
            style={homeStyles.cart_txt}>
            {'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={homeStyles.container}>
        <View style={homeStyles.header}>
          <Text style={homeStyles.headtxt}>{'REDTAG.'}</Text>
          <View style={homeStyles.cart}>
            <Image source={CARTICON} style={homeStyles.cart_icon} />
            <View style={homeStyles.animatedCountContainer}>
              <Text style={homeStyles.animatedCount}>{cartCount}</Text>
            </View>
          </View>
        </View>
        <View style={homeStyles.body}>
          <View style={homeStyles.languageRow}>
            <TouchableOpacity
              onPress={() => changeLan(1)}
              style={[
                homeStyles.button,
                langSelected == 1 ? homeStyles.buttonSelected : {},
              ]}>
              <Text style={homeStyles.lngTxt}>{'English'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeLan(2)}
              style={[
                homeStyles.button,
                langSelected == 2 ? homeStyles.buttonSelected : {},
              ]}>
              <Text style={homeStyles.lngTxt}>{'Arabic'}</Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyles.listingView}>
            <FlatList
              data={products}
              style={homeStyles.flat_style}
              keyExtractor={(item, index) => String(index)}
              renderItem={_renderItem}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
