export const homeTemplate = ({ markup, title }) => {
  return `
<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>
`
}

export const homeTemplateWithData = ({ markup, title, initialState }) => {
  return `
<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
         <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
    </head>
    <body>
        <div id="root">${markup}</div>
       <script src="./assets/home.bundle.js"></script>
    </body>
</html>
`
}
