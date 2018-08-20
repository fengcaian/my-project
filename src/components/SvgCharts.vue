<template>
  <div>
    <!--<svg version="1.1" baseProfile="full" width="1540" height="600" viewBox="0, 0, 1540, 600" xmlns="http://www.w3.org/2000/svg">
      <path d="M 240 100 H 1300 A 180 180, 0, 0, 1, 1300 460 H 240 A 180 180 0, 0, 1, 240 100 Z" full="transparent" stroke="#878d99"/>
    </svg>-->
    <div id="div" ref="div">1234</div>
    <div>{{dataArr}}</div>
    <svg-icon icon-class="lock" style="font-size: 100px"></svg-icon>
    <svg-icon icon-class="quickResponse" style="font-size: 100px"></svg-icon>
    <svg-icon icon-class="check" style="font-size: 100px"></svg-icon>
    <svg-icon icon-class="setting" style="font-size: 50px"></svg-icon>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 1
    }
  },
  computed: {
    dataArr () {
      return [1, 2, 3]
    }
  },
  mounted () {
    this.addEvent(document.getElementById('div'), 'click', this.fun)
  },
  methods: {
    fun () {
      alert(this.name)
    },
    addEvent (obj, name, cb) {
      if (obj.attachEvent) {
        alert(11)
        obj.attachEvent(`on${name}`, cb)
      } else {
        obj.addEventListener(name, cb, false)
      }
    }
  }
}
</script>

<style scoped>

</style>
