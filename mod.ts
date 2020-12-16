import { ensureDir, ensureFile } from "https://deno.land/std/fs/mod.ts"; 
import ProgressBar from "https://deno.land/x/progress@v1.2.3/mod.ts";
import {
    bgGreen,
    bgWhite,
  } from "https://deno.land/std@0.74.0/fmt/colors.ts";

const total = 100;
const progress = new ProgressBar({
  total,
  complete: bgGreen(" "),
  incomplete: bgWhite(" "),
  display: ':completed/:total hello :time [:bar] :percent'
  // or => 
  // display: ':bar'
  // display: ':bar :time'
  // display: '[:bar]'
  // display: 'hello :bar world'
  // ...
});
let completed = 0;
function run() {
  if (completed <= total) {
    progress.render(completed++);

    setTimeout(function () {
      run();
    }, 20)
  }
}
run();




console.log( `Writing parent component app.vue` );

const App: string = 
`<template>
  <div id=app>

  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
    
    }
  },
  components: {
    
  }
}
</script>

<style>

</style>`

const html =
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <link rel="stylesheet" href="./style.css">
    <title>vno test</title>
  </head>
  <body>
    <div id="app">
      <!-- built files will be auto injected -->
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
    <script type="module" src='./build.js'></script>
  </body>
</html>
`

const appPath: string = "./src/";
const componentPath: string = "./src/components/"

ensureDir('src')
    console.info("Done writing root component dir!");

ensureDir('public')
    console.info("Done writing public dir!");

ensureDir('src/components')
   console.log('dont writing component dir!')

// ensureDir('vno-build')
//    console.log('dont writing build dir!')

//    await Deno.writeTextFile("src/App.vue", App);
//         console.info("Done!");
ensureFile("src/App.vue")
  .then(() => {
    Deno.writeTextFile("src/App.vue", App);
    console.info("Done writing App component!");
});

ensureFile("public/index.html")
  .then(() => {
    Deno.writeTextFile("public/index.html", html);
    console.info("Done writing html file!");
});

// ensureFile("vno-build/build.js")
//   .then(() => {
//     Deno.writeTextFile("vno-build/build.js", '/*Build files written here*/');
//     console.info("Done writing build file!");
// });

// ensureFile("vno-build/style.css")
//   .then(() => {
//     Deno.writeTextFile("vno-build/style.css", '/*Style written here*/');
//     console.info("Done writing Style file!");
// });

console.log('writing App.vue')
