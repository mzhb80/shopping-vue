<template>
  <div class="add-to-container row">
    <div class="col-lg-4 col-md-11 text-center">
      <i class="fas fa-cart-plus add-icon"></i>
    </div>
    <div class="col-lg-8 col-md-11 text-center">
      <p class="add-title">افزودن به سبد خرید</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.add-to-container {
  width: 250px;
  /* border: 1px solid grey; */
  padding-top: 10px;
  box-shadow: 1px 5px 6px #05668D;
  margin-top: -25px;
  cursor: pointer;
}

.add-title,
.add-icon {
  color: #05668D;
}

.add-icon {
  border-right: 1px solid #05668D;
  padding-right: 10px;
  padding-top: 5px;
  font-size: 20px;
}

</style>