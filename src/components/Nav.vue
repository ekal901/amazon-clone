<template>
  <div id="nav">
    <div class="nav__overlay--wrap">
      <div class="nav__popup">
        <div class="nav__close" @click="closeNav"><font-awesome-icon :icon="['fa', 'times']"/></div>
        <div class="nav__list--top">
          <font-awesome-icon :icon="['far', 'user']" size="lg" color="#000" />
          <a>Hello, Sign in</a>
        </div>
        <div class="nav__list">
            <ul>
              <li>Home</li>
              <li>Account</li>
              <li>Orders</li>
              <li>Buy Again</li>
              <li>Lists</li>
              <li>Your Browsing History</li>
              <li>Your Recommendations</li>
              <li>Customer Service</li>
            </ul>
            <ul>
              <div class="nav__list--title"><b>Explore</b></div>
              <div class="nav__list--subtitle">TOP DEPARTMENTS</div>
              <li>Home</li>
              <li>Health & Household</li>
              <li>Books</li>
              <li>PC</li>
              <li class="nav__list--more"><div>See All Departments</div><div><font-awesome-icon :icon="['fa', 'chevron-right']"/></div></li>
            </ul>
            <ul>
              <div class="nav__list--title"><b>Settings</b></div>
              <li><font-awesome-icon class="mr-10" :icon="['fa', 'globe']"/>English</li>
              <li><font-awesome-icon class="mr-10" :icon="['fab', 'canadian-maple-leaf']"/>Canada</li>
              <li>Sign In</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="nav__top">
      <div class="nav__left">
        <a class="bar" @click="showNav"
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
      <input type="text" placeholder="Search Amazon" />
      <button type="button">
        <font-awesome-icon :icon="['fa', 'search']" size="2x" />
      </button>
    </div>
    <div class="nav__menu">
      <router-link :to="{path: '/about'}">Best Sellers</router-link>
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
export default {
  methods: {
    showNav: function () {
      document.getElementsByClassName('nav__overlay--wrap')[0].style.display =
        'block'
      document.getElementsByTagName('body')[0].style.position = 'fixed';
    },
    closeNav: function() {
      document.getElementsByClassName('nav__overlay--wrap')[0].style.display =
        'none'
    }
  },
}
</script>

<style lang="scss">
#nav {
  .nav__overlay--wrap {
    display: none;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
    .nav__popup {
      .nav__close {
        top: 20px;
        position: absolute;
        color: #fff;
        padding: 10px;
        right: 20px;
        z-index: 3;
        font-size: 25px;
      }
      background-color: #fff;
      min-width: 265px;
      max-width: calc(100vw - 50px);
      width: 80vw;
      height: 100%;
      color: #000;
      overflow-y: scroll;

      .nav__list--top {
        background-color: #fff;
        padding: 20px 0 5px;
        border-bottom: 1px solid #d5dbdb;
        svg {
          margin: 0 10px;
        }
      }
      .nav__list {
        ul {
          padding-top: 7px;
          padding-bottom: 7px;
          border-bottom: 5px solid #d5dbdb;
          li {
            padding: 15px 20px 15px 20px;
          }
          .nav__list--more {
            display: flex;
            justify-content: space-between;
          }
          
          .nav__list--title {
            padding: 15px 20px 15px 20px;
            font-size: 16px;
          }
          .nav__list--subtitle {
            padding: 15px 20px 15px 20px;
            font-size: 12px;
            color: #747474;
          }
        }
      }
      a {
        color: #000;
        font-size: 18px;
        font-weight: bold;
        vertical-align: sub;
      }
    }
  }

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
      margin: 0 0 20px 15px;
      padding-right: 3px;
      font-size: 14px;
    }
  }
}
</style>
