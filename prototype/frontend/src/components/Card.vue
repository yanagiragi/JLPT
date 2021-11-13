<template>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-8 bg-gray-50 shadow-2xl">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
                <div class="h-48 w-full md:h-full md:w-48 rounded-full flex justify-center items-center">
                    <p class="text-8xl text-left leading-tight font-light">{{ indexProp + 1 }}</p>
                </div>
            </div>
            <div class="p-5">
                <!--<div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    <span v-html="wordProp.text"></span>
                </div>-->
                <a :href="`https://dictionary.goo.ne.jp/srch/all/${TrimText(wordProp.text)}/m0u/`" class="block mt-2 text-3xl text-left leading-tight font-semibold hover:underline">
                    {{ TrimText(wordProp.text) }}
                    <!-- <span v-html="wordProp.text"></span> -->
                </a>
                <p v-for="candidate in wordProp.candidates" :key="candidate" class="mt-2 text-gray-500 text-left">
                    <input type="radio" :name="`group${indexProp}`" value="candidate" class="rounded text-pink-500" />
                        {{ candidate }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    wordProp: Object,
    indexProp: Number
  },
  mounted: function() {
    this.OnMount()
  },
  methods: {
    OnMount: function() {
      console.log('OnMount Card View')
    },
    TrimText: function(raw) {
        const doc = new DOMParser().parseFromString(`<element>${raw}</element>`, "text/xml");
        const children = [...doc.firstChild.childNodes]
        return children
            .filter(x => x.tagName != 'rp' && x.tagName != 'rt')
            .map(x => x.textContent.trim())
            .filter(Boolean)
            .join('')
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
