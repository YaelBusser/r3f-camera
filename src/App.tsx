import './App.css'
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, OrthographicCamera, PerspectiveCamera} from "@react-three/drei";
import {Model as City} from "./components/models/City.tsx"
import * as THREE from "three";

function App() {
    return (
        <Canvas>
            {
                /*
                TOUTES LES CAMERAS :
                   - Controler la caméra simplement
                        <OrbitControls/>
                   - Caméra principale (qu'on voit avec nos yeux)
                        <Canvas camera={{position: []}} == PerspectiveCamera avec makeDefault
                        <PerspectiveCamera position={[3, 3, 3]} makeDefault fov={60} near={0.1} far={15}/>
                   - Caméra sans perspective (ex: jeu vidéo comme warcraft), tous les objets ont la même dimension
                        <OrthographicCamera position={[1, 1, 1]} makeDefault top={1.5} bottom={-2}
                                            right={2 * (window.innerWidth / window.innerHeight)}
                                            left={-2 * (window.innerWidth / window.innerHeight)}
                                            near={-5}
                        />
                 */
            }
            <OrbitControls/>
            <City/>
            <Environment preset={"city"}/>
        </Canvas>
    )
}

export default App
