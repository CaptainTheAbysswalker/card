<template>
  <div class="card">
    <div class="cardContent">
      <div class="ava"></div>
      <h1>Contact form</h1>
      <form>
        <input type="text" v-model="message.subject" placeholder="Subject">
        <textarea v-model="message.messageText" placeholder="Text"/>
        <button type="submit">
          <a v-bind:href="getLink" v-on:click="saveMessage">
            Send
          </a>
        </button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
    data: () =>({
    message: {
      subject: '',
      messageText: ''
    }
  }),
  name: "ContactCard",
  components: {},
  methods: {
    saveMessage: function(evt){
      /* evt.preventDefault(); */
      this.$store.dispatch('saveMessage',this.message)
    }
  },
  computed: {
    getLink(){
      let link ='';
      link = "mailto:shuric03@gmail.com?subject=" 
        + this.$store.state.message.subject + '&body=' + this.$store.state.message.messageText;
      return link
      console.log('a vot i zalupa', message.subject)
    }
  }
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
form{
  font-family: 'Itim', cursive;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
input{
  font-family: 'Itim', cursive;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 0 10px 5px black inset, 0 0 10px 5px black;
  border: 1px inset black;
  padding-left: 20px;
  height: 48px;
}
textarea{
  font-family: 'Itim', cursive;
  font-size: 16px;
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 0 20px 10px black inset, 0 0 20px 10px black;
  border: 1px inset black;
  padding: 20px;
}
button{
  border-radius: 4px;
  width: 90px;
  height: 32px;
  font-size: 16px;
  padding: 0;
  box-shadow: 0 0 7px 3px black inset, 0 0 7px 3px black;
  border: 1px inset black;

}
a{
  display: flex;
  text-decoration: none;
  width: 100%;
  height: 100%;
  font-family: 'Itim', cursive;
  font-size: 16px;
  color: black;
  align-items: center;
  justify-content: center;
}
a:hover{
  color: #33CC33;
}
</style>