exports.commands = (cmds) => {
    let lowerCaseCmds = cmds.map((a) => { return a.toLowerCase() })

    let commands = []

    if(lowerCaseCmds.includes('ping')) {
        commands.push({
            name: 'ping',
            description: 'Replies with Pong!',
        })
    }

    return commands
}