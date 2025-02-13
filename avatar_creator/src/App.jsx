import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas
        camera={{
          position: [4, 5, 6],
        }}
      >
        <color attach="background" args={["#333333"]} />
        <OrbitControls />
        <mesh>
          <meshNormalMaterial />
          <boxGeometry args={[2, 2, 2]} />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
