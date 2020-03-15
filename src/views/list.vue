<template>
  <div class="list">
    <div class="left">
      <cube-scroll ref="scroll">
        <ul>
          <li
            v-for="(item,index) in tabList"
            :key="`li_${index}`"
            @click="clickHandbar(index)"
            :class="item.active ? 'active':''"
          >{{item.name}}</li>
        </ul>
      </cube-scroll>
    </div>
    <div class="right">
      <cube-scroll ref="scroll">
        <ul>
          <li v-for="(item,index) in rightShowList" :key="`li_${index}`">
            <a :href="'javascript:0'">
              <img :src="item.img" alt />
              <p>
                {{item.title}}
                <i class="cubeic-add" @click="addToCar($event,item)" />
              </p>
            </a>
          </li>
        </ul>
      </cube-scroll>
      <div class="ball-wraper">
        <transition @before-enter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
          <div class="ball" v-if="ball.show">
            <div class="inner">
              <i class="cubeic-add"></i>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: [],
      rightShowList: [],
      ball: {
        show: false,
        el: null
      }
    };
  },
  created() {
    this.getNavList();
  },
  methods: {
    async getNavList() {
      let result = await this.$http.get("/api/tab");
      if (result.status === 0) {
        this.tabList = result.navList;
        this.getRightShow(0);
      }
    },
    clickHandbar(index) {
      this.tabList.forEach((item, ind) => {
        if (index === ind) {
          item.active = true;
          this.getRightShow(index);
        } else {
          item.active = false;
        }
      });
    },
    async getRightShow(index) {
      let result = await this.$http.get(`/api/list-data?index=${index}`);

      if (result.status === 0) {
        this.rightShowList = result.result;
      }
    },
    addToCar(e, goodses) {
     
      this.ball.show = true;
	  this.ball.el = e.target;
	  setTimeout(() => {
		   this.$store.commit("addGoods", goodses);
	  }, 1000);
    },
    beforeEnter(el) {
      const dom = this.ball.el;
      const rect = dom.getBoundingClientRect();
      const x = rect.left - window.innerWidth * 0.7;
      const y = -(window.innerHeight - rect.top-25);
      el.style.display = "block";
      el.style.transform = `translate3d(0,${y}px,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(${x}px,0,0)`;
    },
    enter(el, done) {
      document.body.offsetTop;
      el.style.transform = "translate3d(0,0,0)";
      const inner = el.querySelector(".inner");
      inner.style.transform = "translate3d(0,0,0)";
      el.addEventListener("transitionend", done);
    },
    afterEnter(el) {
      this.ball.show = false;
      el.style.display = "none";
    }
  }
};
</script>
<style lang="less">
.list {
  display: flex;
  .left {
    width: 30%;
    height: calc(100vh - 54px);
    ul {
      li {
        height: 46px;
        line-height: 46px;
        text-align: center;
        font-size: 14px;
        color: #333;
        background-color: #f8f8f8;
      }
      .active {
        color: #e93b3d;
        background-color: #fff;
      }
    }
  }
  .right {
    width: 70%;
    height: calc(100vh - 54px);
    ul {
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      li {
        margin: 0 5px;
        img {
          width: 70px;
          height: 70px;
        }
        p {
          font-size: 12px;
          columns: #333;
          padding: 5px 0;
          text-align: center;
        }
      }
    }
  }
  .ball-wraper {
    .ball {
      position: fixed;
      left: 70%;
      bottom: 10px;
      color: red;
	  transition: all 1s cubic-bezier(0.49, 0.29, 0.75, 0.41);
	   z-index: 1000;
      .inner {
        width: 16px;
        height: 16px;
        transition: all 1s linear;
      }
    }
  }
}
</style>