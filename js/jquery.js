/* 
jQuery is a javaScript file that you include in your web pages. It lets you find elements using CSS-style selectors and then do something with the element using jQuery methods.

1. Find elements using CSS-style selectors = $('li.hot')
2. Do something with the element using jQuery methods = $('li.hot').addClass('complete')

Key Differences from DOM:
1. no need to add fallback code
2. use CSS-style to select elements
3. Event handling is simpler one method that works all browser
4. no need to loop through each one element
5. additional methods are provided for popular required tasks such as animations 
6. can apply multiple methods to a selection

*/


// Function example to add new content
$(function () {
    $('ul').before('<p class="notice">Just updated</p>'); // acrescentar esse texto
    $('li.hot').prepend('+ '); // todos elementos com essa classe adicionar +
    var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>'); // novo item
    $('li:last').after($newListItem); 
});