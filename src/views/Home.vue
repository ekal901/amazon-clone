<template>
  <div>
    <div class="home__location">
      <div>
        <font-awesome-icon
          class="icon"
          :icon="['fa', 'map-marker-alt']"
          size="lg"
        />
        <span>Deliver to Republic of Korea</span>
      </div>
    </div>
    <div>
      <div class="img__rec pb-10">
        <ImgRec />
      </div>
      <div class="component__signIn pb-10">
        <div class="product__title">Sign in for the best experience</div>
        <button type="button"><span>Sign in</span></button>
        <div class="signUp"><a href="">Create an account</a></div>
      </div>
      <Product></Product>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product'
import ImgRec from '../components/images/ImgRec'
export default {
  name: 'Home',
  props: {
    location: String,
  },
  components: {
    Product,
    ImgRec,
  },
}
</script>

<style lang="scss">
.home__location {
  box-sizing: border-box;
  width: 100%;
  background-color: #37475a;
  height: 44px;
  display: d-flex;
  align-items: center;
  color: #fff;
  padding: 12px 10px 12px 13px;
  div {
    height: 100%;
    width: 100%;
    span {
      margin-left: 10px;
    }
  }
}

.component__signIn {
  background-color: #fff;
  padding: 10px 15px 0 15px;
  button {
    width: 100%;
    background: #f0c14b;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    border-style: solid;
    border-width: 0.1rem;
    border-radius: 0.3rem;
    padding: 12px 16px 12px 17px;
    span {
      line-height: 1.35;
      font-size: 16px;
    }
  }
  .a__link {
    font-size: 14px;
    padding: 12px 00px 12px 0px;
    a,
    a:link {
      color: #007185;
    }
  }
}
</style>