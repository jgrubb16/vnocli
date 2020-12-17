import ProgressBar from "https://deno.land/x/progress@v1.2.3/mod.ts";
import {
  bgGreen,
  bgWhite,
} from "https://deno.land/std@0.74.0/fmt/colors.ts";

import { ensureDir, ensureFile } from "https://deno.land/std/fs/mod.ts"; 

const total = 100;
const progress = new ProgressBar({
  total,
  complete: bgGreen(" "),
  incomplete: bgWhite(" "),
  display: ':completed/:total hello :time [:bar] :percent',
  clear: true,
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
const Green: string = 
`<template>
<div id="green">
  <h1>Mikey</h1>
  <a href="https://imgbb.com/"
    ><img src="https://i.ibb.co/Lz6jw4b/mikey.png" alt="mikey" border="0"
  /></a>
  <p>
    Mikey is a certified Sommolier. That means he knows a lot more about wine
    &nbsp;than you do. Also Sake.
  </p>
</div>
</template>

<script>
export default {
name: 'green',
data() {
  return {
    color: 'green',
  };
},
};
</script>

<style>
#green {
background-color: #DAF7A6;
padding: 25px;
color: #34495e;
}
</style>
`
const Orange: string = 
`<template>
<div id="orange">
  <h1>Jordan</h1>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/m46njhp/jordan.png" alt="jordan" border="0" /></a>
<p>Jordan has worked on Broadway! So, yes, he has much sass!</p>
</template>

<script>
export default {
name: 'orange',
data() {
  return {
    color: 'orange',
  };
},
};
</script>

<style>
#orange {
background-color: #57D3AF;
}
</style>
`

const Red: string = 
`<template>
<div id="red">
  <h1>Andrew</h1>
  <a href="https://imgbb.com/"
    ><img src="https://i.ibb.co/cxPPLvy/andrew.png" alt="andrew" border="0"
  /></a>
  <p>
    Andrew is a classically trained flutist. He's a boss ass bitch who don't
    &nbsp; take no shit
  </p>
</div>
</template>

<script>
export default {
name: 'red',
data() {
  return {
    color: 'red',
  };
},
};
</script>

<style>
#red {
background-color: maroon;
}
</style>`

const Purple: string = 
`<template>
<div id="purple">
  <h1>Kyle</h1>
  <a href="https://imgbb.com/"
    ><img src="https://i.ibb.co/6rxv4gC/kyle.png" alt="kyle" border="0"
  /></a>
  <p>Kyle (aka Grandpa Kyle) is here to party</p>
</div>
</template>

<script>
export default {
name: 'purple',
data() {
  return {
    color: 'purple',
  };
},
};
</script>

<style>
#purple {
background-color: blueviolet;
}
</style>
`

const App: string = 
`<template>
<div id="app">
  <header class="header">
    <img class="logo" src='https://svgshare.com/i/SNz.svg' alt="logo" />
    <nav class="inner">
      <button v-on:click="handelClick('green')">Mikey</button>
      <button v-on:click="handelClick('orange')">Jordan</button>
      <button v-on:click="handelClick('purple')">Kyle</button>
      <button v-on:click="handelClick('red')">Andrew</button>
      <a class="github" href="https://github.com/oslabs-beta/vno" target="_blank"
        ><button>Github</button>
      </a>
    </nav>
  </header>
  <body v-if="displayedComponent === 'red'">
    <Red/>
  </body>
  <body v-else-if="displayedComponent === 'green'">
    <Green />
  </body>
  <body v-else-if="displayedComponent === 'orange'">
    <Orange />
  </body>
  <body v-else-if="displayedComponent === 'purple'">
    <Purple />
  </body>
  <body v-else>
    <h1>Welcome to Your vno Project</h1>
    <p>
    For a guide on project customization,<br>
    check out out GitHub repo at: 
    <a href="https://github.com/oslabs-beta/vno" target="_blank" rel="noopener">&nbsp;vno documentation</a>.
  </p>
  <ul>
  <li><a href="https://github.com/jgrubb16/vnocli" target="_blank" rel="noopener">Open Source CLI Tool</a></li>
  </ul>
    </body>
</div>
</template>

<script>
import Red from './components/Red'
import Green from './components/Green'
import Orange from './components/Orange'
import Purple from './components/Purple'
export default {
name: 'app',
data() {
  return {
    displayedComponent : ''
  };
},
methods: {
  handelClick: function(event) {
    this.displayedComponent = event;
    console.log(this.displayedComponent)
  }
},
components: {
  Red,
  Green,
  Orange,
  Purple,
}
};
</script>

<style>
body {
  background-color: #34495e;
  }
  .header {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
#app {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #34495e;
color: aliceblue;
padding-bottom: 10px;
padding-top: 20px;
align-content: space-around;
}
.logo{
padding: 20px;
}
.inner {
display: flex;
flex-direction: row;
justify-content: center;
}
button {
color: #34495e;
background-color: #57D3AF;
padding: 5px;
text-size-adjust: auto;
border-radius: 15px;
margin: 10px;
}
#green {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
#red {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
#orange {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
#purple {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
}`

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

const server: string = `import { Application, join, log, send } from "./deps.ts";
import vno from "../src/strategies/renderer.ts";

const port: number = 3000;
const server: Application = new Application();


await vno.config({
  label: "App",
  entry: "./",
  cdn: "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js",
});

server.use(async (ctx, next) => {
  const filePath = ctx.request.url.pathname;
  if (filePath === "/") {
    await send(ctx, ctx.request.url.pathname, {
      root: join(Deno.cwd(), "public"),
      index: "index.html",
    });
  } else if (filePath === "/build.js") {
    ctx.response.type = "application/javascript";
    await send(ctx, filePath, {
      root: join(Deno.cwd(), "vno-build"),
      index: "build.js",
    });
  } else if (filePath === "/style.css") {
    ctx.response.type = "text/css";
    await send(ctx, filePath, {
      root: join(Deno.cwd(), "vno-build"),
      index: "style.css",
    });
  } else await next();
});

if (import.meta.main) {
  log.info("Server is up and running on port" + port );
  await server.listen({ port });
}

export { server };`

const deps: string = `export { dirname, join } from "https://deno.land/std@0.74.0/path/mod.ts";
export * as log from "https://deno.land/std@0.74.0/log/mod.ts";

// oak
export {
  Application,
  Router,
  send,
} from "https://deno.land/x/oak@v6.3.1/mod.ts";

// dotenv
export { config } from "https://deno.land/x/dotenv/mod.ts";
`
const appPath: string = "./";
const componentPath: string = "./components/"


ensureDir('public')
    console.info("Done writing public dir!");

ensureDir('components')
   console.log('Done writing component dir!')

ensureDir('assets')
console.log('Done writing assets dir!')


ensureFile("App.vue")
  .then(() => {
    Deno.writeTextFile("App.vue", App);
    console.info("Done writing App component!");
});

ensureFile("public/index.html")
  .then(() => {
    Deno.writeTextFile("public/index.html", html);
    console.info("Done writing html file!");
});

ensureFile("deps.ts")
  .then(() => {
    Deno.writeTextFile("deps.ts", deps);
    console.info("Done writing deps file!");
});

ensureFile("components/Red.vue")
  .then(() => {
    Deno.writeTextFile("components/Red.vue", Red);
    console.info("Done writing");
  });

ensureFile("components/Orange.vue")
  .then(() => {
    Deno.writeTextFile("components/Orange.vue", Orange);
    console.info("Done writing");
  });

ensureFile('components/Green.vue').then(() => {
  Deno.writeTextFile('components/Green.vue', Green);
  console.info('Done writing');
});

ensureFile('components/Purple').then(() => {
  Deno.writeTextFile('components/Purple.vue', Purple);
  console.info('Done writing');
});

ensureFile('server.ts').then(() => {
  Deno.writeTextFile('server.ts', server);
  console.info('Done writing server');
});

console.log('writing App.vue')
console.log('DONE!')

