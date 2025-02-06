# SwiftAir - Autonomous Drone Dashboard 🚁

A modern, real-time drone tracking dashboard built with React, TypeScript, and WebSocket integration. Experience the future of aerial logistics with SwiftAir's cutting-edge drone monitoring system.

![SwiftAir Dashboard](https://images.unsplash.com/photo-1623041997614-064bb5b95af6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJvbmVzfGVufDB8fDB8fHww)

## ✨ Key Features

### 🗺️ Real-time Tracking
- Live drone position on OpenStreetMap
- Dynamic compass with heading indicator
- Satellite connection monitoring
- Signal strength visualization

### 📊 Live Statistics
- Battery level with smart color indicators
- Altitude tracking with progress bars
- Speed monitoring in real-time
- Precise GPS coordinate tracking
- Satellite connection counter
- Signal strength meter

### 🎨 Interactive UI
- Beautiful animations with Framer Motion
- Dark/Light mode support
- Fully responsive design
- Real-time data updates
- Visual feedback for all changes

### 🧭 Smart Navigation
- Collapsible sidebar menu
- Quick access to all features
- Active state indicators
- Notification badges
- Emergency controls

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS
- **Real-time Data**: Socket.IO
- **Map Integration**: React Leaflet
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: React Circular Progressbar

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/         # UI Components
│   ├── Dashboard.tsx  # Main dashboard
│   ├── MapComponent.tsx
│   ├── Navbar.tsx
│   ├── Compass.tsx
│   └── SatelliteInfo.tsx
├── pages/             # Page Components
│   ├── Landing.tsx    # Home page
│   └── Dashboard.tsx  # Dashboard page
├── lib/              # Utilities
│   └── socket.ts     # WebSocket setup
└── App.tsx          # Main app component
```

## 🎯 Features in Detail

### Map View
- Real-time position tracking
- Custom markers with altitude info
- Smooth marker transitions
- Dark mode support

### Dashboard Stats
- Battery level with color coding
  - Green: >70%
  - Yellow: 30-70%
  - Red: <30%
- Altitude and speed gauges
- GPS coordinate display
- Heading indicator

### Satellite Monitoring
- Connected satellites counter
- Signal strength visualization
- Real-time connection status
- Quality indicators

## 🎨 UI/UX Features

- Smooth page transitions
- Interactive hover effects
- Responsive layouts
- Accessible design
- Real-time feedback
- Dark mode support

## 🔒 Security Features

- Secure WebSocket connection
- Data validation
- Error handling
- Safe state management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenStreetMap for mapping data
- React team for the amazing framework
- All contributors and supporters