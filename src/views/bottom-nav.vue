<template>
  <div class="bottom-nav">
    <transition :name="transitionName">
      <router-view class="_router" />
    </transition>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @change="changeHandler"
      class="my-tab-bar"
    ></cube-tab-bar>
    <span class="boll">{{countSum}}</span>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类",
          icon: "cubeic-tag"
        },
        {
          label: "搜索",
          icon: "cubeic-search"
        },
        {
          label: "购物车",
          icon: "cubeic-mall"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ],
      transitionName: "slider-right",
    };
  },
  computed:{
    ...mapGetters({
      countSum:'countSum',
    })
  },
  created() {
    this.changeSelectlable();
  },
  methods: {
    changeHandler(label) {
      let pages = {
        首页: "/bottom-nav/index",
        分类: "/bottom-nav/list",
        搜索: "/bottom-nav/search",
        购物车: "/bottom-nav/cart",
        我的: "/bottom-nav/mine"
      };
      this.$router.push(pages[label]);
    },
    changeSelectlable() {
      let pages = {
        "/bottom-nav/index": "首页",
        "/bottom-nav/list": "分类",
        "/bottom-nav/search": "搜索",
        "/bottom-nav/cart": "购物车",
        "/bottom-nav/mine": "我的"
      };
      this.selectedLabelDefault = pages[this.$route.path];
    }
  }
};
</script>
<style lang="less">
.bottom-nav {
  ._router {
    position: absolute;
    width: 100%;
    transition: all 0.4s ease;
  }
  .slider-left-enter-active,
  .slider-right-leave-active {
    opacity: 0;
    transform: translate(100%, 0);
  }
  .slider-left-leave-active,
  .slider-right-enter-active {
    opacity: 1;
    transform: translate(-100%, 0);
  }
  .my-tab-bar {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    .cube-tab {
      i {
        font-size: 20px;
      }
      div {
        font-size: 16px;
      }
    }
  }
  .boll{
    display: inline-block;
    width: 18px;
    height: 18px;
    position: fixed;
    right: 23%;
    bottom: 33px;
    font-size: 12px;
    border-radius: 50%;
    background-color: red;
    color: #fff;
    text-align: center;
    line-height: 18px;

  }
}
</style>