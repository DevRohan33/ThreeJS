import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Scene()
group.position.y =1
group.scale.y = 2
group.rotation.y= 1
scene.add(group)
const cube1 =new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0xff0000})
)
cube1.position.x = 4
group.add(cube1)
const cube2 =new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0x00ff00})
)
cube2.position.x = -1
group.add(cube2)
const cube3 =new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0x00ff})
)
cube3.position.x = 8
group.add(cube3)

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0x87CEEB })
// const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
// // mesh.position.set(0.7,-0.6,1)
// scene.add(mesh)

// console.log(mesh.position.length())

// axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// scale 
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
//mesh.scale.set(2,0.5,0.5)

// rotation 
// mesh.rotation.reorder('YXZ')
// mesh.rotation.y =Math.PI * 0.25
// mesh.rotation.x =Math.PI * 0.25

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1
scene.add(camera)

//camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)