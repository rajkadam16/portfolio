"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
    const ref = useRef<THREE.Points>(null);

    // Increased particle count for richer effect
    const particlesCount = 3000;
    const positions = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return positions;
    }, []);

    // Enhanced animation with mouse interaction
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.03;
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;

            // Mouse interaction
            const mouseX = state.mouse.x * 0.5;
            const mouseY = state.mouse.y * 0.5;
            ref.current.rotation.x += mouseY * 0.05;
            ref.current.rotation.y += mouseX * 0.05;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#8b5cf6"
                size={0.012}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function FloatingShapes() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
            groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Floating cubes with different colors */}
            <mesh position={[2, 1, -2]}>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="#8b5cf6" wireframe emissive="#8b5cf6" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[-2, -1, -1]}>
                <octahedronGeometry args={[0.4]} />
                <meshStandardMaterial color="#10b981" wireframe emissive="#10b981" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[0, 2, -3]}>
                <torusGeometry args={[0.3, 0.1, 16, 100]} />
                <meshStandardMaterial color="#8b5cf6" wireframe emissive="#8b5cf6" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[-3, 0, -2]}>
                <tetrahedronGeometry args={[0.4]} />
                <meshStandardMaterial color="#10b981" wireframe emissive="#10b981" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[3, -2, -1]}>
                <icosahedronGeometry args={[0.3]} />
                <meshStandardMaterial color="#8b5cf6" wireframe emissive="#8b5cf6" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
}

export function ParticleBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
                <ParticleField />
                <FloatingShapes />
            </Canvas>
        </div>
    );
}
