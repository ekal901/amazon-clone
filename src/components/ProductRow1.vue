<template>
  <div>
    <div class="product__wrap mb-5">
      <div class="product__title">Deal of the Day</div>
      <div>
        <div class="product__img"><ImgSeq /></div>
        <a class="product__name--div">
          Up to <span class="product__discount--rate">32</span>% off on
          <span class="product__name">KYVOL humidifier</span>
        </a>
        <div class="product__price--div">
          <span class="product__price">$27.19</span>&emsp;
          <span class="product__price--discount"
            >List
            <span><del>$39.99</del></span>
            (<span>32</span>off)</span
          >
        </div>
        <div class="product__exp">Ends in 18:40</div>
        <div><a class="line-height-bottom" href="">See all deals</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgSeq from '../components/images/ImgSeq'

export default {
  components: {
    ImgSeq,
  },
}
</script>

<style lang="scss">
.product__wrap {
  padding: 10px 15px 0 15px;
  background-color: #fff;
  color: #000;
  .product__title {
    margin-bottom: 15px;
    line-height: 25px;
    font-size: 20px;
    color: #000;
  }
  .product__img {
    width: 150px;
    margin: 0 auto;
  }
  .product__price--div {
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 14px;
    .product__price--discount {
      color: #767676;
    }
  }
  .product__name--div {
    color: #767676;
  }
}
.img__rec {
  padding: 0;
}
.img__row2 {
  display: flex;
}
.img__row3 {
  display: flex;
}
</style>