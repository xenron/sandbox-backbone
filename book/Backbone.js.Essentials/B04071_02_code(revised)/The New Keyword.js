var simpleBook = {currentPage: 3, pages: 60};
simpleBook.turnPage = function() {
    this.currentPage += 1;
    return this.currentPage;
}
simpleBook.turnPage(); // == 4



var testGlobalThis = function() {
    alert(this);
}
testGlobalThis(); // alerts window