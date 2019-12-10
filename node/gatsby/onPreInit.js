const fs = require('fs')
const path = require('path')

const setupEnvironment = ({ program }) => {
  if (!process.env.GATSBY_URL) {
    // https://www.netlify.com/docs/continuous-deployment/#environment-variables
    if (process.env.CONTEXT && [ 'production', 'deploy-preview', 'branch-deploy' ].includes(process.env.CONTEXT)) {
      process.env.GATSBY_URL = process.env.DEPLOY_URL.replace(/\/$/, '')
    } else if (process.env.NODE_ENV === 'development') {
      process.env.GATSBY_URL = `http://${program.host}:${program.port}`
    } else {
      // Otherwise assume production
      const CNAME = fs.readFileSync(path.join(__dirname, '../../static/CNAME'), { encoding: 'utf8' }).trim()
      process.env.GATSBY_URL = `https://${CNAME.replace(/\/$/, '')}`
    }
  }
}

module.exports = async ({ store }) => {
  setupEnvironment(store.getState())
}
