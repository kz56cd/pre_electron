var packager = require('electron-packager');
var config = require('./package.json');

packager({
    dir: './',
    out: '../dist',
    name: config.name,
    platform: 'win32,darwin',
    arch: 'x64',
    version: '0.30.0',
    icon: './app.icns', //<- アプリアイコン

    'app-bundle-id': 'cc.kz56cd.demo', //<- 自分のドメインなどを使用してください

    'app-version': config.version,
    'helper-bundle-id': 'cc.kz56cd.demoapp', //<- 自分のドメインなどを使用してください
    overwrite: true,
    asar: true,
    prune: true,
    ignore: "node_modules/(electron-packager|electron-prebuilt|\.bin)|release\.js",
    'version-string': {
        CompanyName: 'individual',
        FileDescription: 'Just a Demo App.',
        OriginalFilename: config.name,
        FileVersion: config.version,
        ProductVersion: config.version,
        ProductName: config.name,
        InternalName: config.name
    }
}, function done (err, appPath) {
    if(err) {
        throw new Error(err);
    }
    console.log('Done!!');
});