const { MessageAttachment } = require('discord.js');
const items = {
       "vodka": {
          name: 'Vodka',
          description: 'A nice, clear, russian, alcoholic drink.',
          price: 20,
         used: 'You drank some nice Vodka.',
         single: true
        },
  "sex slave": {
    name: 'Sex Slave',
    description: 'A slave for all your pleasure.',
    price: 100,
    used: { content: 'You had a pleasurable time! 🍆', files: [{
          attachment: 'https://cdn.glitch.com/833468b4-c0fc-44ae-9f2e-1c1e4effbbd9%2FNuttedOn.png',
          name: 'SPOILER_NuttedOn.png'
        }]}, 
  }
      }
module.exports = items;