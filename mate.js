const item = document.createElement("li");
item.className = "nav-item";
const link = document.createElement("a");
link.href = window.location.href.replace("scan", "funk");
link.className = "nav-link";
link.target = "_blank";
link.text = "View in Etherfunk";
item.appendChild(link);
document.querySelector("#contracts > div > #nav_subtabs").appendChild(item);