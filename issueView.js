var dq = document.querySelector.bind(document)

var removeThem = ['div.header', 'div.container nav', 'span.gh-header-number',
  '#partial-discussion-sidebar > div', '.sidebar-milestone', '.sidebar-assignee']
removeThem.forEach(item => {
  dq(item).style.display = 'none'
})

dq('div.flex-table').innerHTML = ''

dq('textarea').style['max-height'] = '1000px'
dq('textarea').style['min-height'] = '500px'
