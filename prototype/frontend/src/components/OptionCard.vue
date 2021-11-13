<template>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-8 bg-gray-50 shadow-2xl">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
                <div class="h-48 w-full md:h-full md:w-48 rounded-full flex justify-center items-center">
                    <p class="text-2xl text-left leading-tight font-light">{{ optionTitleProp }}</p>
                </div>
            </div>
            <div class="p-5">
                <select :id="optionIdProp">
                  <option v-for="option in optionsProp" :key="option" :value="option"> {{ option }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OptionCard',
  props: {
    optionsProp: Array,
    optionIdProp: String,
    optionTitleProp: String
  },
  mounted: function() {
    this.OnMount()
  },
  methods: {
    OnMount: function() {
      console.log('OnMount Option Card View')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
