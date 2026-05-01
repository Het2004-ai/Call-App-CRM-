# 📱 Contact Sync App (Botmen CRM)

[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://www.android.com/)

A professional-grade React Native application designed for seamless contact management, real-time call log synchronization, and advanced communication analytics. Built with Expo and integrated with native Android modules, this app serves as a lightweight CRM for users who need to track their interactions and optimize their workflow.

---

## 🚀 Key Features

- **🔄 Contact Synchronization**: Real-time syncing with your device's contact list using `expo-contacts`.
- **📞 Call Log Tracking**: Deep integration with Android system logs to monitor incoming, outgoing, and missed calls.
- **🔢 Smart Dialer**: An intuitive, built-in keypad for quick calling without leaving the app.
- **📊 Advanced Analytics**: Visual insights into call frequency, contact activity, and interaction patterns using `react-native-chart-kit`.
- **📱 Modern UI/UX**: A sleek, card-based design with smooth transitions and interactive components.
- **🔔 Real-time Notifications**: Alerts for sync status and system events to keep you informed.

---

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Navigation**: [React Navigation (Stack & Bottom Tabs)](https://reactnavigation.org/)
- **State Management**: React Context API
- **Native Modules**: 
  - `react-native-call-log` (Android Native API)
  - `expo-contacts`
- **Styling**: Vanilla JavaScript StyleSheets with a custom theme engine.
- **Visualization**: `react-native-chart-kit` for data-driven insights.

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18+)
- Expo CLI
- Android Studio (for native builds)
- Java SDK (JDK 17 recommended)

### Step-by-Step Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/contact-sync-app.git
   cd contact-sync-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Android SDK**
   Create a `local.properties` file in the `android/` directory:
   ```properties
   sdk.dir=C\:\\Users\\YourUsername\\AppData\\Local\\Android\\Sdk
   ```

4. **Run the Application**
   - For **Expo Go** (Limited Features - No Native Call Logs):
     ```bash
     npm run start
     ```
   - For **Android Native** (Full Features):
     ```bash
     npm run android
     ```

---

## 📂 Project Structure

```text
contact-sync-app/
├── android/            # Native Android project files
├── assets/             # Images, icons, and fonts
├── src/
│   ├── components/     # Reusable UI components (Dialer, Cards)
│   ├── context/        # Global state (CallLogContext, ContactContext)
│   ├── navigation/     # App routing logic
│   ├── screens/        # Main UI views (Home, Analytics, CallLogs)
│   ├── services/       # API and system logic (SyncService)
│   ├── theme/          # Global styles and color palettes
│   └── utils/          # Helper functions and formatters
├── App.js              # Entry point
└── app.json            # Expo configuration
```

---

## 🔧 Troubleshooting

If you encounter issues during setup, refer to the [DEVELOPMENT_LOG.md](./DEVELOPMENT_LOG.md) for detailed solutions to common problems such as:
- **Gradle Build Failures**: Ensure `ANDROID_HOME` is set correctly.
- **Navigation Crashes**: Check for nested `NavigationContainers`.
- **Missing Permissions**: Verify `READ_CALL_LOG` and `READ_CONTACTS` are enabled in `app.json`.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the app, please:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Developed by Hari - [Contact Sync App](https://github.com/your-username/contact-sync-app)*
