const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'vpsstats',
    description: 'Haha nerd',
    aliases: [],
    execute(message, args, client, db, gm) {  
      const osutils = require('os-utils');
      const fs = require('fs');
        let totcmds;
  var milliseconds = parseInt((client.uptime % 1000) / 100),
    seconds = parseInt((client.uptime / 1000) % 60),
    minutes = parseInt((client.uptime / (1000 * 60)) % 60),
    hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24),
    days = parseInt((client.uptime / (1000 * 60 * 60 * 24)) % 60);

  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    totcmds = files.length;

    osutils.cpuUsage(function(v) {
      const embed = new d.MessageEmbed()
        .setColor(0x7289da)
        .setTimestamp()
        .addField(
          "VPS Stats:",
          "Shows the stats of the VPS that the bot's running on."
        )
        .addField(
          "--------------------------------------------------------------------------------",
          "------------------------------------------------------------------------------"
        )
        .addField("Platform", osutils.platform(), true)
        .addField("VPS CPU Cores", osutils.cpuCount() + " Cores", true)
        .addField(
          "CPU Usage",
          `${(v * 100).toString().split(".")[0] +
            "." +
            (v * 100)
              .toString()
              .split(".")[1]
              .split("")[0] +
            (v * 100)
              .toString()
              .split(".")[1]
              .split("")[1]}%`,
          true
        )
        .addField(
          "Total Memory",
          osutils
            .totalmem()
            .toString()
            .split(".")[0] +
            "." +
            osutils
              .totalmem()
              .toString()
              .split(".")[1]
              .split("")[0] +
            osutils
              .totalmem()
              .toString()
              .split(".")[1]
              .split("")[1] +
            "MB",
          true
        )
        .addField(
          "RAM Usage",
          `${((osutils.totalmem() - osutils.freemem()) / 10)
            .toString()
            .split(".")[0] +
            "." +
            (osutils.totalmem() - osutils.freemem())
              .toString()
              .split(".")[1]
              .split("")[0] +
            (osutils.totalmem() - osutils.freemem())
              .toString()
              .split(".")[1]
              .split("")[1]}/${osutils
            .totalmem()
            .toString()
            .split(".")[0] +
            "." +
            osutils
              .totalmem()
              .toString()
              .split(".")[1]
              .split("")[0] +
            osutils
              .totalmem()
              .toString()
              .split(".")[1]
              .split("")[1]}MB`,
          true
        )
        .addField(
          "RAM Usage %",
          `${(100 - osutils.freememPercentage() * 10).toString().split(".")[0] +
            "." +
            (100 - osutils.freememPercentage() * 10)
              .toString()
              .split(".")[1]
              .split("")[0] +
            (100 - osutils.freememPercentage() * 10)
              .toString()
              .split(".")[1]
              .split("")[1]}%`,
          true
        )
        //.addField("Server Uptime", osutils.sysUptime() +"ms",true)
        .addField("Ping", Math.round(client.ws.ping) + "ms", true)
        .addField(
          "Uptime",
          days +
            "d " +
            hours +
            "h " +
            minutes +
            "m " +
            seconds +
            "." +
            milliseconds +
            "s",
          true
        )
        .setFooter(`nigger`);
      message.channel.send({ embed });
    });
  });
  }
}