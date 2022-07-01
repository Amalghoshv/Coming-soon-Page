<script async src="https://api.countapi.xyz/hit/ghosh.xyz/visits?callback=cb"></script>
function cb(response) {
    document.getElementById('visits').innerText = response.value;
}