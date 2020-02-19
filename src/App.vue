<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>SideBar-Lists</v-navigation-drawer>

    <v-app-bar color="primary" dark app clipped-left>  <!-- header -->
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>  <!-- ハンバーガーメニュー(SideBar-Lists)の開閉ボタン -->
      <v-tool-bar-title>Caffeine</v-tool-bar-title>  <!-- header内のアプリ名 -->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text outlined >sign up</v-btn>                   <!--textでボタンの背景を透明にする-->
        <v-btn text outlined >sign in</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer color="primary" dark app>Caffeine</v-footer>

  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  data(){
    return{
        drawer: null
    }
  }
}
</script>
