/* inspired from https://github.com/tannerntannern/tiny-text-service/blob/master/lib/convert.ts */ 
function tiny(message) {
    const reg = '\u200B abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!@#$%^&*()-+=';
    const smol = '\u200B ᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹,.ˀᵎ@#$%^&*⁽⁾⁻⁺⁼';
    return message.split('').map(char => smol[reg.indexOf(char) || char]).join('');
}

console.log(tiny(`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!@#$%^&*()-+=`))
console.log(tiny(`really really really small streamer`))