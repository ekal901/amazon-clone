<template>
  <div id="nav">
    <div class="nav__top">
      <div class="nav__left">
        <a class="bar"
          ><font-awesome-icon
            :icon="['fa', 'bars']"
            size="lg"
            :style="{ color: '#fff' }"
        /></a>
        <router-link to="/"
          ><a><img src="../assets/amazon_logo_w.png" alt="로고" /></a
        ></router-link>
      </div>
      <div class="nav__right">
        <a>Sign in</a>
        <div>
          <font-awesome-icon
            :icon="['fa', 'shopping-cart']"
            size="2x"
            class="cart"
          />
        </div>
      </div>
    </div>
    <div class="nav__search">
      <input type="text" />
      <button type="button">
        <font-awesome-icon :icon="['fa', 'search']" size="2x" />
      </button>
    </div>
    <div class="nav__menu">
      <a>Best Sellers</a>
      <a>Video</a>
      <a>New Release</a>
      <a>Home</a>
      <a>Books</a>
      <a>Pharmacy</a>
      <a>Livestreams</a>
      <a>Deals</a>
      <a>Gift Cards</a>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
#nav {
  display: block;
  width: 100%;
  // border-bottom: 1px solid #232f3e;
  background-color: #232f3e;
  color: #fff;
  box-sizing: border-box;

  .nav__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    .nav__left {
      display: flex;
      align-items: center;
      .bar {
        padding: 14px;
      }
      img {
        width: 80px;
      }
    }
    .nav__right {
      display: flex;
      align-items: center;
      a {
        color: #fff;
      }
      .cart {
        padding: 14px;
      }
    }
  }
  .nav__search {
    box-sizing: border-box;
    padding: 2px 10px 5px 10px;
    height: 50px;
    width: 100%;
    background: #232f3e;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    margin-bottom: 0;
    display: flex;
    position: relative;
    input[type='text'] {
      width: 100%;
      border-radius: 8px;
      padding: 0 95px 0 10px;
      height: 44px;
    }
    &:focus {
      outline: none;
    }
    button {
      position: absolute;
      width: 50px;
      height: 44px;
      right: 10px;
      top: 4px;
      bottom: 0;
      border-radius: 8px;
      background: -webkit-linear-gradient(top, #fcbb6a, #fcbb6a);
    }
  }

  .nav__menu {
    width: 100%;
    height: 45px;
    background: #232f3e;
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    box-sizing: border-box;
    padding-top: 14px;
    &::-webkit-scrollbar {
      display: none;
    }
    a {
      width: 100px;
      color: #fff;
      font-weight: bold;
      margin: 0 0 20px 15px;
      padding-right: 3px;
      font-size: 14px;
    }
  }
}
</style>
