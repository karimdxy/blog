---
title: Angular, Vue and React
excerpt: My experience using all three frameworks
---

## Angular

### The framework

Angular was the first real web framework I used. It taught me a great deal about building complex web apps. If I were to describe it in one word it would be: **structure**.

The problem however is that with structure comes both unneeded complexity (unwarranted even) and rigidity. At first this is not perceivable due to the gains in speed of development: You have less choices to make in terms of architecture, giving you more head space to devote to the problem you're trying to solve. But eventually, that'll come bite you in the ass.

You'll get locked into the angular way of doing things and by extension that of Google, which might not always be a good thing[^1]. How so? You'll be thinking about how to make things scalable from the get-go, which convention to follow, which in turn will square you into premature optimizations. I'm not saying that you won't be doing that somewhere down the line, I'm only saying that with Angular you'll be sort of forced to do them from the get-go.

### The DX

_Note: I personally used to use sublime/atom but have switched to VS Code when it first landed._

Angular being written in TS and VS Code being optimized for TS has made the experience a wonderful one.

**Want to refactor ?** Click the light bulb, then click refactor. That's it. `CTRL + ,` -> `ARROW DOWN` -> `Enter` (for keyboard fans, like me).

**Want to rename a variable?** hit `F2` -> rename the var and you're good to go. It's been renamed wherever it was referenced.

**Want to rename the file?** Just do it. It'll be updated wherever it was imported.

### The ecosystem

Out of the three, I would say Angular is the smallest (in relative numbers) which is due to it being a full fledged framework (therefore an AIO package).

## Vue

### The library

Equipped with my new learnings on structure and (debatable) scalable app architecture skills, I was looking for an escape hatch. This is where Vue shines. First there's the frenchy, chic name. Then there's the light documentation (I picked it up in a day). Lastly, and most importantly, there's the ease of use and simplicity. Everything just made sense. It just works^TM^.

The issue with simplicity however is two folds: (1) it's largely governed by "magic", which means (2) you're ceding control over some things to the library and you might not necessarily want to do that.

### The DX

It's meh at best.

### The ecosystem

Although not the biggest, it's a pretty neat one. The packages that you need in 80% of the time are there and they're pretty high quality[^2] too. For the remaining 20% I would argue that it's okay to get your hands dirty sometimes (although if you get edge cases too often maybe some reconsideration is needed?).

## React

_At first I resisted it for various reasons (one of them: it being developed by the big F). Then I decided to give it 5 minutes[^3]. Then I took the plunge..._

### The library

Having seen (and used) both extremes (_structure_ (and by extension, complexity) on one hand and _simplicity_ on the other) it seemed react didn't have that much to offer. Boy was I wrong. First of all, regardless of the tool you're using, you'll learn to think in that tool (in other words: you add a new mental model to your mental toolbox). Here's the thing though: the mental model you use acts as the lense through which you perceive code. This is particularly important when the code is meant to represent UI. React, for me, hits the sweet spot: It's not rigid as to impose some sort of structure on you, yet it's not simplistic as to abstract too much. Therefore, if I were to describe React in one word it'd be: flexibility.

### The DX

It's on par with Angular. So... great!

### The ecosystem

![YUUUUGE](https://media.giphy.com/media/fSYmbgG5Ug8S11K0FU/giphy-downsized.gif)

Basically, as far as I can tell there's only two reasons you'd want to write your own solution:

1. It's a requirement (maybe due to fit your performance budget)

2. You need something tailor-made

## Which one is the best

> Use the right tool for the job.

For me:

Is it going to be simple? --> Vue.

I consider something to be simple if it basically acts as a JSON viewer/editor.

Everything else --> React.

[^1]: [You are not Google](https://blog.bradfieldcs.com/you-are-not-google-84912cf44afb)
[^2]: Meaning: battle-tested, include good test suits, well documented and are used in the wild
[^3]: This post from SvN is a pretty good read: <https://signalvnoise.com/posts/3124-give-it-five-minutes>
