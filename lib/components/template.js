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

const genTem = src => ({ markup, title, css, styledCss }) => {
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
       <script src="${src}"></script>
    </body>
</html>
`
}

export const FormTemplate = genTem('./assets/form.bundle.js')
