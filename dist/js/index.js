let checbox = document.querySelectorAll('.checkbox-input');
checbox.forEach((item, i, arr) => {
    arr[i].addEventListener('click', function() {
        
        item.classList.toggle('checkbox-input_black');
        item.classList.toggle('checkbox-input_green');
        console.log(item);
    });
});
