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
