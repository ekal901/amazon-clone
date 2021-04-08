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
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    location: String,
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
</style>