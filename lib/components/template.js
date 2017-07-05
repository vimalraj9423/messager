export const SwipeableTemplate = ({ markup, title }) => {
  return `
<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        <div id="root">${markup}</div>
        <script src="./assets/swipeable.bundle.js"></script>
    </body>
</html>
`
}

export const FormTemplate = ({ markup, title, css, styledCss }) => {
  return `
<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
        <style id="jss-server-side">${css.sheetsToString()}</style>
        <style id="styled-css-server-side">${styledCss}</style>
    </head>
    <body>
        <div id="root">${markup}</div>
       <script src="./assets/form.bundle.js"></script>
    </body>
</html>
`
}
