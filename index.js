const propsItems = document.querySelectorAll('.props_bar-item');
const infoContainer = document.querySelector('.info_list');
console.log(propsItems);
propsItems.forEach(item => {
    item.addEventListener('click', e => {
        if(!e.target.classList.contains('active')){
            removeClass();
            item.classList.add('active')
            if(item.classList.contains('education')) {
                infoContainer.innerHTML = `
                    <li class="info_list_item">Получатель ГВУЗ «АКТИ»</li>
                    <li class="info_list_item">МФО 834016 в ГУДКСУ в Донецкой обл.</li>
                    <li class="info_list_item">Р/С 31250201111050</li>
                    <li class="info_list_item">ОКПО 01116199</li>
                    <li class="info_list_item">В НАЗНАЧЕНИИ ПЛАТЕЖА УКАЗЫВАТЬ ПОЛНОСТЬЮ ФАМИЛИЮ, ИМЯ, ОТЧЕСТВО СТУДЕНТА, А ТАКЖЕ НОМЕР ГРУППЫ.</li>
                `
            } else if(item.classList.contains('hostel')) {
                infoContainer.innerHTML = `
                    <li class="info_list_item">Получатель ГВУЗ «АКТИ»</li>
                    <li class="info_list_item">МФО 834016 в ГУДКСУ в Донецкой обл.</li>
                    <li class="info_list_item">Р/С 31257201211050</li>
                    <li class="info_list_item">ОКПО 01116199</li>
                    <li class="info_list_item">В НАЗНАЧЕНИИ ПЛАТЕЖА УКАЗЫВАТЬ ПОЛНОСТЬЮ ФАМИЛИЮ, ИМЯ, ОТЧЕСТВО СТУДЕНТА, А ТАКЖЕ НОМЕР ГРУППЫ.</li>
                `
            } else if (item.classList.contains('charity')) {
                infoContainer.innerHTML = `
                    <li class="info_list_item">Получатель ГВУЗ «АКТИ»</li>
                    <li class="info_list_item">МФО 834016</li>
                    <li class="info_list_item">Р/С 31257201211050</li>
                    <li class="info_list_item">р/сч 31257301111050 в ГУГКСУ в Донецкой области</li>
                    <li class="info_list_item">В назначении платежа указывать благотворительная помощь.</li>
                `
            }
        }
    })
})

function removeClass() {
    propsItems.forEach(item => item.classList.remove('active'))
}