<template>
  <div id="nav">
    <div class="nav__top">
      <div class="nav__left">
        <font-awesome-icon
          :icon="['fa', 'bars']"
          size="lg"
          :style="{ color: '#fff' }"
        />
        <router-link to="/"
          ><a><img src="../assets/amazon_logo_w.png" alt="로고" /></a
        ></router-link>
      </div>
      <div class="nav__right">
        <a>Sign in</a>
      </div>
    </div>
    <div class="nav__search">
      <div>
        <input type="text" />
        <button type="button">
          <font-awesome-ico :icon="['fa', 'search']" size="lg" />
        </button>
      </div>
    </div>
  </div>
</template>

<style>
#nav {
  display: block;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #232f3e;
  background-color: #232f3e;
  color: #fff;
  padding: 10px;
}

#nav .nav__top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#nav .nav__left {
  display: flex;
  align-items: center;
}

.nav__left img {
  width: 80px;
  margin-left: 10px;
}

.nav__search {
  display: block;
}
</style>
