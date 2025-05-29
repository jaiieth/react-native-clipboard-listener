# React Native Clipboard Listener - Expo Module Demo

A demonstration project showcasing how to create a native module for React Native applications using Expo Modules API. This project implements a clipboard listener that can detect clipboard changes across iOS and Android.

## 🎯 Purpose

This project serves as a practical example of:
- Creating cross-platform native modules using Expo Modules API
- Implementing platform-specific functionality (iOS Swift, Android Kotlin/Java, Web TypeScript)
- Setting up proper TypeScript definitions and module configuration
- Building a complete example app to demonstrate the module usage

## 📋 Features

- **Cross-platform clipboard monitoring**: Works on iOS and Android
- **Real-time clipboard change detection**: Get notified when clipboard content changes
- **TypeScript support**: Full type definitions included
- **Example application**: Complete demo app showing module integration

## 🏗️ Project Structure

```
clipboard-listener/
├── src/                          # TypeScript module source
│   ├── ClipboardListenerModule.ts     # Main module interface
│   ├── ClipboardListener.types.ts     # TypeScript definitions
│   └── index.ts                       # Module exports
├── ios/                          # iOS native implementation
│   ├── ClipboardListenerModule.swift  # Swift implementation
│   └── ClipboardListener.podspec      # iOS module specification
├── android/                      # Android native implementation
│   └── src/main/java/expo/modules/clipboardlistener/
├── example/                      # Demo application
│   ├── App.tsx                        # Example usage
│   ├── ios/                           # iOS example project
│   └── android/                       # Android example project
├── expo-module.config.json       # Expo module configuration
└── package.json                  # Module dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- Expo CLI
- iOS development: Xcode and iOS Simulator
- Android development: Android Studio and Android Emulator

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaiieth/react-native-clipboard-listener.git
   cd react-native-clipboard-listener
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the module**
   ```bash
   npm run build
   ```

### Running the Example

1. **Navigate to the example directory**
   ```bash
   cd example
   npm install
   ```

2. **Start the development server**
   ```bash
   npx expo start
   ```

3. **Run on your preferred platform**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Press `w` for Web browser

## 📱 Usage

### Basic Implementation

```typescript
import { ClipboardListener } from 'clipboard-listener';

// Start listening to clipboard changes
const subscription = ClipboardListener.addListener("onChange", (event) => {
  console.log('Clipboard changed:', event.value);
});

// Stop listening when done
subscription.remove();
```

### TypeScript Support

The module includes full TypeScript definitions:

```typescript
import { ChangeEventPayload } from 'clipboard-listener';

const handleClipboardChange = (event: ChangeEventPayload) => {
  // event.value is properly typed as string
  console.log('New clipboard content:', event.value);
};
```

## 🛠️ Development

### Building the Module

```bash
# Build TypeScript sources
npm run build

# Clean build artifacts
npm run clean

# Run linting
npm run lint

# Run tests
npm run test
```

### Platform-Specific Development

#### iOS Development
```bash
# Open iOS project in Xcode
npm run open:ios
```

#### Android Development
```bash
# Open Android project in Android Studio
npm run open:android
```

## 📚 Learning Resources

This project demonstrates key concepts for Expo Module development:

1. **Module Configuration**: See `expo-module.config.json` for platform setup
2. **TypeScript Integration**: Check `src/` directory for proper typing
3. **Native iOS Implementation**: Review `ios/ClipboardListenerModule.swift`
4. **Native Android Implementation**: Explore `android/src/` directory
6. **Example Integration**: Study `example/App.tsx` for usage patterns

## 🤝 Contributing

This is a demo project, but contributions are welcome! Please feel free to:
- Report issues
- Suggest improvements
- Submit pull requests
- Share your own expo-module implementations

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Earth Varis** - [GitHub](https://github.com/jaiieth)

---

*This project is created for educational purposes to demonstrate Expo Modules API capabilities. Use it as a starting point for your own native module development!*
