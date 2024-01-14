function Hitung(){
    var Panjang = document.getElementById ('Panjang').value;
    var Lebar = document.getElementById ('Lebar').value;

    var Luas = panjang*lebar;
    document.getElementById('Luas').innerHTML = Luas;
}

function Keliling(){
    var Panjang = +document.getElementById ('Panjang').value;
    var Lebar = +document.getElementById ('Lebar').value;

    var Keliling = 2*(Panjang+Lebar);
    document.getElementById('Keliling').innerHTML = Keliling;
}