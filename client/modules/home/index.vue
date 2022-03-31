<template>
  <div class="wrapper">
    <h1>MOBAVIS</h1>
    <div class="Overview">
      <b> Overview </b>
    </div>
    <<<<<<< HEAD

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
      =======
      <h1>欢迎支持:</h1>
      <img
        src="../../assets/image/afb.jpg"
        alt="empty image"
      >
      <img
        src="../../assets/image/weixin.png"
        alt="empty image"
      >
      <button @click="addItem">
        添加数据
      </button>
      <button @click="scrollFun">
        scrollto
      </button>
      <div class="container">
        <virtual-list
          ref="virtualList"
          class="list-dynamic scroll-touch"
          :data-key="'id'"
          :data-sources="items"
          :direction="'vertical'"
          :estimate-size="80"
          :keeps="5"
          :item-class="'list-item-dynamic'"
        >
          <template #="{source}">
            <div class="item-inner">
              <div class="head">
                <span># {{ source.index }}</span>
                <span>{{ source.name }}</span>
              </div>
              <div class="desc">
                {{ source.desc }}
              </div>
            </div>
          </template>
        </virtual-list>


        <!-- <VirtualList
        ref="virtualList"
        class="h-screen overflow-y-auto w-full scroll-touch no-scrollbar"
        :data-key="'_id'"
        :data-sources="postItems"
        :direction="'vertical'"
        :estimate-size="556"
        :item-class="'singlePostCard mx-5 mb-4'"
        :keeps="5"
        @scroll="scrollNearBy">
          <template #="{source}">
          ...
          </template>
        </VirtualList> -->
        >>>>>>> ad55625 (feat: modify by virtual list test)
      </div>
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