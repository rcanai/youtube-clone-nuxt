<template>
  <div>
    <input
      type="text"
      :value="props.modelValue"
      @input="updateValue($event)"
      @change="$emit('change', $event)"
    >
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
