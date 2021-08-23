<template>
  <div class="product-container">
    <div class="top-buttons">
      <i @click="toggle" v-if="isLiked" class="fas fa-heart heart"></i>
      <i @click="toggle" v-if="!isLiked" class="far fa-heart heart"></i>
      <i class="fas fa-cart-plus"></i>
    </div>
    <img src="../../assets/vector.png" width="350" class="product-image">
    <star-rating class="product-rating" star-size="20" :show-rating="false" read-only="true" :rating="2" ></star-rating>
    <p class="product-title">{{title}}</p>
  </div>
</template>

<script>
import {ref} from 'vue'
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  props: ["image", "title"],
  setup(props) {
    const isLiked = ref(false)
    const toggle = ()=>{
      isLiked.value = !isLiked.value
    }

    return {
      isLiked ,
      toggle
    }
  },
  
};
</script>

<style scoped>
.product-container {
  transition: 1s;
  border: 1px solid #05668D;
  border-radius: 10px;
  margin: 10px;
}

.product-container:hover {
  box-shadow: 0 14px 18px 0 rgba(5, 102, 141, 0.2),
    0 16px 20px 0 rgba(5, 102, 141, 0.19);
}

.top-buttons{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}

.top-buttons i{
  font-size: 20px;
}

.product-image{
  border-radius: 10px;
  margin-bottom: 20px;
}

.product-title{
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}

.product-rating{
  margin-left: 35%;
  margin-bottom: 20px;
}

.heart{
  color: red;
  cursor: pointer;
}
</style>