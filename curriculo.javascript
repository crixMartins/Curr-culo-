function toggleMoreInfo() {
    var moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        event.target.textContent = 'Mostrar Menos';
    } else {
        moreInfo.style.display = 'none';
        event.target.textContent = 'Mostrar Mais';
    }
}
