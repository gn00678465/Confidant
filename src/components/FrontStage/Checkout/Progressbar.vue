<template>
  <div class="root container-xl" ref="bar">
    <ul class="progressbar">
      <li class="progressbar-indicator"
        :class="{active: current >= (i + 1), now: current === (i + 1)}"
      v-for="(step, i) in steps" :key="i" :data-count="i+1">{{ step }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Progressbar',
  props: {
    steps: {
      type: Array,
    },
    current: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    step() {
      this.$emit('update:current', this.current);
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  position: relative;
  height: 50px;
}

.progressbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  .progressbar {
    &-indicator {
      display: inline-block;
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      line-height: 1.5;
      // font-size: 9px;
      position: relative;
      &::before {
        content: attr(data-count);
        counter-increment: step;
        width: 20px;
        line-height: 20px;
        display: block;
        font-size: 10px;
        color: v(secondary);
        text-align: center;
        background: white;
        border-radius: 3px;
        margin: 0 auto 0.5rem auto;
      }
      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background: white;
        position: absolute;
        left: -50%;
        top: 9px;
        z-index: -1;
      }
      &:first-child::after {
        content: none;
      }
      &.active::before,
      &.active::after {
        background: v(success);
        color: white;
      }
      &.now {
        font-weight: bold;
      }
    }
  }
}

@media (min-width: 768px) {
  .progressbar {
    .progressbar-indicator {
      font-size: 1.1rem;
    }
  }
}

@media (min-width: 992px) {
  .root {
    height: 70px;
  }
  .progressbar{
    .progressbar-indicator {
      font-size: 1.2rem;
      &::before {
        font-size: 0.875rem;
        width: 28px;
        height: 28px;
        line-height: 28px;
      }
      &::after {
        top: 13px;
      }
    }
  }
}
</style>
