/* inspired from https://github.com/tannerntannern/tiny-text-service/blob/master/lib/convert.ts */ 
function flip(message) {
    const reg = '\u200B abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!@#$%^&*()-+=';
    const flipped = `\u200B ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z0ƖᄅƐㄣϛ9ㄥ86'˙¿¡@#$%^⅋*)(-+=`;
    return message.split('').map(char => flipped[reg.indexOf(char) || char]).join('');
}

console.log(flip(`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!@#$%^&*()-+=`))
console.log(flip(`really really really small streamer`))