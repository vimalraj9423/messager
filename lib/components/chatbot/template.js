const renderFullPage = function renderFullPage(html, css) {
  return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
        </head>
        <body style="margin:0px">
          <div id="root">${html}</div>
          <style id="jss-server-side">${css}</style>
          <script src="./assets/chat.bundle.js"></script>
        </body>
      </html>
    `
}

export default renderFullPage
