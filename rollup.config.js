import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import VuePlugin from "rollup-plugin-vue";
import replace from "@rollup/plugin-replace";

const pkg = require(__dirname + "/package.json");
const peerDeps = Object.keys(pkg.peerDependencies || {});
const deps = Object.keys(pkg.dependencies || {});
// const only = deps.map(dep => new RegExp(`^${dep}\/.*$`));
const exclude = peerDeps.map(dep => `node_modules/${dep}/**`);
const externals = Object.keys(pkg.peerDependencies || {}).reduce(
  (prev, curr) => ({ ...prev, [curr]: curr }),
  {}
);

peerDeps.map(dep => {
  console.log("For dep", dep);
  const pathname = __dirname + "/node_modules/" + dep + "/package.json";
  console.log("pathname", pathname);
  const depPkg = require(__dirname + "/node_modules/" + dep + "/package.json");
  console.log(depPkg.dependencies || {});
});

export default name => [
  {
    input: "src/index.js",
    output: {
      file: `dist/index.js`,
      format: "system"
    },
    externals,
    plugins: [
      babel({
        // runtimeHelpers: true,
        exclude: "node_modules/**"
        // presets: [
        //   // "@babel/preset-env",
        //   "@babel/preset-react",
        //   "@vue/babel-preset-app"
        // ]
      }),
      VuePlugin(),
      resolve({
        // browser: true
        only: deps
      }),
      commonjs({
        exclude
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production")
      })
    ]
  }
];
