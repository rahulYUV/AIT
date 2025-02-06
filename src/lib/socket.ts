import { io } from 'socket.io-client';

export interface DroneData {
  latitude: number;
  longitude: number;
  altitude: number;
  speed: number;
  battery: number;
  heading: number;
  satellites: number;
  signalStrength: number;
}

// Simulated data for demonstration
let currentLat = 18.51957;
let currentLng = 73.85535;

export function connectSocket(onData: (data: DroneData) => void) {
  // For demo purposes, we'll simulate data updates
  const interval = setInterval(() => {
    // Simulate movement
    currentLat += (Math.random() - 0.5) * 0.001;
    currentLng += (Math.random() - 0.5) * 0.001;

    const data: DroneData = {
      latitude: currentLat,
      longitude: currentLng,
      altitude: 100 + Math.random() * 50,
      speed: 30 + Math.random() * 20,
      battery: Math.max(0, Math.min(100, 80 + Math.random() * 20)),
      heading: Math.random() * 360,
      satellites: Math.floor(8 + Math.random() * 4),
      signalStrength: Math.max(0, Math.min(100, 85 + Math.random() * 15)),
    };

    onData(data);
  }, 1000);

  return () => clearInterval(interval);
}