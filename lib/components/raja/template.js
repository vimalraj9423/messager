// // import { liveFiles } from '../../public/file_manifest'

// const generateTemplate = (script, StyleTag) => ({
//   markup,
//   title,
//   css,
//   // styledCss,
//   initialState
// }) => {
//   const stylesList = StyleTag
//   const scripts = script
//     .map(scriptPath => `<script src="${scriptPath}"></script>`)
//     .join('')

//   const styles =
//     stylesList !== ''
//       ? stylesList
//           .map(style => `<link href="${style}" rel="stylesheet">`)
//           .join('')
//       : ''

//   return `
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>${title}</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway|Roboto" rel="stylesheet">
//         <style id="jss-server-side">${css}</style>
//         ${styles}
//         <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
//     </head>
//     <body style="margin: 0;font-family:'Roboto', 'Helvetica', 'Arial', sans-serif">
//         <div id="root">${markup}</div>
//         ${scripts}
//     </body>
// </html>
// `
// }

// function homeDesktopBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? [`/public/${liveFiles['commons']}`, `/public/${liveFiles['home']}`]
//     : ['/assets/home.bundle.js']
// }

// function SearchDesktopBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? ['/public/commons.bundle.js', '/public/search.bundle.js']
//     : ['/assets/search.bundle.js']
// }

// function ProfileBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? ['/public/commons.bundle.js', '/public/profile.bundle.js']
//     : ['/assets/profile.bundle.js']
// }

// function OffersBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? ['/public/commons.bundle.js', '/public/offers.bundle.js']
//     : ['/assets/offers.bundle.js']
// }

// function OfferPageBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? ['/public/commons.bundle.js', '/public/offerPage.bundle.js']
//     : ['/assets/offerPage.bundle.js']
// }

// function realTimeTrackingBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? ['/public/commons.bundle.js', '/public/rtt.bundle.js']
//     : ['/assets/rtt.bundle.js']
// }

// export const HomeTemplate = generateTemplate(homeDesktopBundle(), '')

// export const HomeTemplateMobile = generateTemplate(
//   ['/assets/homemobile.bundle.js'],
//   ''
// )

// export const SearchTemplate = generateTemplate(SearchDesktopBundle(), '')

// export const ProfileTemplate = generateTemplate(
//   ProfileBundle(),
//   ['/assets/styles.css'],
//   ''
// )

// export const OffersTemplate = generateTemplate(OffersBundle(), '')

// export const OfferPageTemplate = generateTemplate(OfferPageBundle(), [
//   '/assets/styles.css'
// ])

// export const realTimeTrackingTemplate = generateTemplate(
//   realTimeTrackingBundle(),
//   ''
// )

export const templateHome = ({
  markup,
  title,
  css,
  // styledCss,
  initialState
}) => {
  return `<!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway|Roboto" rel="stylesheet">
            <style id="jss-server-side">${css}</style>
            <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
            <style src="./assets/raja.bundle.js"></style>
        </head>
        <body style="margin: 0;font-family:'Roboto', 'Helvetica', 'Arial', sans-serif">
            <div id="root">${markup}</div>
        </body>
    </html>`
}
