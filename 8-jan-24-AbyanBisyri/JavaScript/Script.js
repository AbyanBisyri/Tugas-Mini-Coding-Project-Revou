function HitungLuas() {
    const Sisi = document.getElementById('Sisi').value;
    const Luas = Sisi * Sisi;
    const outputText = `Luas = ${Sisi} x ${Sisi} = ${Luas}`;
    document.getElementById('Luas').innerText = outputText;}

function ResetInput1() {
    document.getElementById('Sisi').value = '';
    document.getElementById('Luas').innerText = '';}

function HalamanIni() {
    window.location.href = 'Luas.html';
}

function HalamanKeliling() {
    window.location.href = 'Keliling.html';}

function HitungKeliling() {
    const Sisi = document.getElementById('Sisi').value;
    const Keliling = 4 * (Sisi) ;
    const outputText = `Keliling = 4 x (${Sisi}) = ${Keliling}`;
    document.getElementById('Keliling').innerText = outputText;
}

function resetInput2() {
    document.getElementById('Sisi').value = '';
    document.getElementById('Keliling').innerText = '';}