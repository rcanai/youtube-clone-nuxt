<template>
  <div>
    <form @submit.prevent="submit">
      <div>
        <InputText v-model="form.name" />
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
import InputText from '@/components/atoms/InputText.vue'
import GeneralButton from '@/components/atoms/GeneralButton.vue'

defineComponent({
  InputText,
  GeneralButton
})

const submit = () => {
  console.log('submit')
}

const form = ref({ name: '' })

</script>
