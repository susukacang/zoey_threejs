import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGL1Renderer();

const controls = new OrbitControls( camera, renderer.domElement );
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const material2 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry, material2 );
// cube2.geometry.color= 0xff0000;

scene.add( cube, cube2 );

cube2.position.set(2,0,0);

camera.position.z = 4;
camera.position.x = -1;
camera.position.y = -2;

controls.update();

function animate() {
  requestAnimationFrame( animate );
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();
