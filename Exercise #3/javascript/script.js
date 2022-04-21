function showDropDown() {
  document.querySelector("#myDropdown").classList.toggle("show")
}

window.onclick = function (e) {
  if (!e.target.matches(".dropdown_button")) {
    let dropDowns = document.querySelectorAll(".dropdown-content")

    dropDowns.forEach(function (item) {
      if (item.classList.contains("show")) {
        item.classList.remove("show")
      }
    })
  }
}

function activeTab(activeTabId) {
  let navItems = document.querySelectorAll("a")

  navItems.forEach(function (item) {
    if (item.classList.contains("active")) {
      item.classList.remove("active")
    }
  })

  let activeTab = document.querySelector(`#${activeTabId.id}`)
  activeTab.classList.add("active")
}
