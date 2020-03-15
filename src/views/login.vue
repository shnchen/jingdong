<template>
  <div class="login">
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      model: {
        userName: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "userName",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              required: true,
              type: "string",
              min: 3,
              max: 15
            },
            trigger: "blur",
            messages: {
              required: "用户名不能为空",
              min: "用户名不能少于三个字符",
              max: "用户名不能超过十五个字符"
            }
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: {
                open: false
              }
            },
            rules: {
              required: true,
              type: "string"
            },
            trigger: "blur"
          },
          {
            type: "submit",
            modelKey: "password",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    async submitHandler(e) {
      e.preventDefault();
      let result = await this.$http.get("/api/login", { params: this.model });
      if (result.status === 0) {
        this.$store.commit("setToken", result.token);
        window.localStorage.setItem("token", result.token);
        if (this.$route.query.redirect) {
          this.$router.replace({ path: this.$route.query.redirect });
          return;
        }
        this.$router.replace({ path: "/bottom-nav/index" });
      }
      alert(result.message);
    }
  }
};
</script>
