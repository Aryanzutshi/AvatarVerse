import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas
        camera={{
          position: [1, 2, 3],
        }}
      >
        <color attach="background" args={["#333333"]} />
        <OrbitControls />
        <mesh>
          <meshNormalMaterial />
          <boxGeometry args={[1.5, 1.5, 1.5]} />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
