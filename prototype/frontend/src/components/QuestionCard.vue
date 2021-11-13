<template>
    <div class="questCard max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-8 bg-gray-50 shadow-2xl">
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

                <div @click.prevent="active = !active" class="text-left w-full">
                  <a href="#" class="mt-2 text-3xl leading-tight font-semibold hover:underline">
                    <span v-if="!active"> {{ TrimText(wordProp.text) }} </span>
                    <span v-if="active" v-html="wordProp.text"></span>
                  </a>
                  <a v-if="active" :href="`https://dictionary.goo.ne.jp/srch/all/${TrimText(wordProp.text)}/m0u/`" class="mt-2 text-left leading-tight font-semibold hover:underline">
                    辞書
                  </a>
                </div>

                <div>
                    <div class="tab__content p-2" v-show="active">
                      
                      <!-- Meanings -->
                      <div v-if="wordProp.meanings != null"  class="p-2">
                        <div class="text-left">
                          Meanings: 
                        </div>
                        <div v-for="meaning in wordProp.meanings" :key="meaning" class="text-left">
                            - {{ meaning }}
                        </div>
                      </div>

                      <!-- Examples -->
                      <div v-if="wordProp.examples != null" class="p-2">
                        <div class="text-left">
                          Examples: 
                        </div>
                        <div v-for="example in wordProp.examples" :key="example" class="text-left">
                          - {{ example }}
                        </div>
                      </div>

                      <!-- Mistakes -->
                      <div v-if="wordProp.mistakes != null" class="p-2">
                        <div class="text-left">
                          Mistakes: 
                        </div>
                        <div v-for="mistake in wordProp.mistakes" :key="mistake" class="text-left">
                          - {{ mistake }}
                        </div>
                      </div>
                      
                      <!-- Result -->
                      <p v-for="result in ['Right', 'Wrong']" :key="result" class="mt-2 text-gray-500 text-left">
                          <input type="radio" :name="`result_${indexProp}`" :value="result" class="rounded text-pink-500" />
                          {{ result }}
                      </p>
                    </div>
                </div>

                <!-- TODO: mulltiple choice
                <p v-for="candidate in wordProp.candidates" :key="candidate" class="mt-2 text-gray-500 text-left">
                    <input type="radio" :name="`group${indexProp}`" value="candidate" class="rounded text-pink-500" />
                        {{ candidate }}
                </p>
                -->
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
  data: function() {
    return {
      active: false
    }
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

</style>
