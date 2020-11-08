/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementsByClassName("sub_menu1").classList.toggle("show_content");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        let dropdowns = document.getElementsByClassName("sub_menu1");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show_content')) {
                openDropdown.classList.remove('show_content');
            }
        }
    }
}
