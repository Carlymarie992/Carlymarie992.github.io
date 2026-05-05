import { ScrollControls, Scroll, Stars, Float, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Scene() {
  return (
    <>
      <color attach="background" args={['#1a0a1a']} /> {/* Deep Eggplant */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#40E0D0" /> {/* Turquoise Glow */}
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <ScrollControls pages={3} damping={0.1}>
        {/* ACT 1: THE INTAKE (Chaos) */}
        <Scroll>
           <Float speed={2} rotationIntensity={1} floatIntensity={2}>
              <mesh position={[0, 0, 0]}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#b8860b" metalness={0.7} roughness={0.2} /> {/* Burnt Gold */}
              </mesh>
           </Float>
        </Scroll>

        {/* ACT 2: THE HUD (Hiring Manager Layer) */}
        <Scroll html>
          <div className="hud-container">
            <h1 style={{ color: '#b088e0', margin: '20px' }}>CARLY MARIE</h1>
            <div className="badge-gold">GPA 3.8 | DEAN'S LIST</div>
          </div>
        </Scroll>
      </ScrollControls>
    </>
  )
}