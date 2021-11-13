<template>
  <div>
    <OptionCard :optionIdProp="typeText" :optionsProp="['multiple', 'assay']" :optionTitleProp="typeText" />
    <OptionCard :optionIdProp="amountText" :optionsProp="[10, 20, 30]" :optionTitleProp="amountText" />
    <div class="m-8">
      <button v-on:click="Submit" class="bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-2 px-4 border border-transparent hover:border-blue-500 rounded">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import OptionCard from '../components/OptionCard.vue'

export default {
  name: 'Home',
  components: {
    OptionCard
  },
  data: function() {
    return {
      amountText: "Amount",
      typeText: "Type"
    }
  },
  methods: {
    Submit() {
      const type = document.getElementById(this.typeText).value
      const amount = document.getElementById(this.amountText).value
      location.href = `/exam/${type}/${amount}`
    }
  }
}
</script>

<style>
</style>