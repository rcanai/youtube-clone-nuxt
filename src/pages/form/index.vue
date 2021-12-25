<template>
  <div>
    <form @submit.prevent="submit">
      <div>
        <FormInput v-model="form.name" />
      </div>
      <div>
        <GeneralButton type="submit">
          送信
        </GeneralButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import FormInput from '~~/src/components/molecules/FormInput.vue'
import GeneralButton from '@/components/atoms/GeneralButton.vue'

defineComponent({
  FormInput,
  GeneralButton
})

const submit = () => {
  console.log('submit')
}

const form = ref({ name: '' })

</script>
