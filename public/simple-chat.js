var socket = io();

socket.on('welcome', function(data) {
$('<li>').text(data.message).appendTo('#message-log');
  alert(data.message);
})

$('#chat-send').on('click', function() {
  var text = $('#chat-text').val();
  socket.emit('message', {message: text});
  $('#chat-text').val('');
})
var connected = 0;

io.on('connection', function(socket){

  console.log("A user");
  connected++;
  socket.emit('welcome', {message: "welcome new user " + connected});
})


function handleRequest(req, res) {


}
