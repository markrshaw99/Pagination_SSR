
function pageXofY(x, y) {
  // 5-item version
  let five = [];
  if (y <= 5) { // If only 5 or less pages, whack them all up
    five = Array.from({ length: y }, (_, i) => ({ type: 'page', value: i + 1 }));
  } else if (x <= 3) {// show first 3, elipsis, last
    five = [
      { type: 'page', value: 1 },
      { type: 'page', value: 2 },
      { type: 'page', value: 3 },
      { type: 'ellipsis' },
      { type: 'page', value: y },
    ];
  } else if (x >= y - 2) { // show first, elipsis, last 3
    five = [
      { type: 'page', value: 1 },
      { type: 'ellipsis' },
      { type: 'page', value: y - 2 },
      { type: 'page', value: y - 1 },
      { type: 'page', value: y },
    ];
  } else { // show first, elipsis, current, elipsis, last
    five = [
      { type: 'page', value: 1 },
      { type: 'ellipsis' },
      { type: 'page', value: x },
      { type: 'ellipsis' },
      { type: 'page', value: y },
    ];
  }

  // 7-item version
  let seven = [];
  if (y <= 7) { // If only 7 or less pages, whack them all up
    seven = Array.from({ length: y }, (_, i) => ({ type: 'page', value: i + 1 }));
  } else if (x <= 4) { // show first 5, elipsis, last
    seven = [
      { type: 'page', value: 1 },
      { type: 'page', value: 2 },
      { type: 'page', value: 3 },
      { type: 'page', value: 4 },
      { type: 'page', value: 5 },
      { type: 'ellipsis' },
      { type: 'page', value: y },
    ];
  } else if (x >= y - 3) { // show first, elipsis, last 5
    seven = [
      { type: 'page', value: 1 },
      { type: 'ellipsis' },
      { type: 'page', value: y - 4 },
      { type: 'page', value: y - 3 },
      { type: 'page', value: y - 2 },
      { type: 'page', value: y - 1 },
      { type: 'page', value: y },
    ];
  } else { // show first, elipsis, prev, current, next, elipsis, last
    seven = [
      { type: 'page', value: 1 },
      { type: 'ellipsis' },
      { type: 'page', value: x - 1 },
      { type: 'page', value: x },
      { type: 'page', value: x + 1 },
      { type: 'ellipsis' },
      { type: 'page', value: y },
    ];
  }

  // 9-item version
  let nine = [];
  if (y <= 9) { // If only 9 or less pages, whack them all up
    nine = Array.from({ length: y }, (_, i) => ({ type: 'page', value: i + 1 }));
  } else if (x <= 5) { // show first 7, elipsis, last
    nine = [
      { type: 'page', value: 1 },
      { type: 'page', value: 2 },
      { type: 'page', value: 3 },
      { type: 'page', value: 4 },
      { type: 'page', value: 5 },
      { type: 'page', value: 6 },
      { type: 'page', value: 7 },
      { type: 'ellipsis' },
      { type: 'page', value: y },
    ];
  } else if (x >= y - 4) { // show first, elipsis, last 7
    nine = [
      { type: 'page', value: 1 },
      { type: 'ellipsis' },
      { type: 'page', value: y - 6 },
      { type: 'page', value: y - 5 },
      { type: 'page', value: y - 4 },
      { type: 'page', value: y - 3 },
      { type: 'page', value: y - 2 },
      { type: 'page', value: y - 1 },
      { type: 'page', value: y },
    ];
  } else { // show first, elipsis, prevprev, prev, current, next, nextnext, elipsis, last
    nine = [
      { type: 'page', value: 1 },
      { type: 'ellipsis' },
      { type: 'page', value: x - 2 },
      { type: 'page', value: x - 1 },
      { type: 'page', value: x },
      { type: 'page', value: x + 1 },
      { type: 'page', value: x + 2 },
      { type: 'ellipsis' },
      { type: 'page', value: y },
    ];
  }

  return { five, seven, nine };
}

function paginateThisBitch(x, y) {
  // Get the pagination layouts for 5, 7, and 9 items
  const { five, seven, nine } = pageXofY(x, y);

  // Helper to turn a pagination array into HTML list items
  function makeTheLists(items, currentPage) {
    return items.map(function(item) {
      // If the item is an ellipsis, output a dot
      if (item.type === 'ellipsis') {
        return '<li class="pagination__ellipsis">...</li>';
      } else {

        var isActive = (item.value === currentPage);
        var activeClass = isActive ? ' current_page' : '';
        return '<li class="pagination__item' + activeClass + '">' + item.value + '</li>';
      }
    }).join('');
  }

// Remember to add the arrows
  return (
    '<nav class="pagination">' +
      '<ul class="baby_pagination">' +
        '<li class="arrow"><span class="arrow-text">&lt;</span></li>' +
        'Page ' + x + ' of ' + y +
        '<li class="arrow"><span class="arrow-text">&gt;</span></li>' +
      '</ul>' +
      '<ul class="pagination__list zIs5">' +
        '<li class="arrow"><span class="arrow-text">&lt;</span></li>' +
        makeTheLists(five, x) +
        '<li class="arrow"><span class="arrow-text">&gt;</span></li>' +
      '</ul>' +
      '<ul class="pagination__list zIs7">' +
        '<li class="arrow"><span class="arrow-text">&lt;</span></li>' +
        makeTheLists(seven, x) +
        '<li class="arrow"><span class="arrow-text">&gt;</span></li>' +
      '</ul>' +
      '<ul class="pagination__list zIs9">' +
        '<li class="arrow"><span class="arrow-text">&lt;</span></li>' +
        makeTheLists(nine, x) +
        '<li class="arrow"><span class="arrow-text">&gt;</span></li>' +
      '</ul>' +
    '</nav>'
  );
}

// Export for the node build page stuff
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { paginateThisBitch };
}
