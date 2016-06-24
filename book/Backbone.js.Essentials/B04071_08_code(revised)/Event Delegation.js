$(document.body).append('<table><tr><td></td></tr></table>');
$('td').on('click', function(e) {
    e.target; // will be the td element
    e.currentTarget; // will also be the td element
});
$('tr').on('click', function(e) {
    e.target; // will still be the td element
    e.currentTarget; // will be the tr element
});
$('table').on('click', function(e) {
    e.target; // will still be the td element
    e.currentTarget; // will be the table element
});
$('td').click(); // first the td handler will trigger, then the tr
                 // handler, and finally the table handler