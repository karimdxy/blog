---
title: Angular, Vue and React
tagline: My experience using all three frameworks
---

## Angular

### The framework

Angular was the first real web framework I used. It taught me a great deal about building complex web apps. If I were to describe it in one word it would be: **structure**.

The problem however is that with structure comes both unneeded complexity (unwarranted even) and rigidity. At first this is not perceivable due to the gains in speed of development: You have less choices to make in terms of architecture, giving you more head space to devote to the problem you're trying to solve. But eventually, that'll come bite you in the ass.

You'll get locked into the angular way of doing things and by extension that of Google, which might not always be a good thing[^1]. How so? You'll be thinking about how to make things scalable from the get-go, which convention to follow, which in turn will square you into premature optimizations. I'm not saying that you won't be doing that somewhere down the line, I'm only saying that with Angular you'll be sort of forced to do them from the get-go.

### The dev experience

_Note: I personally used to use sublime/atom but have switched to VS Code when it first landed._

Angular being written in TS and VS Code being optimized for TS has made the experience a wonderful one.

**Want to refactor ?** Click the light bulb, then click refactor. That's it. `CTRL + ,` -> `ARROW DOWN` -> `Enter` (for keyboard fans, like me).

**Want to rename a variable?** hit `F2` -> rename the var and you're good to go. It's been renamed wherever it was referenced.

**Want to rename the file?** Just do it. It'll be updated wherever it was imported.

### The ecosystem

Out of the three, I would say Angular is the smallest (in relative numbers) which is due to it being a full fledged framework (therefore an AIO package).

## Vue

### The library

Equipped with my new learnings on structure and (debatable) scalable app architecture skills, I was looking for an escape hatch. This is where Vue shines. First there's the frenchy, chic name. Then there's the light documentation (I picked it up in a day). Lastly, and most importantly, there's the ease of use and simplicity. Everything just made sense. It just works<sup>TM</sup>.

The issue with simplicity however is that you're ceding control over some things to the library and you might not necessarily want to do that.

### The dev experience

It's meh at best. And yes, I did try everything.

### The ecosystem

Although not the biggest, it a pretty neat one! The packages that you need in 80% of the time are there and they're pretty high quality[^2] too. For the remaining 20% I would argue that it's okay to get your hands dirty sometimes (although if you get edge cases too often maybe you should reconsider).

## React

The best. Relatively speaking that is. It ticks all the boxes for me.

## Addendum: Svelte

Interesting.

[^1]: [You are not Google](https://blog.bradfieldcs.com/you-are-not-google-84912cf44afb)
[^2]: Meaning: battle-tested, include good test suits, well documented are used in the wild
