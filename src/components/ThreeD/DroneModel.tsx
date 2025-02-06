import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Suspense } from "react";

export default function DroneModel() {
  // ✅ Correct model path
  const model = useLoader(GLTFLoader, import.meta.env.BASE_URL + "models/drone.glb");

  return (
    <Suspense fallback={<p className="text-gray-500 text-center">🚀 Loading Drone...</p>}>
      <primitive object={model.scene} scale={1.5} />
    </Suspense>
  );
}
