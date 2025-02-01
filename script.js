document.addEventListener("DOMContentLoaded", function() {
    const API_URL = "/api/resources";
    const resourceList = document.getElementById("resource-list");

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            resourceList.innerHTML = "";
            data.forEach(resource => {
                const li = document.createElement("li");
                li.innerHTML = `<a href=" " target="_blank">${resource.name}</a > - ${resource.description}`;
                resourceList.appendChild(li);
            });
        })
        .catch(error => {
            resourceList.innerHTML = "<li>❌ Failed to load resources.</li>";
            console.error("Error fetching resources:", error);
        });
});
