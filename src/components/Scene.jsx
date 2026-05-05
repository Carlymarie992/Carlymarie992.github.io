import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Stars, Float, Text } from '@react-three/drei'
import * as THREE from 'three'
import { projects } from '../data/projects'

export default function Scene() {
  const scroll = useScroll()
  const group = useRef()

  useFrame((state) => {
    // The "Rollercoaster" logic: move the camera as you scroll
    const offset = scroll.offset
    group.current.position.y = offset * 25
  })

  return (
    <group ref={group}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      
      {projects.map((p, i) => (
        <Float key={i} position={[0, -i * 10, 0]} speed={2}>
          {/* The Glass Prism (Eggplant/Lavender) */}
          <mesh>
            <boxGeometry args={[2.5, 3.5, 0.2]} />
            <meshStandardMaterial color="#311131" transparent opacity={0.8} metalness={1} roughness={0} />
            <Text position={[0, 0, 0.2]} fontSize={0.2} color="#b088e0" maxWidth={2} textAlign="center">
              {p.title}
            </Text>
          </mesh>
          
          {/* The Burnt Gold Achievement Frame */}
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(2.5, 3.5, 0.2)]} />
            <lineBasicMaterial color="#b8860b" />
          </lineSegments>
        </Float>
      ))}
    </group>
  )
}