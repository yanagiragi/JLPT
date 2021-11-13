<template>
  <div class="block">
    <!-- <h1>{{ msg }}</h1> -->
    <Card :wordProp="word" :indexProp="index" v-for="(word, index) in wordList" :key="word.text" />
    <div class="m-8">
      <button class="bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-2 px-4 border border-transparent hover:border-blue-500 rounded">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Main',
  data: function() {
    return {
      "wordList":  [
        {  
          "rank": "N3",
          "text": "とんでもない",
          "example": [
            "とんでもない要求をする"
          ],
          "meaning": [
            "不合理",
            "意想不到"
          ],
          "mistake": null,
          "candidates": [
            "とんでもない",
            "とんでもない2",
            "とんでもない3"
          ]
        },
        {
          "rank": "N3",
          "text": " <rb>細</rb> <rp>( </rp><rt> ほそ </rt><rp> )</rp> <rb>長</rb> <rp>( </rp><rt> なが </rt><rp> )</rp> い   ",
          "example": [
            "細長い顔をしている"
          ],
          "meaning": [
            "細長"
          ],
          "mistake": null,
          "candidates": [
            "とんでもない",
            "とんでもない2",
            "とんでもない3"
          ]
        }
      ]
    }
  },
  components: {
    Card
  },
  props: {
    msg: String
  },
  mounted: function() {
    this.hi()
  },
  methods: {
    hi: function() {
      console.log('hi')
      return 'hi'
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
