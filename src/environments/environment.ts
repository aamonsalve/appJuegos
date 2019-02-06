// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  googleWebClientId: "892587821776-usa11rep3msufgfhdkpraeup52bnq3md.apps.googleusercontent.com",
  currentLanguages: ['es', 'en'],
  defaultLanguage: "es",
  firebaseConfig: {
    apiKey: "AIzaSyC-xTJdqhaJC3JRcheWrTgrOHsnWmp7sP0",
    authDomain: "appjuegos-ca1c1.firebaseapp.com",
    databaseURL: "https://appjuegos-ca1c1.firebaseio.com",
    projectId: "appjuegos-ca1c1",
    storageBucket: "appjuegos-ca1c1.appspot.com",
    messagingSenderId: "892587821776",
    steamColection:"steam",
    ps4Colection:"ps4",
    xboxColection:"xbox"
  }, 

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
