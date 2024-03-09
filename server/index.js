const express = require("express");
const app = express();
const PORT = 5000;

const http = require("http").Server(app);
const cors = require("cors");
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.get("api", (req, res) => {
  res.json({
    message: "hello",
  });
});

let users = [];
let films = [];
let filmsPlate = [];

io.on("connection", (socket) => {
  socket.on("UserReconection", (SessionstorageUser, filmSession) => {
    console.log(
      `${SessionstorageUser.userName} with soket ${SessionstorageUser.socketID} user Reconnected in ${SessionstorageUser.lobbyID} lobby`
    );
    users.push(SessionstorageUser);
    films.push(...filmSession);
    filmsPlate = films;
    lobbyUsers = users.filter(
      (user) => user.lobbyID === SessionstorageUser.lobbyID
    );
    io.to(SessionstorageUser.lobbyID).emit(
      "responseUserReconection",
      lobbyUsers
    );
  });

  socket.on("newFilm", (data) => {
    films.push(data);
    filmsPlate.push(data);
    lobbyFilms = films.filter((film) => film.lobbyID === data.lobbyID);
    io.to(data.lobbyID).emit("responseNewFilm", lobbyFilms);
  });

  socket.on("filmUpdate", (data, film) => {
    films = data;
    filmsPlate = data;
    console.log(film.lobbyID);
    lobbyFilms = films.filter((film) => film.lobbyID === film.lobbyID);
    io.to(film.lobbyID).emit("responeFilmUpdate", lobbyFilms);
  });

  socket.on("filmDelete", (data) => {
    filmsDelete = films.filter((film) => film.id !== data.id);
    films = filmsDelete;
    lobbyFilms = films.filter((film) => film.lobbyID === data.lobbyID);
    io.to(data.lobbyID).emit("responeFilmDelete", lobbyFilms);
  });

  socket.on("RefreshGameFilms", (params) => {
    filmsPlate = [...films];
    lobbyFilms = filmsPlate.filter((film) => film.lobbyID === params.id);
    io.to(params.id).emit("RefreshFilms", lobbyFilms);
    console.log(lobbyFilms);
  });

  socket.on("join", (lobbyID) => {
    socket.join(lobbyID);

    socket.on("newUser", (data) => {
      console.log(`${data.userName} user connected in ${lobbyID} lobby`);
      users.push(data);
      io.to(lobbyID).emit("userConnected", `${data.userName} Подключился`);
    });
    lobbyFilms = films.filter((film) => film.lobbyID === lobbyID);
    lobbyUsers = users.filter((user) => user.lobbyID === lobbyID);
    io.to(lobbyID).emit("responseNewUser", lobbyUsers, lobbyFilms);

    socket.on("disconnect", () => {
      console.log(`${socket.id} disconnect`);

      updUsers = users.filter((user) => user.socketID !== socket.id);
      users = updUsers;
      lobbyUsers = users.filter((user) => user.lobbyID === lobbyID);
      io.to(lobbyID).emit("updateUserDisconnected", lobbyUsers);
      console.log(users);

      updFilms = films.filter((film) => film.socketID !== socket.id);
      films = updFilms;
      lobbyFilms = films.filter((film) => film.lobbyID === lobbyID);
      io.to(lobbyID).emit("updateUserDisconnectedFilms", lobbyFilms);
      console.log(films);
    });
  });

  socket.on("RandomCardOutGame", (data, params) => {
    updFilms = filmsPlate?.filter((film) => film.id !== data);
    filmsPlate = updFilms;
    lobbyFilms = filmsPlate.filter((film) => film.lobbyID === params.id);
    io.to(params.id).emit("responseRandomCardOutGame", lobbyFilms);
    io.to(params.id).emit("responseDroppedOutID", data);
  });

  socket.on("RandomWheelGame", (params) => {
    socket.on("MustSpin", (data) => {
      io.to(params.id).emit("responseMustSpin", data);
    });
    socket.on("PrizeNumber", (data) => {
      io.to(params.id).emit("responsePrizeNumber", data);
    });
    socket.on("RemoveFilm", (data) => {
      updFilms = filmsPlate?.filter((film) => film.id !== data);
      filmsPlate = updFilms;
      lobbyFilms = filmsPlate.filter((film) => film.lobbyID === params.id);
      io.to(params.id).emit("responseRandomWheelGame", lobbyFilms);
    });
  });

  socket.on("MysteryCard", (data, params) => {
    socket.on("HideWinner", (bool, filmID) => {
      lobbyFilms = filmsPlate.filter((film) => film.lobbyID === params.id);
      io.to(params.id).emit("responseHideWinner", bool, filmID);
    });
    updFilms = filmsPlate?.filter((film) => film.id !== data);
    filmsPlate = updFilms;
    lobbyFilms = filmsPlate.filter((film) => film.lobbyID === params.id);
    io.to(params.id).emit("responseMysteryCard", lobbyFilms);
  });
});

http.listen(PORT, () => {
  console.log(`Server working at port ${PORT}`);
});
