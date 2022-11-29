# Rutas App


This is a mobile app built over the course of Udemy React Native - Fernando Herrera. This works as a guide on how to grant permissions to the user so they can use features of the phone like GPS, camera, etc. This example is focused on how GPS, ask the user first if they grant permission, shows the user's location through a map render, and disabled the app when the user decided not to give permission to the app. The app allows the user to grant and deny permissions when they want.
\
\
![****](/App-view.png)

In order to simulate the user moving on a route, there were some configuration that must have done.

Ios : Features/location and active the Freeway Drive \
Android: Icon of option (...) sidebar and then Location/save a new route and play it

Features:

- [React native permissions](https://www.npmjs.com/package/react-native-permissions) - grant or deny permissions
- [React native maps](https://github.com/react-native-maps/react-native-maps) - show the map interface. Google maps was used for android and apple maps for ios
- [Geolocation](https://www.npmjs.com/package/@react-native-community/geolocation) - to obtain the position of user
- [SplashScreen](https://dev.to/lloyds-digital/how-to-add-a-splash-screen-to-a-react-native-app-the-easy-way-3ego#:~:text=A%20splash%20screen%20is%20the,app%20is%20ready%20to%20launch) - implement a splash screen (check android/app/src/main/res/values/styles.xml there is another line added to make it better )

