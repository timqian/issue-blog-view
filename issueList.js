var dq = document.querySelector.bind(document)
var dqA = document.querySelectorAll.bind(document)

var removeThem = ['div.header', 'div.container nav']
removeThem.forEach(item => {
  dq(item).style.display = 'none'
})

dqA('div.float-left.pt-3.pl-3').forEach(el => {
  el.style.display = 'none'
})
