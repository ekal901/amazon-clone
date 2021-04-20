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
      <ImgRec />

      <div class="component__signIn mb-5">
        <div class="product__title">Sign in for the best experience</div>
        <button type="button" @click="viewSignIn"><span>Sign in</span></button>
        <div><a class="line-height-bottom" href="">Create an account</a></div>
      </div>

      <ProductRow3></ProductRow3>
      <ProductRow2></ProductRow2>
      <ProductRow2></ProductRow2>
      <ProductRow2></ProductRow2>
      <ProductRow2></ProductRow2>
      <ProductRow2></ProductRow2>
      <ImgRec />
      <ProductRow2></ProductRow2>
      <ImgRec />
      <ProductRow3></ProductRow3>
      <ImgRec />
      <ImgRec />

      <ProductRow1 />
    </div>
  </div>
</template>

<script>
import ImgRec from '../components/images/ImgRec'
import ProductRow1 from '../components/ProductRow1.vue'
import ProductRow2 from '../components/ProductRow2.vue'
import ProductRow3 from '../components/ProductRow3.vue'
export default {
  name: 'Home',
  props: {
    location: String,
  },
  components: {
    ImgRec,
    ProductRow1,
    ProductRow2,
    ProductRow3,
  },
  methods: {
    viewSignIn: function() {
      this.$router.push('/signIn');
    }
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
      font-size: 12px;
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
}
</style>