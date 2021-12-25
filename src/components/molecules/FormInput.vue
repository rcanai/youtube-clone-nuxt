<template>
  <div class="form-input">
    <div class="input-wrapper">
      <input
        type="text"
        class="input"
        :value="props.modelValue"
        @input="updateValue($event)"
        @change="$emit('change', $event)"
      >
      <div class="input-suffix">
        <slot name="suffix" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface EmitsType {
  (e: 'change', $event: Event): void;
  (e: 'update:modelValue', value: string): void;
}
const $emit = defineEmits<EmitsType>()

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
    default: ''
  }
})

const updateValue = ($event) => {
  $emit('update:modelValue', $event.target.value)
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/partials/index';

.form-input {
  .input-wrapper {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border: 1px solid var(--color-primary);
  }

  .input-suffix {
    border-left: 1px solid var(--color-primary);
  }
}
</style>
