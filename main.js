import * as THREE from 'three';
import { Vector3 } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OBB } from 'three/addons/math/OBB.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGL1Renderer();

const controls = new OrbitControls( camera, renderer.domElement );
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const size = new THREE.Vector3(1,1,1);
const geometry = new THREE.BoxGeometry(size.x,size.y,size.z);
geometry.userData.obb = new OBB();
geometry.userData.obb.halfSize.copy(size).multiplyScalar(0.5);

const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
// const material2 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

// setup OBB on geometry level
const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry, material );
cube.userData.obb = new OBB();
cube2.userData.obb = new OBB();

cube.userData.vx = 0.01;
cube2.material.color.setHex(0x00ff00);

scene.add( cube, cube2 );

cube2.position.set(0,0,0);

camera.position.z = 4;
camera.position.x = -1;
camera.position.y = -2;

controls.update();

function animate() {
  requestAnimationFrame( animate );
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  if(Math.abs(cube.position.x) > 2) {
    cube.userData.vx = -cube.userData.vx;
  }

  cube.position.x += cube.userData.vx;

  cube.updateMatrix();
  cube.updateMatrixWorld();

  cube2.updateMatrix();
  cube2.updateMatrixWorld();

  // update OBB
  cube.userData.obb.copy(cube.geometry.userData.obb)
  cube.userData.obb.applyMatrix4(cube.matrixWorld);

  cube2.userData.obb.copy(cube2.geometry.userData.obb)
  cube2.userData.obb.applyMatrix4(cube2.matrixWorld);

  if(cube.userData.obb.intersectsOBB(cube2.userData.obb) == true) {
    cube.material.color.setHex(0xff0000);
    cube2.material.color.setHex(0xff0000);
  } else {
    cube.material.color.setHex(0x00ff00);
    cube2.material.color.setHex(0x00ff00);
  }
  
  controls.update();
  renderer.render(scene, camera);
}

animate();
