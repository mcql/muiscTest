<template>
    <div>
        <div class="nav"><span @click="back">返回</span>{{Lists.title}}</div>
        <ul>
            <li v-for="item in Lists.data" :key="item.id" @click="listen(item.musicurl, item.musictit)">
                {{item.musictit}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundAudioManager : null
    }
  },
  created() {
      this.backgroundAudioManager  = wx.getBackgroundAudioManager()
  },
  props: ["Lists"],
  methods: {
    listen(url, musictit) {
      this.backgroundAudioManager.stop()
      let urlid = url.split("=")[1]
      let realurl = 'http://music.163.com/song/media/outer/url?id=' + urlid + '.mp3'
      this.backgroundAudioManager.src = realurl
      this.backgroundAudioManager.title = musictit
      this.backgroundAudioManager.play()
      // 播放回调
      this.backgroundAudioManager .onPlay(() => {
        console.log("音乐播放开始")
      })
      // 播放失败回调
      this.backgroundAudioManager.onError(res => {
        wx.showModal({
          title: "提示",
          content: "音乐路径丢失！",
          showCancel: false
        })
      }),
      this.backgroundAudioManager.onEnded(()=>{
        console.log("音乐播放结束")
      })

    },
    back() {
      this.$store.commit("SHOW", true)
    }
  }
};
</script>

<style scoped>
li {
  font-size: 14px;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
ul {
  padding: 40px 20px 0 20px;
}
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 40px;
  background-color: #6a6a6a;
  color: #333;
  font-size: 14px;
  text-align: center;
  color: #fff;
}
span {
  position: absolute;
  left: 5px;
  border: 1px solid #fff;
  border-radius: 10px;
  line-height: 1;
  padding: 5px;
  top: 8px;
}
</style>
