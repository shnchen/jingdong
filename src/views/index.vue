<template>
  <div class="index">
    <cube-slide ref="slide" :data="items">
      <cube-slide-item v-for="(item, index) in items" :key="index">
        <a :href="item.url">
          <img :src="item.image" />
        </a>
      </cube-slide-item>
    </cube-slide>
    <cube-slide ref="slide-classified" :data="items"  :auto-play="false" class="classified">
      <cube-slide-item v-for="(items, index) in classifiedlist" :key="index">
        <ul class="classified-ul">
          <li v-for="(item,child_index) in items" :key="child_index">
            <a :href="item.url">
              <img :src="item.image" />
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      items: [],
      classifiedlist: []
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    async getBanner() {
      let result = await this.$http.get("/api/banner");
      if (result.status === 0) {
        this.items = result.indexData.imgList;
        this.classifiedlist = result.indexData.classified;
      }
    },
  }
};
</script>

<style lang='less'>
	.classified{
		ul.classified-ul{
				display: flex;
				flex-wrap: wrap;
			li{
				width: 20%;
				justify-content: center;
				a{
					img{
						width:35px;
						height: 35px;
						border-radius: 50%;
						padding: 5px 0;
					}
					p{
						font-size: 14px
					}
				}
			}
		}
	}
</style>