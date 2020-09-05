<template>
  <div class="card">
    <div class="cardContent">
      <div class="ava" />
      <h1>Alexander Severukhin</h1>
      <h2> Begining Frontend Developer</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TitleCard",
  components: {},
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cardContent {
  width: 70%;
  color: #33CC33;
  padding: 20px 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
h1 {
  font-size: 64px;
  margin: 0;
}
</style>