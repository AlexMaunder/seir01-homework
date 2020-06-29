const fetchBook = function (search) {

  const xhr = new XMLHttpRequest();
  console.log(search)
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ search }`);
  xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      const p = document.createElement('p');
      const data = JSON.parse(xhr.responseText);
      console.log(data);

      p.innerHTML = data.items[0].volumeInfo.title;
      document.body.appendChild(p);

      const img = document.createElement('img');
      img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
      document.body.appendChild(img)
    }

};

document.getElementById('searchButton').addEventListener('click', function () {
  fetchBook(document.getElementById('searchbar').value);
});
