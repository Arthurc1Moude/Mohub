function downloadMohzip() {
    const blob = new Blob([document.querySelector(".language-html").textContent], {type: "application/mohzip"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "project.mohzip";
    a.click();
}
