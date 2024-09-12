function copy(id) {
            const select = document.getElementById(id).textContent
            navigator.clipboard.writeText(select)
            .then(function() {
                alert("Success copy id : "+select)})
            .catch(function() {
                console.error("Error copy id : "+id)})
}
