<template>
  <div class="block">
    <QuestionCard :wordProp="word" :indexProp="index" v-for="(word, index) in wordList" :key="word.text" />
    <div class="m-8">
      <button class="bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-2 px-4 border border-transparent hover:border-blue-500 rounded" @click="Submit">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import QuestionCard from '../components/QuestionCard.vue'

export default {
  name: 'Main',
  data: function() {
    return {
      "wordList":  [],
      "pickUrl": 'http://localhost:3000/pick',
      "resultUrl": 'http://localhost:3000/result'
    }
  },
  components: {
    QuestionCard
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
      const response = await fetch(`${this.pickUrl}/${type}/${amount}/${filter}`)
      const result = await response.json()
      this.wordList = result
    },
    Submit: async function() {
      const url = new URL(location.href)
      const pathname = url.pathname
      const [, amount,] = pathname.split('/').slice(2)
      const answers = [...document.querySelectorAll('.questCard input[type^=radio]:checked')].map(x => x.value)
      if (answers.length != amount) {
        alert('Not All Answer are selected')
        return;
      }
      else {
        const body = this.wordList.map((x, index) => ({
          word: x,
          answer: answers[index]
        }))
        const resp = await fetch(`${this.resultUrl}`, {
          body: JSON.stringify(body),
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
        })
        const result = await resp.text()
        console.log(result)
        return result
      }
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
