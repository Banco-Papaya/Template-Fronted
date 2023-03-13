<template>
  <v-carousel show-arrows="hover">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      :lazy-src="item.src"
      cover
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/images/bitcoin-gb3250c978_1920.jpg",
        },
        {
          src: "/images/bitcoin-gd5c09e4c5_1920.jpg",
        },
        {
          src: "/images/money-g194f02e90_1920.jpg",
        },
        {
          src: "/images/sillicon-valley-bankg.png",
        },
        {
          src: "/images/OZU3WTXU4BF7FIBPXKUACIGUX4 (1).png",
        },
      ],
    };
  },
};
</script>