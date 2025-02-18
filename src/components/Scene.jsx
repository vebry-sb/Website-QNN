import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function ThreeDScene() {
  return (
    <Canvas>
      {/* Pencahayaan ambient */}
      <ambientLight intensity={0.5} />
      
      {/* Sumber cahaya tambahan */}
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Membuat mesh kotak */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} /> {/* Ukuran kotak */}
        <meshStandardMaterial color="hotpink" /> {/* Material dengan warna hotpink */}
      </mesh>
      
      {/* OrbitControls untuk interaksi mouse */}
      <OrbitControls />
    </Canvas>
  );
}
