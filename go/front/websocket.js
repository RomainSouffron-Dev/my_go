$(document).ready(function () {
  const socket = new WebSocket('ws://127.0.0.1:8080/ws')
  console.log('Attempting Connection...')

  socket.onopen = () => {
    console.log('Successfully Connected')
    socket.send('Hi From the Client!')
  }

  socket.onclose = event => {
    console.log('Socket Closed Connection: ', event)
    socket.send('Client Closed!')
  }

  socket.onerror = error => {
    console.log('Socket Error: ', error)
  }
  socket.onmessage = msg => {
    $('#listMessage').append(`<li>${msg.data}</li>`)
  }


  
  $('#submit').on('click', function () {
    let value = $('#msg').val()
    socket.send(value)
    value = ''
  })
})
