# Example Node Server w/ Babel

### Getting Started

First we'll install.

```shell
$ npm install
```

To start in dev mode
```shell
npm run start:dev
```
Changes to the files in the lib folder will be auto built and the server will be restarted once done
** Browser has to be reloaded manually **

For Formatting
```shell
npm run format
```

For VIM users
Clean Vim Swap files
```shell
find ./ -type f -name "\.*sw[klmnop]" -delete
```
### TODO
 - Configure `live-server` to auto reload browser
 - Configure `es-lint`
 - Configure `husky` package
 - Configure `pm2` package
 - Configure `seneca-web` (if complex routing is needed)
 - Solve `material-ui` issues if any
