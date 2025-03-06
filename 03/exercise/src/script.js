import * as THREE from "three"

const canvas = document.querySelector('canvas.webgl')

//SCEAN
const scene = new THREE.Scene()
// Geometry
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0xff0000 , wireframe: true})
const mesh = new THREE.Mesh(geometry , material)
scene.add(mesh)

// sizes
const sizes = {
    width: 800,
    height: 600
}

// camera

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
