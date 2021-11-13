<template>
  <div class="block">
    <Card :wordProp="word" :indexProp="index" v-for="(word, index) in wordList" :key="word.text" />
    <div class="m-8">
      <button class="bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-2 px-4 border border-transparent hover:border-blue-500 rounded">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'Main',
  data: function() {
    return {
      "wordList":  [],
      "backendUrl": 'http://localhost:3000/pick'
    }
  },
  components: {
    Card
  },
  props: {
    msg: String
  },
  mounted: function() {
    this.OnMount()
  },
  methods: {
    OnMount: function() {
      console.log('Mount Examine View')
      this.LoadQuestion();
    },
    LoadQuestion: async function() {
      const url = new URL(location.href)
      const pathname = url.pathname
      const [type, amount, filter] = pathname.split('/').slice(2)
      console.log([type, amount, filter])
      console.log(`${this.backendUrl}/${type}/${amount}/${filter}`)
      const response = await fetch(`${this.backendUrl}/${type}/${amount}/${filter}`)
      const result = await response.json()
      console.log(result)
      this.wordList = result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
