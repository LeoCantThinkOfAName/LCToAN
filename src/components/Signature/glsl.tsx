import React, { useEffect, useMemo, useRef } from "react";
import { ReactThreeFiber, useFrame } from "react-three-fiber";
import {
  Group,
  Mesh,
  ShaderLib,
  ShaderMaterial,
  UniformsUtils,
  Color,
} from "three";

import { useAssets, useTexture } from "../../hooks";
import fragment from "../../shaders/cloud.frag";
import vertex from "../../shaders/cloud.vert";

interface GLSLProps {
  size: [number, number];
  signColor: string;
}

const GLSL: React.FC<GLSLProps> = ({ size, signColor }) => {
  const [width, height] = size;
  const group = useRef<ReactThreeFiber.Object3DNode<
    Group,
    typeof Group
  > | null>(null);
  const mesh = useRef<ReactThreeFiber.Object3DNode<Mesh, typeof Mesh> | null>(
    null
  );

  const src1 = useAssets("clouds/perlin.png");
  const t1 = useTexture(src1);

  const src2 = useAssets("clouds/logo.png");
  const t2 = useTexture(src2);

  const myUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTxtShape: { value: t1 },
      uTxtCloudNoise: { value: t2 },
      uFac1: { value: 20 },
      uFac2: { value: 2.5 },
      uTimeFactor1: { value: 0.005 },
      uTimeFactor2: { value: 0.003 },
      uDisplStrenght1: { value: 0.05 },
      uDisplStrenght2: { value: 0.05 },
      uColor: { value: new Color(signColor) },
    }),
    [t1, t2, signColor]
  );

  const material = useMemo(() => {
    const mat = new ShaderMaterial({
      uniforms: {
        ...UniformsUtils.clone(ShaderLib.sprite.uniforms),
        ...myUniforms,
      },
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
    });

    return mat;
  }, [myUniforms]);

  useEffect(() => {
    if (material) {
      material.uniforms.uTxtShape.value = t1;
    }
  }, [t1, material]);

  useEffect(() => {
    if (material) {
      material.uniforms.uTxtCloudNoise.value = t2;
    }
  }, [t2, material]);

  useFrame(() => {
    if (material) {
      material.uniforms.uTime.value += 1;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={mesh} position={[0, 0, 0]} scale={[width, height, 1]}>
        <planeBufferGeometry args={[1, 1, 0, 0]} attach="geometry" />
        <primitive object={material} attach="material" />
      </mesh>
    </group>
  );
};

export default GLSL;
