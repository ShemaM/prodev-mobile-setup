# ProDev Mobile Setup: First App

## 📱 Project Overview

This repository contains the first mobile application built as part of the ProDev curriculum. The project focuses on initializing a React Native environment using **Expo** and the **Expo Router** template, exploring file-based routing, and understanding project scaffolding.

## 🚀 Objectives

* Initialize a modern React Native application with Expo.
* Document the scaffolding process and directory structure.
* Observe and document the effects of the `reset-project` script.

---

## 🛠 Scaffolding Process

The following steps were taken to initialize and configure the mobile application:

1. **Environment Setup**: Navigated to the project directory `prodev-mobile-setup/prodev-mobile-app-0x00`.
2. **Initialization**: Ran `npx create-expo-app@latest .` to bootstrap the application using the latest Expo Router template. This provides a pre-configured setup with TypeScript and file-based routing.
3. **UI Modification**: Modified the main entry screen in `app/(tabs)/index.tsx`. The default "Welcome!" text was updated to **"First App Created"**.
4. **Testing**: Launched the development server using `npx expo start` and verified the UI changes by scanning the QR code via **Expo Go**.

---

## 🧹 Observations: `npm run reset-project`
A critical part of the Expo Router template is the `reset-project` script. Upon running this command, the following observations were made:

* **Code Archiving**: The entire boilerplate structure (including the tabs, components, and constants) was automatically moved into a new directory named `app-example/`.
* **Fresh Start**: The main `app/` directory was cleared of the default example files and replaced with a minimal `index.tsx` and `_layout.tsx`.
* **Purpose**: This command effectively "cleans" the project, allowing me to start building a custom application from a blank slate while keeping the original template code accessible in the `app-example` folder for reference.

---

## 📂 Key File Structure

* **`app/`**: The active routing directory where new screens are developed.
* **`app-example/`**: Contains the original Expo template files (moved here after the reset).
* **`components/`**: Location for reusable UI components.
* **`constants/`**: Holds global values like `Colors.tsx` (found in `app-example/constants/Colors.tsx` after reset).
