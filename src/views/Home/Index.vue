<template>
  <div class="index">
    <Jumbotron />
    <SectionSort />
    <SectionShow />
    <Carsouel class="container mb-5">
      <template #h4>人氣推薦</template>
    </Carsouel>
  </div>
</template>

<script>
import Jumbotron from 'components/FrontStage/Index/Jumbotron.vue';
import SectionShow from 'components/FrontStage/Index/SectionShow.vue';
import SectionSort from 'components/FrontStage/Index/SectionSort.vue';

export default {
  name: 'Index',
  components: {
    Jumbotron,
    SectionShow,
    SectionSort,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>

</style>
