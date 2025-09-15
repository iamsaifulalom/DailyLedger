# DailyLedger

**DailyLedger** is a simple React Native app built with **Expo**, **NativeWind**, and **ReactNativeReusables**. It helps institutes track financial activities such as daily collections, customer balances, and institute balances with a simple admin interface and visual charts.

---

## 🛠 Features

- **Admin Status** – Single admin access to manage the institute’s finances.
- **Basic Financial Tracking** – Track total money under people and daily collections.
- **Automatic Updates** – Customer balance decreases and institute balance increases automatically when collections are made.
- **Picture Upload** – Add photos for customers or receipts.
- **Simple Line Chart** – Visualize daily or weekly collections in a simple line chart.

---

## 💻 Tech Stack

- **React Native (Expo)** – For building cross-platform mobile apps.
- **NativeWind** – For styling using Tailwind CSS.
- **ReactNativeReusables** – For reusable components across the app.
- **React Navigation** – For seamless navigation between screens.
- **AsyncStorage / Local Database** – To persist financial data locally (or replace with backend in future).

---

## ⚡ Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/DailyLedger.git
   cd DailyLedger
   npm install
   npm run dev
   ```

## 📝 Usage

1. Open the app and log in as the admin.
2. Add customers and their initial balances.
3. Record daily collections.
4. The app automatically updates customer balances and institute total.
5. View the line chart to see collection trends over time.

## 📂 Folder Structure (Example)

```bash
DailyLedger/
├─ assets/          # Images, icons
├─ components/      # Reusable UI components
├─ screens/         # App screens (Home, Customers, Collection, Chart)
├─ navigation/      # Navigation setup
├─ utils/           # Helper functions
├─ App.js           # Main app entry
└─ package.json
```

## 🎯 Future Improvements

- Multi-admin / multi-institute support.
- Export to PDF or Excel reports.
- Push notifications for daily collections.
- Backend integration for cloud storage and synchronization.
