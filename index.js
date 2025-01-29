const nhap = document.getElementById('nhap');
const nut = document.getElementById('nut');
const nhap_nut = document.getElementById('nhap_nut')
const list = document.getElementById('list');
const checkedImg = document.createElement('img')
checkedImg.src ='/Green-Tick-PNG-Pic.png'


const removeEle = element => {
    element.remove()
}

nhap_nut.onsubmit = (event) => {
    event.preventDefault()
    if (nhap.value !== '') {
        const li = document.createElement('li');
        const huy = document.createElement('span');
        huy.innerHTML = '\u00d7'
        list.appendChild(li);
        li.innerText = nhap.value;
        li.appendChild(huy)
        nhap.value = ''
        huy.onclick = () => {
            li.remove()
        }
        li.onclick = () => {
            li.classList.toggle('checked')
        }

    }
}
