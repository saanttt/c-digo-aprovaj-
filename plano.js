// ===============================
// MENU LATERAL
// ===============================

const itensMenu = document.querySelectorAll(".menu-item");

itensMenu.forEach(function(item) {

    item.addEventListener("click", function() {

        itensMenu.forEach(function(outroItem) {
            outroItem.classList.remove("ativo");
        });

        item.classList.add("ativo");

    });

});

