const { Command, flags } = require('@oclif/command')

const newMitt = '@cooknjs/eggs/mitt'
const Mitt = require(newMitt)

class HandleCommand extends Command {
  async run() {
    const { flags } = this.parse(HandleCommand)

    if (flags.build) {
      const server = new Mitt()
      server.runServer()
    }
  }
}

HandleCommand.description = `Launch a live reload server on your local build
...
Extra documentation goes here
`

HandleCommand.flags = {
  build: flags.boolean({ char: 'b', description: 'Start a static server from your private build' })
}

module.exports = HandleCommand
