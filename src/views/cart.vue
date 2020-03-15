<template>
  <div class="cart">
    <div class="goods" v-for="(item,index) in cartArray" :key="index">
      <span>{{item.title}}</span>
     <i class="cubeic-remove" @click="removeGoods(item)"/>
      <span>{{item.count}}</span>
      
       <i class="cubeic-add" @click="addGoods(item)"/>
    </div>
    <div class="go-buy" v-if='cartArray.length'>
      <span class="total-price">
        总价:
        <span>￥{{tootalPrice}}</span>
      </span>
      <span class="buy-button">
        去结算:
        <span>({{goodsNumber}}件)</span>
      </span>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      tootalPrice: 0,
      goodsNumber: 0
    };
  },
  computed:{
      ...mapState({
          cartArray: state=>{ return state.cartArray}
      })
  },
  methods:{
      addGoods(item){
         this.$store.commit('addGoods',item)
          
      },
      removeGoods(item){
        this.$store.commit('removeCartArray',item)
          
      }
  }
};
</script>
<style lang="less">
.cart {
  position: relative;
  .goods {
      margin: 20px 0;
  }
  .go-buy {
    text-align: right;
    font-size: 18px;
    .total-price {
        margin-right: 20px;
      span {
        color: #f2270c;
        font-size: 16px;
      }
    }
    .buy-button {
      display: inline-block;
      width: 110px;
      height: 40px;
      border-radius: 20px;
      background: #f2270c;
      color: #fff;
      font-size: 16px;
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>