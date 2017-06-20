export const homeTemplate  = ({ markup, title }) => {
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
`;
};