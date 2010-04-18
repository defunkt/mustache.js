var higher_order_sections = {
  "name": "Tater",
  "bolder": function() {
    return function(text, render) {
      return "<b>" + render(text) + '</b>'
    }
  }
}