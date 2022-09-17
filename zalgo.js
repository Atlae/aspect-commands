function zalgo(message) {
    let out = "";
    // copied straight from https://github.com/TheGreatRambler/another-zalgo.js
    const chars = {
        up: [
            '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311',
            '\u0306', '\u0310', '\u0352', '\u0357', '\u0351', '\u0307',
            '\u0308', '\u030a', '\u0342', '\u0343', '\u0344', '\u034a',
            '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350',
            '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313',
            '\u0314', '\u033d', '\u0309', '\u0363', '\u0364', '\u0365',
            '\u0366', '\u0367', '\u0368', '\u0369', '\u036a', '\u036b',
            '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b',
            '\u0346', '\u031a'
        ],
        middle: [
            '\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321',
            '\u0322', '\u0327', '\u0328', '\u0334', '\u0335', '\u0336',
            '\u034f', '\u035c', '\u035d', '\u035e', '\u035f', '\u0360',
            '\u0362', '\u0338', '\u0337', '\u0361', '\u0489'
        ],
        down: [
            '\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d',
            '\u031e', '\u031f', '\u0320', '\u0324', '\u0325', '\u0326',
            '\u0329', '\u032a', '\u032b', '\u032c', '\u032d', '\u032e',
            '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339',
            '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348',
            '\u0349', '\u034d', '\u034e', '\u0353', '\u0354', '\u0355',
            '\u0356', '\u0359', '\u035a', '\u0323'
        ]
    };
    for (const element of message) {
        out += element + chars["up"][Math.floor(Math.random()*50)] + chars["middle"][Math.floor(Math.random()*23)] + chars["down"][Math.floor(Math.random()*40)];
    }
    return out;
}

console.log(zalgo("aaa"))
// console.log(zalgo("I got a couple questions one is I noticed you’re on level one during the game through how is it you got all of the stuff unlocked on level one mastery?  Because I also see you The bottom right it says mastery level one of one that’s on all levels you’re playing i’m afraid that clearly shows a modified game file. two Can you do this on a council not just a PC? I have my doubts because you might have modified file system on your PC due to the fact that you have all of the items unlocked and you’re at mastery level one. If you can do this on an Xbox series X or PS five or four I would be impressed then. Otherwise I have my doubts that’s probably why Ioi Interactive don’t really make big noise when people post these especially when they’re on a PC. PC games can be modified Council games cannot. I’m not really interested in speed running because I like to enjoy the craftsmanship that the developers put into the game! Sort of like if going to a movie and then asking the projectionist to fast forward to the ending right away!😀"))
