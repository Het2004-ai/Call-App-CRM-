# Contact Sync App - Troubleshooting & Implementation Log

This document records the major issues faced during the development of the Contact Sync React Native application and outlines the specific solutions implemented to fix them.


## 2. Missing Core NPM Dependencies
**Issue:**  
Metro Bundler failed with `Unable to resolve "date-fns" from "src\utils\helpers.js"`. Upon inspecting `package.json` and project files, it was identified that `date-fns` and `react-native-chart-kit` (used in `AnalyticsScreen.js`) were being imported but were never actually installed into `node_modules`.
**Implementation:**  
Ran `npm install date-fns react-native-chart-kit` to fetch and embed the missing libraries correctly into the project dependencies.

## 3. React Navigation Crash (Nested NavigationContainers)
**Issue:**  
The app froze and printed the error: `Looks like you have nested a 'NavigationContainer' inside another`. Additionally, a `Require cycle` warning was reported between `ContactsScreen -> ContactCard`.
Upon investigation, `src/components/ContactCard.js` had been maliciously/accidentally overwritten with the exact same code as `AppNavigator.js`. Thus, whenever the Contacts list rendered a card, it generated a new duplicate Tab Navigator stack instead of a UI component.
**Implementation:**  
Wholly rewrote and restored `ContactCard.js` to correctly be a functional UI component (`<TouchableOpacity>`) matching the standard `contact` props it receives (displaying name, avatar initials, phone number, and sync status).

## 4. Call Logs & Analytics Showing "Fake" or "Mock" Static Data
**Issue:**  
The user noticed the Analytics and Call Logs displayed static, random data (like 'John Doe') instead of their phone's actual call history. This happened because pure `Expo Go` applications are heavily sandboxed and lack the foundational OS permissions to query hardware call logs.
**Implementation:**  
1. **Interim Fix:** We intercepted the `generateMockCallLogs` function so that it read from the user's *actual* synced `Contacts` list to simulate realistic traffic.
2. **Permanent Native Upgrade:** We transformed the code to query the deep OS directly. We installed the third-party native plugin `react-native-call-log`, added the `READ_CALL_LOG` permission to `app.json`, and implemented Android Permissions querying (`PermissionsAndroid.request`) into the `CallLogContext.js` pipeline.

## 5. Gradle SDK Location Error (Native Build Failure)
**Issue:**  
When migrating the project to a custom native build via `npx expo run:android` (needed to support `react-native-call-log`), the Gradle task failed immediately with exit code 1. The root cause nested in the logs was: `SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable`.
**Implementation:**  
Created and linked a standard Windows Android properties file inside the auto-generated Android manifest tracking root: `android/local.properties`. We specifically injected the pointer `sdk.dir=C\:\\Users\\Hari\\AppData\\Local\\Android\\Sdk` so Android Studio Gradle compilation scripts could bind to the local platform tools.

## 6. Duplicate Android Permissions in Configuration
**Issue:**  
During the configuration of native properties in `app.json`, an accidental duplication of OS permissions occurred (e.g., `"READ_CALL_LOG"` and `"READ_CONTACTS"` were listed twice in the array). While this might not strictly crash the bundler, it can cause unpredictable Android Manifest merging errors (`merger failed with multiple errors`) during advanced native Gradle builds.
**Implementation:**  
Identified and sanitized the `"permissions"` array inside the `"android"` block of `app.json`, deleting overlapping keys to maintain a clean manifest merge.

## 7. Expo CLI Path Error (Wrong Working Directory)
**Issue:**  
A terminal command error occurred when building the native project: `ConfigError: The expected package.json path: C:\Users\Hari\contact-sync-app\android\package.json does not exist`. This happened because `npx expo run:android` was accidentally executed while deep inside the `android/` subfolder, rather than at the project root.
**Implementation:**  
Navigated back to the main project root directory via `cd ..` and ran `npx expo run:android` again, enabling the Expo CLI to accurately detect `package.json` and initialize the proper Gradle build scripts.
