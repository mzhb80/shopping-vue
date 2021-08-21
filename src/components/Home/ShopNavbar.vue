<template>
  <nav class="navbar navbar-expand-lg navbar-light has-shadow sticky-top">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="" class="nav-link">Mohammad Zarif /</a>
        </li>
        
        <li class="nav-item">
          <a href="" class="nav-link">
            <i class="fas fa-shopping-basket"></i>
            <span class="badge badge-pill my-badge">0</span>
          </a>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#"
            >پشتیبانی </a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">تخفیفات</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
          >
            محصولات
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
            <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
            <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            href="#"
            >خانه <span class="sr-only">(current)</span></a
          >
        </li>
      </ul>
    </div>

    <a class="navbar-brand ml-2" href="#">Shop</a>
  </nav>
</template>

<script>
export default {
  name: "ShopNav",
};
</script>

<style scoped>
.has-shadow {
  box-shadow: 5px 10px 6px #02c39a;
  background: white;
}

.dropdown:hover>.dropdown-menu {
  display: block;
}

.dropdown-menu:hover{
  display: block;
}

.my-badge{
  background-color: #028090;
  margin-top: -10px;
  color: white;
}
</style>