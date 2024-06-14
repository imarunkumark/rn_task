import {StyleSheet} from 'react-native';

export const CARTICON = require('../src/icons/cart.png');

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  languageRow: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-evenly',
  },
  button: {flex: 0.4},
  buttonSelected: {backgroundColor: '#4B87F3'},
  headtxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 0.8,
  },
  cart: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
  cart_icon: {width: 30, height: 30, tintColor: 'white'},
  animatedCountContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#f00',
    padding: 5,
    borderRadius: 50,
  },
  animatedCount: {
    color: '#fff',
    fontSize: 12,
  },
  lngTxt: {
    color: 'black',
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
  header: {
    flex: 0.08,
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  body: {
    flex: 0.92,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listingView: {},
  imgStyle: {
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#EDF0EF',
  },
  listContainer:{
    borderBottomWidth: 1,
    borderColor: '#EDF0EF',
    paddingVertical: 10,
  },
  titleTxt:{
    fontSize: 16,
    color: 'black',
    marginTop: 15,
    fontWeight: 'bold',
  },
  priceContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  priceRow:{flexDirection: 'row', alignItems: 'center', flex: 0.35},
  currTxt:{fontSize: 12, color: 'black', marginRight: 5},
  price_min_txt:{fontSize: 16, color: 'black', marginRight: 5},
  cmpr_txt:{
    fontSize: 14,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'black',
    marginRight: 5,
  },
  offer_sec:{
    flex: 0.65,
    alignItems: 'flex-end',
  },
  per_parent:{
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: 'red',
  },
  per_txt:{
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  add_cart_view:{marginHorizontal: 20, marginVertical: 10},
  cart_txt:{
    fontSize: 16,
    color: 'black',
    borderRadius: 20,
    borderWidth: 1,
    textAlign: 'center',
    paddingVertical: 10,
  },
  flat_style:{marginBottom: 20}
});
