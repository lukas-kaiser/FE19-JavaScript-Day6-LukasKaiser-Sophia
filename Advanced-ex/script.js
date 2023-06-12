let books = `[{
"title": "Moby Dick",
"author": "Herman Melville",
"read": true,
"image": "images/mobydick.jpg"
},{
"title": "Blood Meridian",
"author": "Cormac McCarthy",
"read": false,
"image": "images/bloodmeridian.jpg"
},{
"title": "It",
"author": "Stephen King",
"read": true,
"image": "images/it.jpg"
},{
"title": "Watership Down",
"author": "Richard Adams",
"read": false,
"image": "images/watership.jpeg"
},{
"title": "Johnny Got His Gun",
"author": "Dalton Trumbo",
"read": true,
"image": "images/johnny.jpg"
},{
"title": "Lord of the Flies",
"author": "William Goulding",
"read": true,
"image": "images/flies.jpg"
},{
"title": "11.22.63",
"author": "Stephen King",
"read": true,
"image": "images/kennedy.jpg"
},{
"title": "War and Peace",
"author": "Leo Tolstoy",
"read": true,
"image": "images/war.jpg"
}
]`

let booksParsed = JSON.parse(books);
console.table(booksParsed);

const content = document.getElementById("content");

for (let book of booksParsed) {
    if(book.read == true){
    content.innerHTML +=`
    <div class="bg-success" style="width: 12rem; height: 12rem;">
  <img src="${book.image}" class="card-img-top h-50 object-fit-contain" alt="${book.title}">
  <div class="card-body">
    <p class="card-title pt-4">${book.title} by ${book.author}</p>
  </div>
</div>
    `
    } else{
        content.innerHTML +=`
        <div class="bg-danger" style="width: 12rem; height: 12rem;">
        <img src="${book.image}" class="card-img-top h-50 object-fit-contain" alt="${book.title}">
        <div class="card-body">
          <p class="card-title pt-4">${book.title} by ${book.author}</p>
        </div>
      </div>
          `
    }
}