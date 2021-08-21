<template>
  <div class="product-container">
    <img
      v-bind:src="require('../../assets/vector.png')"
      class="product-image"
      width="350"
      height="350"
    />

    <add-to-cart class="add-cart"></add-to-cart>

    <div class="product-title">
      {{title}}
    </div>
  </div>
</template>

<script>
import AddToCartButtonVue from "./AddToCartButton.vue";
export default {
  components: {
    "add-to-cart": AddToCartButtonVue,
  },
  props: ["image" , "title"],
  setup(props){
      console.log(props);
  }

};
</script>

<style scoped>

.product-container{
    transition:  1s;
    padding-bottom: 10px;
}

.product-container:hover{
    
    /* border: 1px solid black; */
    box-shadow: 0 14px 18px 0 rgba(5,102,141, 0.2), 0 16px 20px 0 rgba(5,102,141, 0.19);
    /* background: tomato; */
}

.product-title {
    font-weight: bold;
    font-size: 19px;
    margin-top: 50px;
}

.add-cart{
    position: absolute;
    left: 20%;
    background: white;
}

.product-image{
    margin-top: 10px;
}

</style>