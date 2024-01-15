<script setup>
</script>

<template>
  <div>
    <router-link to="/operate">operate</router-link><br />
    <router-link to="/list">list</router-link>
    <hr />
    <router-view></router-view>
    <router-view name="list"></router-view>
  </div>
</template>

<style scoped>
</style>
