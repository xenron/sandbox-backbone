var BookResultsGrid =  Backgrid.Grid.extend();
var grid = new BookResultsGrid({
    columns: [
        {name: 'bookTitle', label: 'title', cell: 'string'},
        {name: 'numPages', label: '# of Pages', cell: 'integer'},
        {name: 'authorName', label: 'Name of the Author',
         cell: 'string'}
    ],
    collection: bookResults
});
grid.render();