Phrase Norris
===

## Objective

We want to have an Application where we can fetch 10 Random Chuck Norris jokes. These jokes can be fetch from the following API http://api.icndb.com/jokes/random/10.
When these jokes are fetched via a button they need to be displayed in a list. In this list we can mark certain jokes as favourite. The favourite jokes will appear in a favourites list with a max of 10 (unique) items. There should be an option to remove jokes from the favourite list as well.
On refresh the favourites lists should be maintained.
We can also turn on/off a timer via a button (every 5 seconds) who will add one random joke to the favourites list http://api.icndb.com/jokes/random/1 until the list has 10 items.

## Start
The project can start by only runnning `yarn start`

## Test
For testing I used jest as convention to test the reducers.

All tests can be seing by running yarn test

## Decisiones made

The main decision to face was not be able to use any boilerplate, so I decided to go for `React` as a main library, `Redux` as state manager, and `webpack` for the bundling of the files.

### Architecture
The decision of using [Redux](https://redux.js.org/) was made due the simpleness that provides for the managment of the state. To make this more confortable and code friendly I used [redux_sauce](https://github.com/infinitered/reduxsauce) because it provides an alternative by creating the Actions and Reducers in a single file and make the sintax better to look at due that the switch case dissapears. Along with is I decided to use [seamless-immutable](https://github.com/rtfeldman/seamless-immutable) for make the state completely immutable and brevity on the sintax.

To make the debugging and follow through of the application I used [redux-logger](https://github.com/evgenyrodionov/redux-logger) because, in my opinion, it gives you one of the best step by step of what is going on with the app.

For the API calls I decided to use [redux-sagas](https://github.com/redux-saga/redux-saga) as a middleware to handle them. The idea of this is to, through the effects that redux-sagas provides, make easier the interaction with API calls giving you the chance to use any library you want. In my case I used [apisauce](https://github.com/infinitered/apisauce) that provides you an API interface for using `axios` and be able to handle the errors properly.

One of the requirements was also to mantain the state of the application when refreshing the browser, for that I used [redux-persist](https://github.com/rt2zz/redux-persist) that combined with this [library](https://github.com/hilkeheremans/redux-persist-seamless-immutable) by only having the basic configuration the requirement was covered.



