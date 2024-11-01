let book =[
    {
        title: 'Harry Potter',
        author: "J.K. Rowling",
        rating: 6
    },
    {
        title: 'Mortal Instruments',
        author: "Cassandra Clare",
        rating: 8
    },
    {
        title: 'FrostBlood Saga',
        author: "Elly Blake",
        rating: 7
    },
    {
        title: 'Red, White, and Royal Blue',
        author: "Casey McQuiston",
        rating: 6
    },
    {
        title: 'Spitfire',
        author: "Maya Kern",
        rating: -1
    }

];
window.onload = function(){
    displayTable();
}


function displayTable(){
    let dsp = document.getElementById("books");
    dsp.innerHTML= "";
    let tbl= document.createElement("table");
    let trh = tbl.insertRow();
    let th1 = trh.insertCell();
    th1.textContent= "Title";
    
    let th2 = trh.insertCell();
    th2.textContent="Author";

    let th3 = trh.insertCell();
    th3.textContent="Rating";
    dsp.appendChild(tbl);
   /*  tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tbl.appendChild(tr); */

    for (let i = 0; i< book.length; i++){
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent =book[i].title;
        tr.appendChild(td1);

        let td2 = document.createElement("td")
        td2.textContent = book[i].author;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent= book[i].rating;
        tr.appendChild(td3);
        tbl.appendChild(tr);
        dsp.appendChild(tbl);
    }
    
}
/* function displayNew(){
    let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent =bookObj[i].title;
        tr.appendChild(td1);

        let td2 = document.createElement("td")
        td2.textContent = bookObj[i].author;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent= bookObj[i].rating;
        tr.appendChild(td3);
        tbl.appendChild(tr);
        dsp.appendChild(tbl);
} */
document.getElementById("btnSubmit").onclick = function(){
    let t= document.getElementById("title").value;
    let a=  document.getElementById("author").value;
    let r= document.getElementById("rating").value;
    let bookObj= {title:t, author:a, rating:"TBD" +r}
    book.push(bookObj);
    displayTable();
}
