// import { EventRegister } from 'react-native-event-listeners'
// EventRegister.addEventListener("changeTheme", (data) => {
//   console.log(data);
// });


export var colors = {
  theme: 'blue',
  themeSecondary: '#0081FF',
  statusBarLight: '#FDF9F2',
  lightBackground: '#f5f5f5',
  lightText: '#666666',
  white: '#FFFFFF',
  black: '#000000',
  lightBlack: '#333333',
  grey: '#D9D9D9',
  dividerColor: '#DADADA',
  dividerColor2: '#C7C7C7',
  green: '#4CC26C',
  greyLight: '#E9E9E9',
  errorColor: '#FF0000',
  textRed: "#DA2828",
  placeholderColor: '#cccccc',
}




export const updateTheme = (theme) => {
  colors = theme
}


