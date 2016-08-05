var BookResults = Backbone.PageableCollection.extend({
    model: BookResult,
    queryParams: {
        currentPage: 'selected_page',
        pageSize: 'num_records'
    },
    state: {
        firstPage: 0,
        currentPage: 5,
        totalRecords: 500
    },
    url: 'www.example.com/api/book_search_results'
});