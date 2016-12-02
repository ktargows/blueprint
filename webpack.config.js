module.exports = {
    entry: "src/index.ts",
    dest: "dist",
    localResolve: [
        // locally resolve @blueprintjs packages so example components will compile
        // (they all import @blueprint/* but don't actually have themselves in their node_modules)
        "@blueprintjs/core",
        "@blueprintjs/datetime",
        "@blueprintjs/table",
        "dom4",
        "jquery",
        "normalize.css",
        "react",
        "react-addons-css-transition-group",
        "react-dom",
    ],
    output: {
        library: "blueprint",
        libraryTarget: "umd",
        path: 'dist',
        filename: '[name].js',
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React',
        'react-dom' : 'ReactDOM',
    }
}
