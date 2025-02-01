function downloadZip() {
    const zip = new JSZip();
    zip.file("index.html", document.querySelector(".language-html").textContent);
    
    zip.generateAsync({type:"blob"}).then(function(content) {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(content);
        a.download = "project.zip";
        a.click();
    });
}
