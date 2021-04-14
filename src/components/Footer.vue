<template>
  <div>
    <div class="footer__top">
      <font-awesome-icon :icon="['fa', 'sort-up']" size="lg" />
      <div>TOP OF PAGE</div>
    </div>
    <div class="footer__main">
      <div>
        <div><a>Amazon.com</a></div>
        <div><a>Your Lists</a></div>
        <div><a>Find a Gift</a></div>
        <div><a>Browsing History</a></div>
        <div><a>Returns</a></div>
        <div><a>Amazon.com</a></div>
      </div>
      <div>
        <div><a>Your Orders</a></div>
        <div><a>Gift Cards & Registry</a></div>
        <div><a>Your Account</a></div>
        <div><a>Sell products on Amazon</a></div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom--top">
        <div class="footer__lang">
          <div>
            <font-awesome-icon class="mr-10" :icon="['fa', 'globe']" /><a
              >English</a
            >
          </div>
          <div><span class="mr-10">$</span><a>USD - U.S. Dollar</a></div>
        </div>
        <div class="footer__country">
          <font-awesome-icon
            class="mr-10"
            :icon="['fab', 'canadian-maple-leaf']"
          /><a>United States</a>
        </div>
      </div>
      <div class="footer__bottom--signIn">
        <span>Already a customer?</span>&nbsp;<a href="">Sign In</a>
      </div>
      <div class="footer__bottom--corp">
        <div class="footer__bottom--terms">
          <div><a href="">Condition of Use</a></div>
          <div><a href="">Privacy Notice</a></div>
          <div><a href="">Interest-Based Ads</a></div>
        </div>
        <div class="footer__bottom--company">
          <div>© 1996-2021, Amazon.com, Inc. or its affiliates</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer__top {
  text-align: center;
  background-color: #37475a;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 12px;
}
.footer__main {
  display: flex;
  justify-content: space-around;
  padding: 25px 10px 25px 10px;
  background-color: #232f3e;
  a,
  a:visited a:hover,
  a:active {
    line-height: 40px;
    color: #fff;
    font-size: 16px;
  }
}
.footer__bottom {
  padding: 25px 10px 25px 10px;
  background-color: #0d141e;
  color: #fff;
  .footer__bottom--top {
    padding-bottom: 25px;
    .footer__lang {
      display: flex;
      justify-content: space-around;
    }
    .footer__country {
      text-align: center;
      line-height: 40px;
    }
  }
  .footer__bottom--signIn {
    text-align: center;
    font-weight: bold;
    padding: 25px 0 25px 0;
  }
  .footer__bottom--corp {
    color: #ccc;
    font-size: 12px;
    .footer__bottom--terms {
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
      line-height: 15px;
    }
    .footer__bottom--company {
      text-align: center;
    }
  }
}
</style>