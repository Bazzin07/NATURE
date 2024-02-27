class Button1 {
    constructor() {
        this.element = document.createElement("button");
        this.element.classList.add("l1");
        this.element.innerHTML = '<img src="./images/leaf (1).png">';
        this.element.addEventListener("click", this.toggleLeaf.bind(this));
        document.body.appendChild(this.element);
    }


    toggleLeaf() {
        var leafElement = document.querySelector(".leaf");
        var imageDiv = document.getElementById("image1");
        var aboutDiv = document.getElementById("about1");
    
        if (!leafElement) {
            leafElement = document.createElement("div");
            leafElement.classList.add("leaf");
    
            imageDiv = document.createElement("div");
            imageDiv.id = "image1";
            imageDiv.style.transition = 'transform 2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            aboutDiv = document.createElement("div");
            aboutDiv.id = "about1";
            aboutDiv.innerHTML = `<div class="abtforest"><h1>Forest</h1>
                <div class=paraf>Forests stand as serene sanctuaries of nature, offering a tapestry of life that captivates the senses and stirs the soul. Within their emerald embrace, diverse ecosystems thrive, from the towering canopies inhabited by elusive creatures to the vibrant undergrowth teeming with biodiversity. These verdant landscapes provide essential services to our planet, purifying the air we breathe, regulating our climate, and fostering countless species. Yet, they face unprecedented challenges from deforestation, climate change, and habitat loss. As stewards of our Earth, it is our collective responsibility to protect and preserve these vital ecosystems. Let us embark on a journey of discovery and conservation, honoring the majesty of forests and ensuring their legacy for generations to come.
                </div>
                <button class=f1>Forest</button></div>`;
            aboutDiv.style.transition = 'transform 2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
            leafElement.appendChild(imageDiv);
            leafElement.appendChild(aboutDiv);
    
            document.body.appendChild(leafElement);
        }
    
        if (leafElement.style.display === "none" || leafElement.style.display === "") {
            leafElement.style.display = "flex";
       
            imageDiv.getBoundingClientRect();
            aboutDiv.getBoundingClientRect();
            imageDiv.style.transform = 'translateX(0)';
            aboutDiv.style.transform = 'translateX(0)';
        } else {
            leafElement.style.display = "none";
           
            leafElement.offsetHeight;
            imageDiv.style.transform = 'translateX(-100%)';
            aboutDiv.style.transform = 'translateX(-100%)';
        }
    }
}    

const button = new Button1();

4
class Button2 {
    constructor() {
        this.element = document.createElement("button");
        this.element.classList.add("l3");
        this.element.innerHTML = '<img src=./images/snowman.png>' ;
        this.element.addEventListener("click",this.togglesnow.bind(this));
        document.body.appendChild(this.element);
    }

        togglesnow() {
            var snowElement = document.querySelector(".snowflake");
            var imageDiv = document.getElementById("image2");
            var aboutDiv = document.getElementById("about2");
        
            if (!snowElement) {
                snowElement = document.createElement("div");
                snowElement.classList.add("snowflake");
        
                imageDiv = document.createElement("div");
                imageDiv.id = "image2";
                imageDiv.style.transition = 'transform 2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                aboutDiv = document.createElement("div");
                aboutDiv.id = "about2";
                aboutDiv.innerHTML = `<div class="abtsnow"><h1>SnowForest</h1>
                    <div class=paraf>
                    SnowForest is a serene sanctuary nestled deep in the northern wilderness. Evergreen trees, adorned with delicate icicles, create a magical landscape. The forest floor, blanketed in pristine snow, invites exploration and reflection. Wildlife thrives here, from graceful deer to playful squirrels, adding to the forest's allure. As the day wanes, SnowForest transforms, with the setting sun painting the snow in hues of pink and gold. Nightfall brings a celestial display, as stars twinkle in the velvety sky and the moon casts a silver glow. In SnowForest, time stands still, offering a haven of peace and tranquility where one can reconnect with nature's timeless beauty.
                    </div>
                    <button class=f3>Snow Forest</button></div>`;
                aboutDiv.style.transition = 'transform 2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
                snowElement.appendChild(aboutDiv);
                snowElement.appendChild(imageDiv);
        
                document.body.appendChild(snowElement);
            }
        
            if (snowElement.style.display === "none" || snowElement.style.display === "") {
                snowElement.style.display = "flex";
                
                imageDiv.getBoundingClientRect();
                aboutDiv.getBoundingClientRect();
                imageDiv.style.transform = 'translateX(0)';
                aboutDiv.style.transform = 'translateX(0)';
                l3.style.display = "none";
            } else {
                snowElement.style.display = "none";
                
                snowElement.offsetHeight;
                imageDiv.style.transform = 'translateX(200%)';
                aboutDiv.style.transform = 'translateX(200%)';
            }
     }
}

const button2 = new Button2();