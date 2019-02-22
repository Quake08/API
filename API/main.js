    window.onload =()=> {
            var body = document.getElementsByTagName('body')[0];
            const Http = new XMLHttpRequest();
            const url='https://project-622bb.firebaseio.com/BeCode.json';
            Http.open("GET", url);
            Http.responseType = "json"
            Http.send();
            Http.onload = function() {
            var ObjetJson = Http.response 

            if (Http.status === 200) {
                var test = Http.response
                console.log (Http.response) 
                for (let i in test) { 
                var SuperJulien = document.createElement("div")
                document.getElementsByTagName ("section")[0].appendChild(SuperJulien)
                SuperJulien.className = "SuperMagid" 

                var name = ObjetJson[i].profile.lastname + " " +ObjetJson[i].profile.firstname ;
                console.log(name)
                var name1 = document.createElement ('div') ; 
                SuperJulien.appendChild(name1) ;
                name1.textContent = name 
                name1.className = "CName"
                

                var histoire = ObjetJson[i].history;
                var para = document.createElement('div') ;
                SuperJulien.appendChild(para);
                para.textContent = histoire
                para.className = "CText"


                
                var image0 = ObjetJson[i].image;
                console.log(image0)
                var image1 = document.createElement ('img') ; 
                SuperJulien.appendChild(image1) ;
                image1.src = image0
                image1.className = "CImage"
                
                var wiki0 = ObjetJson[i].wiki;
                console.log(wiki0)
                var wiki1 = document.createElement ('a') ; 
                SuperJulien.appendChild(wiki1) ;
                wiki1.textContent = "wikipedia" 
                wiki1.href = wiki0
                wiki1.className = "CWiki"
            }
        }
    }
}
