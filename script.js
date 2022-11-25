var array = [
    {
        id: "1",
        title: "blabla",
        autor: "farhan",
        editora: "pakistan",
        preco: "10"
    },
    {
        id: "2",
        title: "blabla2",
        autor: "farhan2",
        editora: "pakistan2",
        preco: "102"
    },
    {
        id: "3",
        title: "blabla3",
        autor: "farhan3",
        editora: "pakistan3",
        preco: "103"
    },
    {
        id: "4",
        title: "blabla4",
        autor: "farhan4",
        editora: "pakistan4",
        preco: "104"
    },
    {
        id: "5",
        title: "blabla5",
        autor: "farhan5",
        editora: "pakistan5",
        preco: "105"
    },
    
]

// show table data

function showtable(curarray) {

    document.getElementById("mytable").innerHTML = `
        <tr class="bg-primary text-black fw-bold">
            <td>Título</td>
            <td>Autor</td>
            <td>Editora</td>
            <td>Preço</td>
        </tr>
    `;

    // for checking array is empty

    if (curarray == "") {
        document.getElementById("error").innerHTML = `<span class="text-danger">Não Encontrado!</span>`
    } else {
        document.getElementById("error").innerHTML = "";
        
        for (var i = 0; i < curarray.length; i++ ) {
            document.getElementById("mytable").innerHTML += `
                <tr>
                    <td>${curarray[i].title}</td>
                    <td>${curarray[i].autor}</td>
                    <td>${curarray[i].editora}</td>
                    <td>${curarray[i].preco}</td>
                </tr>
            `
        }
    }
}

// calling show table data method
showtable(array)

// take filtered data arrray

var newarray = [];

// for searching method

document.getElementById("search").addEventListener("keyup", function(){

    var search = this.value.toLowerCase();

    newarray = array.filter(function (val) {
        if (val.title.includes(search) || val.autor.includes(search) || val.editora.includes(search) || val.preco.includes(search)) {
            var newobj = {title : val.title, auto : val.autor, editora : val.editora, preco : val.preco}
            return newobj;
        }
    })

    showtable(newarray)

})

