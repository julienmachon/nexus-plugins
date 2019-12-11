import resolve from "@rollup/plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";

const pkg = require(__dirname + "/package.json");
const peerDeps = Object.keys(pkg.peerDependencies || {});
const deps = Object.keys(pkg.dependencies || {});
const only = deps.map(dep => new RegExp(`^${dep}\/.*$`));
const exclude = peerDeps.map(dep => `node_modules/${dep}/**`);

console.log([...deps, ...only]);

export default name => [
  // Browser Development
  {
    input: "src/index.js",
    output: {
      file: `dist/index.js`,
      format: "system"
    },
    externals: peerDeps,
    plugins: [
      // typescriptPlugin({
      //   typescript,
      //   tsconfig: './tsconfig.json',
      //   tsconfigOverride: {
      //     compilerOptions: {
      //       module: 'es2015',
      //     },
      //   },
      // }),
      resolve({
        browser: true,
        only: [
          ...deps,
          "object-assign",
          "prop-types/checkPropTypes",
          "scheduler",
          "scheduler/tracing",
          /^prop-types\/.*$/
        ]
      }),
      commonjs({
        exclude
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development")
      })
    ]
  }
];
