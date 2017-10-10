const renderFullPage = function renderFullPage(html, css) {
  return `
      <!doctype html>
      <html>
        <head>
          <title>Material-UI</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <style id="jss-server-side">${css}</style>
          <style src="./assets/booking.bundle.js"></style>
        </body>
      </html>
    `
}

export default renderFullPage
