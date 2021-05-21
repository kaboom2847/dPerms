exports.checkBot = function(message, command, permissionsArray) {
 function permCheck(perms) {
  return message.channel.permissionsFor(message.guild.me.id).has(perms);
 };
 function run(msg, cmd, permit) {
  if (permit.every(permCheck)) {
  command()
  } else {
    try {
      msg.author.send(`**Missing Permission(s)**\nRequired Permissions:\n\`${permit.join(', ')}\``)
    } catch {
      return;
    }
      }
 };
  run(message, command, permissionsArray)
}