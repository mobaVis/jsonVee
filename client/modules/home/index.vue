<template>
  <div class="wrapper">
    <h1>MOBAVIS</h1>
    <div class="Overview">
      <b> Overview </b>
    </div>

    <div class="live">
      <b> Live View </b>
      <br>
      <img
        src="../../assets/image/map.png"
        width="100"
        alt="emtpy image"
      >
    </div>

    <div class="individual">
      <b> Individual View </b>
    </div>

    <div class="prediction">
      <b> Event Prediction View </b><br>
      <img
        src="../../assets/image/map.png"
        alt="empty image"
      >
    </div>
  </div>
</template>
<script src="./script.js"></script>

<style lang="less">
.Overview {
  position: absolute;
  left: 20px;
  top: 100px;
  bottom: 20px;
  width: 26%;
  border: 1px solid #999999;
  border-radius: 5px;
}

.live {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 20px;
  // bottom: 0;
  width: 43%;
  height: 60%;
  border: 1px solid #999999;
  border-radius: 5px;
}
.individual {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  // top: 0;
  bottom: 20px;
  width: 43%;
  height: 33%;
  border: 1px solid #999999;
  border-radius: 5px;
}
.prediction {
  position: absolute;
  right: 20px;
  top: 20px;
  bottom: 20px;
  width: 26%;
  border: 1px solid #999999;
  border-radius: 5px;
}

.wrapper {
  display: flex;
  flex-direction: row;
}
</style>