<template>
  <div class="card">
    <div class="cardContent">
    <div class="ava" />
      <h1>JavaScript + Css + Vue + Vuex</h1>
      <h3> Contacts: </h3>
      <ul>
          <li>Email: shuric03@gmail.com</li>
          <li>Mobile: +7-951-644-93-79</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "SkillsCard",
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
  font-size: 48px;
  margin: 0;
}
ul{
    list-style: none;
    padding: 0;
}
</style>