const {Command, flags} = require('@oclif/command')

class StirCommand extends Command {
  async run() {
    const {flags} = this.parse(StirCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /data/projects/node/cookn/packages/whisker/src/commands/stir.js`)
  }
}

StirCommand.description = `Describe the command here
...
Extra documentation goes here
`

StirCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = StirCommand
