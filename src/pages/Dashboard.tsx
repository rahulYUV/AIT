import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapComponent } from '../components/MapComponent';
import { DashboardStats } from '../components/Dashboard';
import { Navbar } from '../components/Navbar';
import { connectSocket, DroneData } from '../lib/socket';
import { ArrowLeft } from 'lucide-react';

interface DashboardProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const initialDroneData: DroneData = {
  latitude: 18.51957,
  longitude: 73.85535,
  altitude: 0,
  speed: 0,
  battery: 100,
  heading: 0,
  satellites: 0,
  signalStrength: 0,
};

export function Dashboard({ isDark, setIsDark }: DashboardProps) {
  const [droneData, setDroneData] = useState<DroneData>(initialDroneData);
  const [hasNewData, setHasNewData] = useState(false);

  useEffect(() => {
    document.title = `SwiftAir :: ${droneData.latitude.toFixed(6)}, ${droneData.longitude.toFixed(6)}`;
  }, [droneData.latitude, droneData.longitude]);

  useEffect(() => {
    const cleanup = connectSocket((data) => {
      setDroneData(data);
      setHasNewData(true);
      setTimeout(() => setHasNewData(false), 1000);
    });

    return cleanup;
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-4 right-4 z-50"
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      <main className="ml-[240px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 h-[600px]"
          >
            <MapComponent
              latitude={droneData.latitude}
              longitude={droneData.longitude}
              altitude={droneData.altitude}
              hasNewData={hasNewData}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <DashboardStats data={droneData} hasNewData={hasNewData} />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}