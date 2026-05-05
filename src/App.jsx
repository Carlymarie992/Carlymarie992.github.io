import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import Scene from './components/Scene'
import Overlay from './components/Overlay'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#1a0a1a' }}>
      <Overlay />
      <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
        <ScrollControls pages={4} damping={0.1}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </div>
  )
}