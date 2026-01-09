# Task 0: Setting Up and Testing Mobile Development Environment

## 📌 Project Objective
Mobile development requires significant computational resources. To ensure a smooth workflow without the overhead of heavy emulators, this task focuses on setting up the **Expo Framework** and **Expo Go** to bridge the gap between a Windows development environment and a physical iOS device.

## 🛠 Development Stack

* **Operating System:** Windows 11
* **IDE:** VS Code
* **Runtime:** Node.js (LTS)
* **Framework:** React Native with Expo
* **Testing Device:** Physical iPhone (via Expo Go)

---

## 🚀 Setup Process

### 1. Environment Configuration

* Verified installation of **Node.js LTS**.
* Initialized a new Expo project using `npx create-expo-app@latest`.
* Installed the local Expo CLI dependencies.

### 2. Expo Go Installation

* Downloaded the **Expo Go** app from the Apple App Store onto my iPhone.
* Ensured both the Windows laptop and the iPhone were connected to the same Wi-Fi network to allow for local discovery.

### 3. Connecting the Device

* Started the development server using:
    ```bash
    
    npx expo start
    ```
* Scanned the generated **QR Code** using the iPhone Camera app.
* Successfully bundled the JavaScript code and rendered the "Welcome!" starter template on the physical device.

---

## ⚠️ Challenges & Solutions

| Challenge | Solution |
| :--- | :--- |
| **Deprecated Warnings** | Initially tried installing `expo-cli` globally. Switched to using `npx expo` to utilize the modern versioned local CLI. |
| **iOS on Windows** | Since Windows cannot run an iOS Simulator, I utilized the **Expo Go** app to preview the app on my physical iPhone. |
| **Network Discovery** | Ensured Windows Firewall allowed connections from Node.js to prevent "Could not connect" errors on the device. |

---

## ✅ Status: COMPLETED

The development environment is fully operational. The "Welcome" screen is visible on the iPhone, and Hot Module Replacement (HMR) is confirmed to be working when editing files in VS Code.