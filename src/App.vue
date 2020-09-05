<template>
  <div id="app">
    <nav>
      <ul>
        <router-link tag="li" to="/"> Title</router-link>
        <router-link tag="li" to="/skills"> Skills</router-link>
        <router-link tag="li" to="/contact"> Contact</router-link>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Kaushan Script', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

nav{
  position: absolute;
  top: 0;
  width: 70%;
  padding-top: 15px;
/*   background-color: #000; */
}
ul{
  justify-content: flex-end;
  display: flex;
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 0;
  height: 44px;
}
li{
  margin-left: 10px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
  color: white;
}
li:hover{
  cursor: default;
  color: #33CC33;
}
</style>
<style lang="scss">
html, body{
  height: 100%;
}
body{
    background: url('./assets/background.png');
}
.ava{
    width: 150px;
    height: 150px;
    background: url('./assets/ava.jpg');
    background-size: cover;
    background-position: -50px 10px;
    border-radius: 50%;
    box-shadow: 0 0 40px 20px black inset, 0 0 40px 30px black;
}
</style>