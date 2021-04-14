<template>
  <div>
    <div class="product__wrap mb-5">
      <div class="product__title">Top Products in Camera</div>
      <div>
        <div class="img__row3"><ImgSeq /><ImgSeq /><ImgSeq /></div>
        <div class="img__row3"><ImgSeq /><ImgSeq /><ImgSeq /></div>
        <div class="img__row3"><ImgSeq /><ImgSeq /><ImgSeq /></div>
        <div><a class="line-height-bottom" href="">See more</a></div>
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
}
.product__title {
  margin-bottom: 15px;
  line-height: 25px;
  font-size: 20px;
  color: #000;
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