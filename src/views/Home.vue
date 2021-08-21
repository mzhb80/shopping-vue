<template>
  <shop-nav></shop-nav>

  <div class="container">
    <div class="row mt-4">
      <product-card
        v-for="i in 2"
        :key="i"
        class="col-lg-4 text-center"
        :image="'https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg'"
      ></product-card>
    </div>

  </div>
</template>

<script>
import ShopNavbarVue from "../components/Home/ShopNavbar.vue";
import ProductCardVue from "../components/Product/ProductCard.vue";


export default {
  name: "Home",
  components: {
    "shop-nav": ShopNavbarVue,
    "product-card": ProductCardVue,
  },
};
</script>

<style>
</style>