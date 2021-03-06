<template>
  <div class="increment" :class="[classis]" :style="incrementSize">
    <button
      class="increment__btn minus"
      type="button"
      :disabled="isAnimating || isZero"
      @click.prevent="subtract"
    >
      <slot name="minus">-</slot>
    </button>
    <p
      class="count"
      v-if="!isTypeing"
      :class="{ before: isBefore, after: isAfter }"
      :data-before="addZero(countBefore)"
      :data-after="addZero(countAfter)"
      @click.prevent="onChange"
    >
      {{ addZero(countCurrent) }}
    </p>
    <input
      class="increment__input"
      v-else
      type="number"
      :value="count"
      @keypress="keypress"
      @keyup.enter="enterHandler"
      @keyup.esc="escHandler"
    />
    <button
      calss="increment__btn plus"
      type="button"
      :disabled="isAnimating"
      @click.prevent="add"
    >
      <slot name="plus">+</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Increment',
  props: {
    value: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 1,
    },
    styled: {
      type: String,
      default: 'light',
    },
  },
  data() {
    return {
      count: this.value,
      isBefore: false,
      isAfter: false,
      isTypeing: false,
      classis: [`increment-${this.styled}`],
    };
  },
  methods: {
    subtract() {
      this.isBefore = true;
      setTimeout(() => {
        this.count -= 1;
        this.isBefore = false;
      }, 200);
    },
    add() {
      this.isAfter = true;
      setTimeout(() => {
        this.count += 1;
        this.isAfter = false;
      }, 200);
    },
    onChange() {
      this.isTypeing = true;
    },
    keypress(e) {
      if (e.key === '+' || e.key === 'e' || e.key === '-') {
        e.preventDefault();
      }
    },
    enterHandler(e) {
      if (e.target.value <= 0) {
        this.count = 1;
      } else {
        this.count = e.target.value.trim() * 1;
      }
      this.isTypeing = false;
    },
    escHandler() {
      this.isTypeing = false;
    },
    emitHandler() {
      this.$emit('update:count', this.count);
    },
    addZero(val) {
      return val < 10 ? `0${val}` : val;
    },
  },
  computed: {
    isAnimating() {
      return this.isBefore || this.isAfter;
    },
    isZero() {
      return this.countBefore === 0;
    },
    countBefore() {
      return this.count - 1;
    },
    countAfter() {
      return this.count + 1;
    },
    countCurrent() {
      return this.count;
    },
    incrementSize() {
      return {
        '--size': `${this.size * 16}px`,
      };
    },
  },
  watch: {
    count: {
      immediate: false,
      handler() {
        this.emitHandler();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.increment {
  display: flex;
  overflow: hidden;
  position: relative;
  box-sizing: content-box;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10;
  }
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .count {
    display: block;
    text-align: center;
    cursor: pointer;
    &::before {
      display: block;
      content: attr(data-before);
    }
    &::after {
      display: block;
      content: attr(data-after);
    }
  }
  input {
    width: 100%;
    position: relative;
    z-index: 10;
    text-align: center;
    border: none;
    outline: none;
  }
  button {
    display: block;
    border: 0;
    background: none;
    margin: 0;
    padding: 0;
    outline: none;
    user-select: none;
    position: relative;
    z-index: 50;
    &:not(:disabled) {
      cursor: pointer;
    }
  }
  &-dark {
    background: #000000;
    &::before {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    &::after {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.9) 100%
      );
    }
    .count {
      color: #fff;
    }
    button {
      color: #fff;
    }
  }
  &-light {
    background: #eee;
    &::before {
      background: linear-gradient(
        180deg,
        rgba(238, 238, 238, 0.9) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    &::after {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(238, 238, 238, 0.9) 100%
      );
    }
    .count {
      color: #666;
      &::before {
        color: #999;
      }
      &::after {
        color: #999;
      }
    }
    button {
      border-radius: 50%;
      color: #999;
      background: linear-gradient(
        135deg,
        rgba(230, 230, 230, 1) 0%,
        rgba(246, 246, 246, 1) 100%
      );
      box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1),
        4px 4px 10px -8px rgba(0, 0, 0, 0.3);
      &:not(:disabled):active {
        box-shadow: inset -4px -4px 10px -8px rgba(255, 255, 255, 1),
          inset 4px 4px 10px -8px rgba(0, 0, 0, 0.3);
      }
    }
  }
  &-simple {
    border: 1px solid v(secondary);
    border-radius: 2px;
    &::before {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    &::after {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.9) 100%
      );
    }
    .count {
      color: v(secondary);
      &::before {
        color: #F4F4F5;
      }
      &::after {
        color: #F4F4F5;
      }
    }
    button {
      &:first-child {
        border-right: 3px solid #eee;
      }
      &:last-child {
        border-left: 3px solid #eee;
      }
    }
  }
}

.increment {
  width: calc(5 * var(--size));
  height: calc(1 * var(--size));
  border-radius: calc(0.2 * var(--size));
  padding: calc(0.3 * var(--size)) 0;
  &::before {
    height: calc(0.3 * var(--size));
  }
  &::after {
    height: calc(0.3 * var(--size));
  }
  .count {
    flex: 1 1 calc(5 * var(--size));
    line-height: calc(1 * var(--size));
    font-size: calc(1 * var(--size));
    transform: translateY(calc(-1 * var(--size)));
    &.before {
      transform: translateY(calc(0 * var(--size)));
      transition: transform 0.2s ease-in;
    }
    &.after {
      transform: translateY(calc(-2 * var(--size)));
      transition: transform 0.2s ease-in;
    }
  }
  input {
    flex: 1 1 calc(5 * var(--size));
    font-size: calc(0.7 * var(--size));
    margin: 0 calc(0.25 * var(--size));
    border-radius: calc(0.2 * var(--size));
  }
  button {
    height: calc(1 * var(--size));
    width: calc(1 * var(--size));
    flex: 0 0 calc(1 * var(--size));
    line-height: calc(1 * var(--size));
    font-size: calc(0.6 * var(--size));
    &:first-child {
      margin-left: calc(0.2 * var(--size));
    }
    &:last-child {
      margin-right: calc(0.2 * var(--size));
    }
  }
}
</style>
