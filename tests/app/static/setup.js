var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam odio, tempor a nisi in, sollicitudin vestibulum arcu. Proin suscipit tellus sit amet ultricies interdum. Duis justo odio, rhoncus eget elit et, egestas porta purus. Maecenas et ultricies turpis. Pellentesque vel neque non enim luctus molestie sed vitae erat. Donec semper, velit non gravida iaculis, velit sem pharetra urna, a euismod massa ex at massa. In a nulla diam. Proin imperdiet nisl blandit semper venenatis. Pellentesque pretium quis velit id efficitur. Aenean sed lacinia metus. Phasellus id est vehicula, egestas turpis eu, tempus leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Aenean non blandit ligula.';

text = 'testitem';

function generateItem(index) {
  var item = document.createElement('div');
  var content = document.createElement('p');
  var title = document.createElement('h3');
  content.innerText = text;
  title.innerText = 'Item ' + index;
  item.setAttribute('data-item-id', index);
  item.classList.add('item');
  item.appendChild(title);
  item.appendChild(content);
  return item;
}

var items = [];

var i = 1;
for (; i <= 8; i++) {
  var item = generateItem(i);
  document.getElementById('top-items').appendChild(item);
  items.push({
    id: i,
    el: item
  });
}
for (; i <= 16; i++) {
  var item = generateItem(i);
  document.getElementById('scroll').appendChild(item);
}
for (; i <= 32; i++) {
  var item = generateItem(i);
  document.getElementById('bottom-items').appendChild(item);
}
