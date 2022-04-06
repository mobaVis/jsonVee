<template>
  <div>
    <canvas id="live_video" />
  </div>
</template>

<script>
/* eslint-disable */
// render a spinning cube
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  mounted() {
    this.render();
  },
  data() {
    return {};
  },
  methods: {
    render() {
      // scene, camera, and renderer are must for a threejs project
      // scene includes: Mesh, Group, Light, etc.
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#eee");

      // get canvas
      const canvas = document.querySelector("#live_video");
      // renderer: scene tree -> 2D image
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      //   renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // where and what to see
      const camera = new THREE.PerspectiveCamera(
        75, // fov: Number
        window.innerWidth / window.innerHeight, // aspect:Number
        0.1, // near: Number
        1000 // far: Number
      );
      camera.position.z = 4; // since the cube will be put (0,0,0)

      const geometry = new THREE.OctahedronGeometry();
      //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // simplest surface with only color
      const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load("./img/copy.jpg"),
      }); // attach texture
      //   use Phong/ Lambert to adjust more advanced materials
      const oct = new THREE.Mesh(geometry, material);
      oct.position.set(-1, -1, 1);
      scene.add(oct);

      // render LOOP
      function animate() {
        // internal func: callback in a regular basis
        requestAnimationFrame(animate);

        // rotate
        oct.rotation.y += 0.01;
        // sakura.rotation.y += 0.01;
        // if(clock) mixer.update(clock.getDelta())
        // model.rotation.y += 0.01;

        renderer.render(scene, camera);
      }
      animate();
    },
  },
};
</script>

<style scoped>
#live_video {
  position: absolute;
  width: 42%;
  height: 30%;
  left: 28%;
  top: 5%;
  z-index: 1;
}
</style>