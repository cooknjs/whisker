const {Command, flags} = require('@oclif/command')

class HandleCommand extends Command {
  async run() {
    const {flags} = this.parse(HandleCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /data/projects/node/cookn/packages/whisker/src/commands/handle.js`)
  }
}

HandleCommand.description = `Describe the command here
...
Extra documentation goes here
`

HandleCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = HandleCommand
