import { Canvas } from '@react-three/fiber'
import './Style.css'
import { OrbitControls, } from '@react-three/drei'
import Screeen from './Screeen'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'

function App() {

  return (
    <>
    <Canvas flat camera={{ fov: 25 }}>
      <OrbitControls />
      <ambientLight />
      <Screeen />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={4.0}
          luminanceThreshold={0}
          luminanceSmoothing={0}
        />
      </EffectComposer>
      {/* <ToneMapping adaptive /> */}
    </Canvas >
    <div className='bg-gray-700 py-32'>
      <h1 className='text-6xl font-serif font-semibold text-white text-center'>Welcome to Suraj Portfolio</h1>
    </div>
    </>
  )
}

export default App