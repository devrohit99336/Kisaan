<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">{{
        firstName
      }}</a>
    </p>

    <div>
      {{
        $t("message.intro", {
          intro: "This is an example of content translation",
        })
      }}
    </div>
    <br />

    <button v-on:click="updateName">update name</button>
    <br /><br />

    {{ getUser }}

    <br><br>


  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      //name: this.$store.state.firstName,
    };
  },
  methods: {
    updateName() {
      this.$store.dispatch("updateName");
    },
  },
  computed: {
    // name(){
    //   return this.$store.state.firstName;
    // },
    // getUser(){
    //   return this.$store.getters.getUser;
    // }

    ...mapState(["firstName","products"]),
    ...mapGetters(["getUser","countProducts"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>