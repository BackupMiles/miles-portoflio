"use client"

import { Canvas } from "@react-three/fiber";
import { buildWavesUniform } from "../../../constants/uniforms";
import RendererInfo from "../renderer-info";
import { FRAGMENT_SHADER, VERTEX_SHADER } from "../../../constants/shaders";

const RagingSea = () => {
  const uniforms = buildWavesUniform({ 
    depthColor: "#121265" ,
    surfaceColor: "#0892b4", 
  });

  return (
    <Canvas
      className="w-full bg-black h-full"
      camera={{
        position: [0, -2, 2],
        fov: 75,
      }}
    >
      <RendererInfo uniforms={uniforms} />
      {/* <OrbitControls /> */}
      <mesh>
        <planeGeometry args={[2, 2, 512, 512]} />
        <shaderMaterial
          fragmentShader={FRAGMENT_SHADER}
          vertexShader={VERTEX_SHADER}
          uniforms={uniforms}
        />
      </mesh>
    </Canvas>
  );
};

export default RagingSea;
