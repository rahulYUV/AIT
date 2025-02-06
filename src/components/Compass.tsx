import { motion } from 'framer-motion';

interface CompassProps {
  heading: number;
}

export function Compass({ heading }: CompassProps) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

  return (
    <div className="relative w-48 h-48 mx-auto">
      <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full">
        {directions.map((dir, i) => {
          const angle = (i * 45);
          const rad = (angle - 90) * (Math.PI / 180);
          const x = Math.cos(rad) * 80 + 96;
          const y = Math.sin(rad) * 80 + 96;

          return (
            <div
              key={dir}
              className="absolute text-sm font-semibold text-gray-600 dark:text-gray-400"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {dir}
            </div>
          );
        })}
      </div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: heading }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-red-500" />
      </motion.div>
    </div>
  );
}