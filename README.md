
# Snippet Sharer - Front End Client
![Imgur](http://i.imgur.com/lXR7jTU.png)
<br>

## Purpose and Funcationality

A Single Page Application built with react and redux that aggregates code snippets and provides a text field that mimics the behavior of a text editor (syntax highlighting (only javascript is currently suppoerted), etc).


<br>

The application has limited functionality presently, as I have been unable to implement streaming code editing due to some issues deploying my web socket server.

<br>

[Frontend repository]( https://github.com/paulsevere/snippet-sharer) >> [Deployed frontend](https://paulsevere.github.io/snippet-sharer) <br>

[Backend repository](https://github.com/paulsevere/express-backend) >> [Deployed backend](https://snippet-server-app.herokuapp.com)


## FrontEnd Technologies Used

- jQuery
- React
- Redux
- Redux-Thunk
- Material-UI Components




## Development Process

1. Brainstorm layout and develop wireframes.
2. Struggle with namespaced socket server deployment

2. Map basic structure of Redux Store and React Containers
3. Create required API Calls and corresponding Redux Actions
4. Create individual presentational UI components
5. Fill containers with components and ensure access to needed action creators and state items.
6. Polish UI style using "material-ui" react component library.


## User Stories

As a user I want to be able to retrieve snippets created by all other users.<br>
As a user I want to be able to create snippets and persist them in a database<br>
As a user I want to be able to change my snippets text and title.<br>
As a user I want to be able to delete my snippets.<br>
<br>

### Wire Frames:
<br>

![Table-View](http://i.imgur.com/ZhKcIFn.png)
<br>
<br>
![Editor-View](http://i.imgur.com/FZIyhvc.png)


##### Initial Data Modeling Concepts<br>
[ERD](http://i.imgur.com/TDTTEL9.png)
<br>
