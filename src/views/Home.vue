<template>
  <shop-nav></shop-nav>

  <div class="container">
    <div class="row mt-4">
      <product-card
        v-for="i in 2"
        :key="i"
        class="col-lg-4 text-center"
        title="Mohammad"
      ></product-card>
    </div>

  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import ShopNavbarVue from "../components/Home/ShopNavbar.vue";
import ProductCardVue from "../components/Product/ProductCard.vue";
import {useStore} from 'vuex'

export default {
  name: "Home",
  components: {
    "shop-nav": ShopNavbarVue,
    "product-card": ProductCardVue,
  },
  setup(props){

    const store = useStore()

    onMounted(()=>{
      store.dispatch('splitProducts')  

      console.log(store.getters);
    })
  }
};
</script>

<style>
</style>