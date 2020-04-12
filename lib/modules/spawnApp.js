const cp = require('child_process')

module.exports = {
  getServe: (type, projectName, envMode) => {
    const serve = cp.spawn('node', [
      './node_modules/@vue/cli-service/bin/vue-cli-service.js',
      type,
      `---${projectName}`,
      '--mode',
      envMode
    ])
    return serve
  }
}
