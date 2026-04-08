let data = [];

const csv = `name,starter,main_dish ,dessert 
Domokos Domokos Esztergár-Kiss,Onion soup,Black pudding shepherd's pie,Yes
Hana Gharrad,Lentil Salad,Salmon tournedos,Yes
Maria Vittoria Ballirano ,Butternut squash soup,Quenelle,No
Louafi Bouzouina,Lentil Salad,Skate wing,Yes
Golnoosh Ghiyaei,Onion soup,Honey and spiced pork ribs,Yes
Valerio De Martinis,Lentil Salad,Salmon tournedos,Yes
Lukas Barthelmes,Onion soup,Salmon tournedos,No
Amir Sarrafzadeh,Lentil Salad,Honey and spiced pork ribs,Yes
Stefanie Kern  (without Parmesan, please - its not vegetarian),Butternut squash soup,Mushroom linguine,No
Lory,Butternut squash soup,Beef Tartare,Yes
Isabel Cunha,Onion soup,Salmon tournedos,No
Ouassim Manout,Onion soup,Salmon tournedos,No
Taylan Gunay,Butternut squash soup,Skate wing,Yes
Sevket Oguz Kagan Capkin,Onion soup,Beef Tartare,Yes
Francesco Alfonsi ,Butternut squash soup,Beef Tartare,Yes`;

data = parseCSV(csv);
// Parse CSV
function parseCSV(text) {
    const rows = text.trim().split('\n').slice(1);
    

    return rows.map(row => {
        const [name, starter, main, dessert] = row.split(',');
        return { name, starter, main, dessert };
    });
}


// Render list
function renderList(data) {
    const list = document.getElementById("menu-list");
    console.log(data);
    data.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item custom-item";
        li.innerText = item.name;
       

        li.onclick = () => {
            selectItem(index);
        };

        list.appendChild(li);
    });
}

// Select item
function selectItem(index) {
    const item = data[index];

        document.querySelectorAll(".custom-item").forEach(el => {
        el.classList.remove("active");
    });

    document.querySelectorAll(".custom-item")[index].classList.add("active");
    // highlight active
    // document.querySelectorAll("#menu-list li").forEach(li => li.classList.remove("active"));
    // document.querySelectorAll("#menu-list li")[index].classList.add("active");

    // fill table
    document.getElementById("d-name").innerText = item.name;
    document.getElementById("d-starter").innerText = item.starter;
    document.getElementById("d-main").innerText = item.main;
    document.getElementById("d-dessert").innerText = item.dessert;

    document.getElementById("details-table").classList.remove("d-none");
}