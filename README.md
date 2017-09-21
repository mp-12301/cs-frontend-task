# cs-frontend-task

Live demo running [here](https://cs-frontend-task.herokuapp.com/)
(Takes quite a few seconds to load.)
## Thoughts

- There were two reasons why React was chosen over Angular. First one, I have 0 experience with Angular so it was easy to go with React. Second, it does make sense to me to use React in this task if we are building a component (Circular Score). Angular does not make much sense if we are displaying visual components, I see Angular as a more fit choice over elaborated projects that deal with state. You could even use React components with Angular.
- I did as best as I could using a pure HTML CSS solution trying to avoid Javascript. My CSS skills are quite weak and I couldn't have managed to have the blurry blackground, with more time I believed I could have achieved that. Also regarding having a responsive visual, again, with more time I could have done it better.
- The bouncy effect at the end, I believe you really have to use Javascript with that. There were a lot of options, if I was going for a MVP on the rush, I would have used the ProgressBar.js library[ (example here)](https://jsfiddle.net/kimmobrunfeldt/3pxvkq2d/). With more time, I could possibly use a more specific animation smaller library to achieve the same effect with [tween.js](https://github.com/tweenjs/tween.js/)


## Installation

```
git clone --depth 1 https://github.com/mpereira96/cs-frontend-task project
cd project
cp .env-example .env
npm install
```

## Usage

```
npm start                   # start server
npm run start:dashboard     # start server using webpack-dashboard
npm run build               # production build (remember to build with NODE_ENV=production)
```


