import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import GUI from 'lil-gui'

// Debug UI
const gui = new GUI({ width: 300, title: 'Debug UI' })

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Debug Objects
const debugObject = {
    cubeColor: '#4dd3d5',
    sphereColor: '#ff5733',
    torusColor: '#ff33e1'
}

// Cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: debugObject.cubeColor })
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
cube.position.x = -2
scene.add(cube)

// Sphere
const sphereGeometry = new THREE.SphereGeometry(0.7, 16, 16)
const sphereMaterial = new THREE.MeshBasicMaterial({ color: debugObject.sphereColor })
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)

// Torus
const torusGeometry = new THREE.TorusGeometry(0.6, 0.2, 16, 100)
const torusMaterial = new THREE.MeshBasicMaterial({ color: debugObject.torusColor })
const torus = new THREE.Mesh(torusGeometry, torusMaterial)
torus.position.x = 2
scene.add(torus)

// Cube GUI
const cubeTweaks = gui.addFolder('Cube Controls')
cubeTweaks.add(cube.position, 'y', -3, 3, 0.01).name('Elevation')
cubeTweaks.add(cube, 'visible').name('Show Cube')
cubeTweaks.add(cubeMaterial, 'wireframe').name('Wireframe')
cubeTweaks.addColor(debugObject, 'cubeColor').onChange(() => {
    cubeMaterial.color.set(debugObject.cubeColor)
})
debugObject.spinCube = () => {
    gsap.to(cube.rotation, { y: cube.rotation.y + Math.PI * 2, duration: 1 })
}
cubeTweaks.add(debugObject, 'spinCube').name('Spin Cube')

// Sphere GUI
const sphereTweaks = gui.addFolder('Sphere Controls')
sphereTweaks.add(sphere.position, 'y', -3, 3, 0.01).name('Elevation')
sphereTweaks.add(sphere, 'visible').name('Show Sphere')
sphereTweaks.add(sphereMaterial, 'wireframe').name('Wireframe')
sphereTweaks.addColor(debugObject, 'sphereColor').onChange(() => {
    sphereMaterial.color.set(debugObject.sphereColor)
})
debugObject.spinSphere = () => {
    gsap.to(sphere.rotation, { y: sphere.rotation.y + Math.PI * 2, duration: 1 })
}
sphereTweaks.add(debugObject, 'spinSphere').name('Spin Sphere')

// Torus GUI
const torusTweaks = gui.addFolder('Torus Controls')
torusTweaks.add(torus.position, 'y', -3, 3, 0.01).name('Elevation')
torusTweaks.add(torus, 'visible').name('Show Torus')
torusTweaks.add(torusMaterial, 'wireframe').name('Wireframe')
torusTweaks.addColor(debugObject, 'torusColor').onChange(() => {
    torusMaterial.color.set(debugObject.torusColor)
})
debugObject.spinTorus = () => {
    gsap.to(torus.rotation, { y: torus.rotation.y + Math.PI * 2, duration: 1 })
}
torusTweaks.add(debugObject, 'spinTorus').name('Spin Torus')

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Resize Event
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 1, 5)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const tick = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()
