const path = require("path");
const express = require("express");

//setting up express session for loggedIn
const session = require("express-session");

//Setting up handlebars
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

//using env variables to set up connect
const sequelize = require("./config/connection.js");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//Creating helpers that can be changed later
const hbs = exphbs.create({
  helpers: {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  }
});

//Hanldebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require('./controllers/'));

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
  sequelize.sync({ force: false });
});