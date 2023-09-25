# helloReactjs

hello reactjs
npm: npm is node package manager, it manages the packages
npm: it is a standared repositary for all the packages, its one of the biggest package manages , it hosted all pakcages over there.

1. npm init
2. package.json file is configiration of npm
3. npm take care of what is the version of the packges
4. we can get the packges from npm
5. it is track keep of all the packages our code is use
   bundler: whole code to be monified, or bundled , or clened, before send to production.
   some bundlers: webpack, parcel, vite. bundler used to push
   parcel: it is one of the best bulder it is
   FOR installing parel: npm install -D parcel

there are two dependencies app can have 1. dev dependenceis and normal dependeces
dev: it is requires in developement phase
normal: it is requires in production phase

"parcel": "^2.9.3" what is ^ and ~
^= suppose if now minor version develop it put caret parcel automatically update the to latest version.
~= it will install major version.

what is package-lock.json?
ans:keeps track of exact version of that package that has being installed

parcel uses all packages and dependences on many packages

if we have package.json and package-lock.json we should regenerate all nodemodules so dont want to push node modules to git hub.

to igniting our app command is: npx parcel index.html

npx means executing the package
npm command used when download the package

install react:: npm install react
install react dom=npm install react-dom
after importing the above two we will gets an error.

parcel: development bundler 2. it creates a local server 3. automatically refreshing the pages

for creating production build npx parcel build index.html will get error for that we have to remove main=app.js in the package.json
// when execute parcel index.html it generates the development build it hosted on in 1234 and pust the code in dist folder and code comes from dist.

jsx: it HTML or XML like syntax , its just syntax
jsx transpiled before it reaches the js engine it is done by babel

babel: its job is transplied the jsx into browser understandble format.

if we working on a new project how to run or how to build project, go to package.json and find scripts object will get the exact commands over there.

npm start, or npm run start
for building npm run build.

config driven UI:controling the UI using data,or conig that data or config comes from backend.
why we need keys:

///////////
useState();
when ever state variable method update react will render the compnent
why react fast: react will make dom opertion very fast thats why react fast.
=>react very good at dom operation.

what is react algorthim:
=>react use reconialation algorthim it is also knon as react fiber.
=> on the UI we have dom
for example we have restContainer have 15 cards over there suppose
=> now ui changes 15 cards to 5 filter cards what react do and why react fast becase
=> first it creates a virtual dom virtul dom is not actual dom
=> virtual dom is representation the actual dom
=> virtual dom is basically on react elements or objects.

diff algorthim:
for example first we have 15 cards when we write logic to remove 10 cards when ever state varible changes anothor virtual dom crates and it finds the differences between first virtual dom and second virtual and its automatically updates the changed virtual dom.
finds out the differents between two virtual doms and updates the changed virtual dom.
this whole algorthim is react fiber

::there two approachs for fetching the data:

first way: as soon as page loads we make api call and after getting data we reder it on the webpage.
loads->api calll->render
it is not good approach

second way: as soon as the page loads we will just render UI now will make api as soon as data comes from api then render the data.
loads->render->api call->render data again

useEffect() hook is function will take two arguments first argument is call back function
and dependeces
when will useEffect call back function be called
the call back function will be called after comonent render

//shimmer effect

why we use state variable insted of normal variable?
when ever state varible updates react rerender the component

virtual dom is not making the react fast , the react fiber which finds out the difference between two virtual doms and updates the only portion is required.
react router dom
=> npm install react-router-dom
import crateBrowserRouter=> takes a lists of path in objects
{
path:"/"
}
