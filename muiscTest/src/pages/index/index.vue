<template>
    <div>
        <ul v-if="show">
            <li v-for="list in allData" :key="list.id">
                <div>
                    <img :src=list.typeimg />
                </div>
                <p @click="tomusic(list.musicall,list.typename)">{{list.typename}}</p>
            </li>
        </ul>
        <v-list v-else :Lists=list></v-list>
    </div>
</template>

<script>
import vList from "@/components/List.vue";
export default {
  components: {
    vList
  },
  data () {
    return {
      list: {},
      allData: null
    };
  },
  created () {
    let url = 'https://www.easy-mock.com/mock/5bf7b8accf34920f8c84678b/example/allmusic/all'
    this.$http.get(url).then(res => {
        this.allData = res.data.data
      }).catch(err => {
        console.log(err);
      })
  },
  computed: {
    show () {
      return this.$store.state.show
    }
  },
  methods: {
    tomusic (data, title) {
      this.list = { data: data, title: title }
      this.$store.commit("SHOW", false)
    }
  },
  watch: {
    show: function (old, newd) {
      this.show = newd
    }
  }
};
</script>

<style scoped>
img {
  width: 40px;
  height: 40px;
}
ul {
  padding: 20px;
}
li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  line-height: 40px;
}
li > div {
  margin-right: 20px;
}
</style>
