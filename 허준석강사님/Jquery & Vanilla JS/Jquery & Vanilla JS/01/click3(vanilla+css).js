var btn = document.querySelectorAll('.gnb>li>a');
for (i = 0; i < btn.length; i++) {
    var item = btn[i];
    item.addEventListener('click', function () {
        var open = this.nextElementSibling.classList.contains('on');
        if (!open) {
            var allSub = document.querySelectorAll('.sub');
            for (i = 0; i < allSub.length; i++) {
                var item_1 = allSub[i];
                item_1.classList.remove('on');
            }
            this.nextElementSibling.classList.add('on');
        }
        else {
            this.nextElementSibling.classList.remove('on');
        }
    });
}