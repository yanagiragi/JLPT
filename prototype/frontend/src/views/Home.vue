<template>
  <div>
    <OptionCard :optionIdProp="typeText" :optionsProp="['multiple', 'assay']" :optionTitleProp="typeText" />
    <OptionCard :optionIdProp="amountText" :optionsProp="[5, 10, 20, 30]" :optionTitleProp="amountText" />
    <OptionCard :optionIdProp="filterText" :optionsProp="[-1, 5, 10, 15]" :optionTitleProp="filterText" />
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
      typeText: "Type",
      filterText: "Filter"
    }
  },
  methods: {
    Submit() {
      const type = document.getElementById(this.typeText).value
      const amount = document.getElementById(this.amountText).value
      const filter = document.getElementById(this.filterText).value
      location.href = `/exam/${type}/${amount}/${filter}`
    }
  }
}
</script>

<style>
</style>