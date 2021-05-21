exports.checkBot = function(message, command, permissionsArray) {
 function permCheck(perms) {
  return message.channel.permissionsFor(message.guild.me.id).has(perms);
 };
 function run(msg, cmd, permit) {
  if (permit.every(permCheck)) {
  command()
  } else {
    try {
      msg.author.send(`Required Permissions:\n\`${permit.join(', ')}\``)
    } catch {
      return;
    }
      }
 };
  run(message, command, permissionsArray)
};

exports.checkUser = function(message, command, permissionsArray) {
  return message.channel.permissionsFor(message.author.id).has(perms);
 };
 function run(msg, cmd, permit) {
  if (permit.every(permCheck)) {
  command()
  } else {
    try {
      msg.channel.send(`Required Permissions:\n\`${permit.join(', ')}\``)
    } catch {
      return;
    }
      }
};