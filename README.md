# Animate
Simple web animation tool to create CSS animations and export them in different formats.

#### Website: 
https://animate-theta.vercel.app
#### Storybook:
https://animate-story.vercel.app

## Tech Stack 
#### Next.js
Pros:
- Create react app missing loads of features such as proper image tag, routing, SEO
- Next js gives api routes, easy deployment set up, plugins
Cons: 
- SSR is a pain sometimes, as server does not have browser environment
- Some libraries does not work out of the box using SSR

Alternatives: 
- Create react app
- Gatsby
#### Typescript
Pros:
- Static typing
- Autocompletion 
- Javascript is spaghetti
- Easy refactor and code changes
- Less bugs in runtime
- Type safety
- New features are available faster

Cons: 
- Build step

Alternatives:
- Flow
- Javascript
- Flask
#### React
Pros: 
- Developer experience 10x
- JSX
- Multitude of libraries to use

Cons: 
- SEO is bad
- Loads of javascript to run, so usually slower than just vanilla
- State management

Alternatives:
- Svelte
- Vanilla
- Vue
#### Jest
Pros:
- Works well with Typescript
- Simulate browser DOM
- Can simulate events

Cons:
- Memory usage is high
- Slower compared to other alternatives
- Problems in CI

Alternatives:
- Mocha
- Ava

#### Monaco Editor
Pros: 
- Built in tools for autocomplete, highlight and linting
- Uses service workers to make the editor faster

Cons:
- Custom webpack config which disables some of next js optimization
- Large code to load, takes some time

Alternatives:
- Ace editor
- React Simple Code Editor Prism
- Text Area

#### Styled Components
Pros:
- CSS in JS
- Control CSS easily with JS
- Context with variables access anywhere
- Unique class names, so no clashing
- SCSS Syntax
- Scoped CSS

Cons:
- Way slower than pure CSS
- Gets too cluttered if not separated properly

Alternatives:
- Emotion
- Stitches
- Vanilla CSS in JS
- Tailwind
- CSS
#### Radix UI
Pros:
- Easily configurable
- Super accessible
- Not opinionated
- Controlled and uncontrolled versions

Cons:
- Not a lot of component varieties

Alternatives:
- Material UI
- Chakra UI
- Ant Design 
