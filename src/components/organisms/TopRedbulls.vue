<template>
  <div class="redbulls">
    <h2 class="redbull">RedBullの場所だよ！！</h2>
  </div>
</template>

<script>
export default {
  name: "Top-Redbulls-Space",

  props: {
    type: {
      type: String,
      efault: 'h2'
    }
  }
}
</script>

<style>
redbull{
  background-color: blue
}
</style>