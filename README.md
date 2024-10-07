# Bienvenue sur l'app de chasse au trésor 👋

## Démarrage

1. Récupération du repo et installation des dépendances

   git clone ce repo

   ```bash
   yarn / npm install
   ```

2. Tester l'app

D'abord sur le web
   ```bash
    npx expo start --web
   ```

Ensuite sur votre tel via l'app Expo
   ```bash
    npx expo start
   ```

## Ou créer votre propre projet expo puis ajouter des fonctionnalités + déploiement apk

1. Configurer Firebase et l’app pour recevoir un message posté sur l’app
   Créer un textarea
   Configurer Firebase "Cloud Firestore"

2. Installation image picker à partir de la camera

   ```bash
    brew install --cask google-cloud-sdk
    gcloud init
    gsutil auth tvinchent@gmail.com
    gsutil cors set cors.json gs://sn2mobile.appspot.com
    npm i firebase
    npx expo upgrade
    npm install expo-image-picker@latest firebase@latest
   ```

3. Déploiement APK

   Configurer l’app (app.json, eas.json)

   ```bash
    (sudo) npm install -g eas-cli
    eas login
    eas build:configure
    eas build --platform android --profile preview --local
    eas build --platform android --profile preview
   ```

<!-- 
In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions. -->
