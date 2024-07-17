# Gatsby Calcite Components

Test case for using calcite components in Gatsby. The SSR build currently fails due to references to browser-only objects.

To reproduce:
1. Run `npm install`
1. Run `npm run build`
1. See first error:
   ```bash
   ERROR #95312  HTML.COMPILATION

   "navigator" is not available during server-side rendering. Enable "DEV_SSR" to
   debug this during "gatsby develop".

   See our docs page for more info on this error: https://gatsby.dev/debug-html


      7 |
      8 | function getUserAgentData() {
    > 9 |     return navigator.userAgentData;
        |            ^
     10 | }
     11 | function getUserAgentString() {
     12 |     if (!Build.isBrowser) {


     WebpackError: ReferenceError: navigator is not defined

    - interactive.js:9
      [calcite-components-integration]/[@esri]/calcite-components/dist/components/in
      teractive.js:9:1
   ```
1. If you remove the references to `navigator` in interactive.js, this error will go away, but there will be a second error:
   ```bash
   ERROR #95312  HTML.COMPILATION

   "window" is not available during server-side rendering. Enable "DEV_SSR" to debug
   this during "gatsby develop".

   See our docs page for more info on this error: https://gatsby.dev/debug-html


     22 | function getObserver(type) {
     23 |     // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
   > 24 |     class ExtendedMutationObserver extends window.MutationObserver {
        |                                            ^
     25 |         constructor(callback) {
     26 |             super(callback);
     27 |             this.observedEntry = [];


    WebpackError: ReferenceError: window is not defined

   - observers.js:24
    [calcite-components-integration]/[@esri]/calcite-components/dist/components/ob
    servers.js:24:1

   ```
1. If you remove the references to window in this file, all errors go away and the build succeeds.