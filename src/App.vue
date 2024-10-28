<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
:root {
  --color-primary: #5ec576;
  --color-secondary: #ffcb03;
  --color-tertiary: #ff585f;
  --color-primary-darker: #4bbb7d;
  --color-secondary-darker: #ffbb00;
  --color-tertiary-darker: #fd424b;
  --color-primary-opacity: #5ec5763a;
  --color-secondary-opacity: #ffcd0331;
  --color-tertiary-opacity: #ff58602d;
  --gradient-primary: linear-gradient(to top left, #39b385, #9be15d);
  --gradient-primary-cv9: linear-gradient(to top left, #dae720, #f0db25);
  --gradient-primary-cv99: linear-gradient(to top left, #757a83, #626366);
  --gradient-primary-light: linear-gradient(to top left, #43d39c, #a4f062);
  --gradient-primary-blue: linear-gradient(to top left, #3972b3, #5db7e1);
  --gradient-primary-blue-light: linear-gradient(to top left, #4b89cf, #6fc4eb);
  --gradient-primary-yallow: linear-gradient(to left, #d0ff00, #f4fd70);
  --gradient-primary-yallow-light: linear-gradient(to left, #9be754, #d0ff00);
  --gradient-primary-yallow-grren: linear-gradient(to left, #56c929, #9be754);
  --gradient-primary-green: linear-gradient(to left, #41c90c, #56c929);
  --gradient-primary-yallow-arabic: linear-gradient(to left, #f4fd70, #d0ff00);
  --gradient-primary-yallow-light-arabic: linear-gradient(
    to left,
    #d0ff00,
    #9be754
  );
  --gradient-primary-yallow-grren-arabic: linear-gradient(
    to left,
    #9be754,
    #56c929
  );
  --gradient-primary-green-arabic: linear-gradient(to left, #56c929, #41c90c);
  --gradient-primary-frame13: linear-gradient(to top right, #c27244, #ced124);

  --gradient-primary-wellcomleft: linear-gradient(
    to top right,
    #22e4c3,
    #24a6fc
  );
  --gradient-primary-wellcomright: linear-gradient(
    to top right,
    #cacabc,
    #ffffff
  );
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
