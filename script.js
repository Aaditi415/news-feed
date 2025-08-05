let date = document.getElementById("demo");
todayDate = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = days[todayDate.getDay()] + "," + todayDate.getDate() + " " + months[todayDate.getMonth()] + " " + todayDate.getFullYear();
// variables
const homeBtn = document.getElementById("home");
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const scienceBtn = document.getElementById("science");
const healthBtn = document.getElementById("health");

const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");

// Array
var newsDataArr = [];

// apis 
const API_KEY = CONFIG.API_KEY;
const HEADLINES_NEWS = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const GENERAL_NEWS = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`;
const BUSINESS_NEWS = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
const SPORTS_NEWS = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${API_KEY}`;
const TECHNOLOGY_NEWS = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=8&apiKey=${API_KEY}`;
const ENTERTAINMENT_NEWS = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${API_KEY}`;
const SCIENCE_NEWS = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${API_KEY}`;
const HEALTH_NEWS = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API_KEY}`;

const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = () => {
    let display = document.querySelector(".newsTypeCard");
    if (display.style.display == "none") {
        display.style.display = "flex";
    } else {
        display.style.display = "none";
    }

    fetchHeadlines();
    fetchGeneralNews1();
    fetchBusinessNews1();
    fetchTechnologyNews1();
    fetchSportsNews1();
    fetchEntertainmentNews1();
    fetchScienceNews1();
};

homeBtn.addEventListener("click", () => {
    let display = document.querySelector(".newsTypeCard");
    if (display.style.display == "none") {
        display.style.display = "flex";
    } else {
        display.style.display = "none";
    }
    fetchHeadlines();
    fetchGeneralNews1();
    fetchBusinessNews1();
    fetchTechnologyNews1();
    fetchSportsNews1();
    fetchEntertainmentNews1();
    fetchScienceNews1();
});

generalBtn.addEventListener("click", () => {
    let display = document.querySelector(".newsTypeCard");
    if (display.style.display == "flex" || display.style.display == "none") {
        display.style.display = "none";
    } else {
        display.style.display = "flex";
    }

    newsType.innerHTML = "<h4>General news</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click", () => {

    let display = document.querySelector(".newsTypeCard");
    if (display.style.display == "flex" || display.style.display == "none") {
        display.style.display = "none";
    } else {
        display.style.display = "flex";
    }
    newsType.innerHTML = "<h4>Business</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click", () => {

    let display = document.querySelector(".newsTypeCard");
    if (display.style.display == "flex" || display.style.display == "none") {
        display.style.display = "none";
    } else {
        display.style.display = "flex";
    }
    newsType.innerHTML = "<h4>Sports</h4>";
    fetchSportsNews();
});

technologyBtn.addEventListener("click", () => {

    let display = document.querySelector(".newsTypeCard");
    if (display.style.display == "flex" || display.style.display == "none") {
        display.style.display = "none";
    } else {
        display.style.display = "flex";
    }
    newsType.innerHTML = "<h4>Technology</h4>";
    fetchTechnologyNews();
});

entertainmentBtn.addEventListener("click", () => {

    let display = document.querySelector(".newsTypeCard");
    if (display.style.display == "flex" || display.style.display == "none") {
        display.style.display = "none";
    } else {
        display.style.display = "flex";
    }
    newsType.innerHTML = "<h4>Entertainment</h4>";
    fetchEntertainmentNews();
});

scienceBtn.addEventListener("click", () => {

    let display = document.querySelector(".newsTypeCard");
    if (display.style.display == "flex" || display.style.display == "none") {
        display.style.display = "none";
    } else {
        display.style.display = "flex";
    }
    newsType.innerHTML = "<h4>Science</h4>";
    fetchScienceNews();
})

healthBtn.addEventListener("click", () => {

    let display = document.querySelector(".newsTypeCard");
    if (display.style.display == "flex" || display.style.display == "none") {
        display.style.display = "none";
    } else {
        display.style.display = "flex";
    }
    newsType.innerHTML = "<h4>Health</h4>";
    fetchHealthNews();
})

searchBtn.addEventListener("click", () => {

    let display = document.querySelector(".newsTypeCard");
    if (display.style.display == "flex" || display.style.display == "none") {
        display.style.display = "none";
    } else {
        display.style.display = "flex";
    }
    newsType.innerHTML = "<h4>Search : " + newsQuery.value + "</h4>";
    fetchQueryNews();
});

const fetchHeadlines = async() => {
    const response = await fetch(HEADLINES_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayHeadline();
}


const fetchGeneralNews = async() => {
    const response = await fetch(GENERAL_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
}
const fetchBusinessNews = async() => {
    const response = await fetch(BUSINESS_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayBusinessNews();
    displayNews();
}

const fetchSportsNews = async() => {
    const response = await fetch(SPORTS_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchTechnologyNews = async() => {
    const response = await fetch(TECHNOLOGY_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayTechnologyNews();
    displayNews();
}

const fetchEntertainmentNews = async() => {
    const response = await fetch(ENTERTAINMENT_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        // console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchScienceNews = async() => {
    const response = await fetch(SCIENCE_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        // console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchHealthNews = async() => {
    const response = await fetch(HEALTH_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        // console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchQueryNews = async() => {

    if (newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //error handle
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchGeneralNews1 = async() => {
    const response = await fetch(GENERAL_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayGeneralNews();
}
const fetchBusinessNews1 = async() => {
    const response = await fetch(BUSINESS_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayBusinessNews();

}
const fetchTechnologyNews1 = async() => {
    const response = await fetch(TECHNOLOGY_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayTechnologyNews();
}
const fetchSportsNews1 = async() => {
    const response = await fetch(SPORTS_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displaySportNews();
}

const fetchEntertainmentNews1 = async() => {
    const response = await fetch(ENTERTAINMENT_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        // // console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayEntertainmentNews();
}

const fetchScienceNews1 = async() => {
    const response = await fetch(SCIENCE_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        // console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        // console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayScienceNews();
}

function displayHeadline() {
    let main = document.querySelector("#main");
    if (main.style.display == "none") {
        main.style.display = "flex";
    }
    let newscard = document.querySelector("#newsCard");
    if (newscard.style.display == "none") {
        newscard.style.display = "block";
    }
    let newsInfo = document.querySelector("#newsInfo");
    if (newsInfo.style.display == "block") {
        newsInfo.style.display = "none";
    }

    let carouselList = document.querySelector("#carouselExampleDark ol");
    let carouselDiv = document.querySelector("#carouselExampleDark div");
    let newsHtml1 = "";
    let newsHtml2 = "";
    newsDataArr.forEach(function(news, index) {

        let newsIndex = `<li data-bs-target="#carouselExampleDark" data-bs-slide-to="${index}" aria-current="true" aria-label="Slide ${index}"></li>`
        let newsDiv = `<div class="carousel-item " data-bs-interval="5000">
                            <img src="${news["urlToImage"]}" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block bg-none" style="background:transparent">
                                <h5 style="background:transparent"><a href=${news.url} style="background:transparent">${news["title"]}</a></h5>
                                <p style="background:transparent">${news["description"]}</p>
                            </div>
                        </div>`;
        newsHtml1 += newsIndex;
        newsHtml2 += newsDiv;
    })
    carouselList.innerHTML = newsHtml1;
    carouselDiv.innerHTML = newsHtml2;

    let newslist = document.querySelector("#headline");
    let newsHeadline = "";

    newsDataArr.forEach(function(news) {
        var date = news.publishedAt.split("T");

        var newsHeading = `<a href="${news.url}" class="list-group-item list-group-item-action border-top border-bottom" aria-current="true" style="background:#111">
                            <div class="d-flex w-100 justify-content-between">
                                <img src="${news.urlToImage}" alt="img" class="p-2">
                                <p class="text-break pt-2">${news["title"]}</p>
                                <small>${date[0]}</small>
                            </div>
                        </a>`
        newsHeadline += newsHeading;
    })
    newslist.innerHTML = newsHeadline;

    // let newsCard1 = document.querySelector("#newsCard .row");
    // console.log(newsCard1);

    $(document).ready(function() {

        $('.carousel').each(function() {
            $(this).find('.carousel-item').eq(0).addClass('active');
        });
        $('.carousel-indicators').each(function() {
            $(this).find(carouselList.childNodes).eq(0).addClass('active');
        });
        $("#headline a").hover(function() {
            $(this).addClass("active");
        }, function() {
            $(this).removeClass("active");
        });
    });

    // let newsCard2 = "";
    // newsDataArr.forEach(function(news) {
    //     let newsCard3 = `<div class="card col-sm-12 col-md-4 col-lg-3">
    //     <img src="${news.urlToImage}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">${news.title}</h5>
    //       <p class="card-text">${news.description}</p>
    //       <a href="#" class="btn btn-primary">Read More</a>
    //     </div>
    //   </div>`
    //     newsCard2 += newsCard3;
    // })
    // newsCard1.innerHTML = newsCard2;


}

function displayGeneralNews() {

    let generalCard1 = ""
    let generalCard = document.querySelector("#generalCard .card");
    newsDataArr.forEach(function(news, index) {
        if (index < 4) {
            let generalCard2 = `<span class="border-light  border-bottom"></span>
                                    <div class="row"  style="background: #111;">
                                        <div class="col-md-4 p-3">
                                            <img src="${news.urlToImage}" class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h6 class="card-title"><a href=${news.url}>${news.title}</a></h6>   
                                            </div>
                                        </div>
                                    </div>
                                <span class="border-light  border-bottom"></span>`
            generalCard1 += generalCard2;
        } else {
            return;
        }
    })
    generalCard.innerHTML = generalCard1;

}

function displayBusinessNews() {

    let businessCard1 = ""
    let businessCard = document.querySelector("#businessCard .card");
    newsDataArr.forEach(function(news, index) {
        if (index < 4) {
            let businessCard2 = `<span class="border-light  border-bottom"></span>
                                    <div class="row"  style="background: #111;">
                                        <div class="col-md-4 p-3">
                                            <img src="${news.urlToImage}" class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                 <h6 class="card-title"><a href=${news.url}>${news.title}</a></h6>   
                                            </div>
                                        </div>
                                    </div>
                                <span class="border-light  border-bottom"></span>`

            businessCard1 += businessCard2;
        } else {
            return;
        }
    })
    businessCard.innerHTML = businessCard1;

}

function displayTechnologyNews() {

    let technologyCard1 = ""
    let technologyCard = document.querySelector("#technologyCard .card");
    newsDataArr.forEach(function(news, index) {
        if (index < 4) {
            let technologyCard2 = `<span class="border-light  border-bottom"></span>
                                    <div class="row"  style="background: #111;">
                                        <div class="col-md-4 p-3">
                                            <img src="${news.urlToImage}" class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                 <h6 class="card-title"><a href=${news.url}>${news.title}</a></h6>   
                                            </div>
                                        </div>
                                     </div>
                                    <span class="border-light  border-bottom"></span>`

            technologyCard1 += technologyCard2;
        } else {
            return;
        }
    })
    technologyCard.innerHTML = technologyCard1;

}

function displaySportNews() {

    let sportCard1 = ""
    let sportCard = document.querySelector("#sportCard .card");
    newsDataArr.forEach(function(news, index) {
        if (index < 4) {
            let sportCard2 = `<span class="border-light  border-bottom"></span>
                                <div class="row"  style="background: #111;">
                                    <div class="col-md-4 p-3">
                                        <img src="${news.urlToImage}" class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title"><a href=${news.url}>${news.title}</a></h6>   
                                        </div>
                                    </div>
                                </div>
                            <span class="border-light  border-bottom"></span>`
            sportCard1 += sportCard2;
        } else {
            return;
        }
    })
    sportCard.innerHTML = sportCard1;

}

function displayEntertainmentNews() {

    let entertainmentCard1 = ""
    let entertainmentCard = document.querySelector("#entertainmentCard .card");
    newsDataArr.forEach(function(news, index) {
        if (index < 4) {
            let entertainmentCard2 = `<span class="border-light  border-bottom"></span>
                                        <div class="row"  style="background: #111;">
                                            <div class="col-md-4 p-3">
                                                <img src="${news.urlToImage}" class="img-fluid rounded-start" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                     <h6 class="card-title"><a href=${news.url}>${news.title}</a></h6>   
                                                </div>
                                            </div>
                                        </div>
                                    <span class="border-light  border-bottom"></span>`

            entertainmentCard1 += entertainmentCard2;
        } else {
            return;
        }
    })
    entertainmentCard.innerHTML = entertainmentCard1;

}

function displayScienceNews() {
    let scienceCard1 = ""
    let scienceCard = document.querySelector("#scienceCard .card");
    newsDataArr.forEach(function(news, index) {
        if (index < 4) {
            let scienceCard2 = `<span class="border-light  border-bottom"></span>
                                <div class="row"  style="background: #111;">
                                    <div class="col-md-4 p-3">
                                        <img src="${news.urlToImage}" class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title"><a href=${news.url}>${news.title}</a></h6>   
                                        </div>
                                    </div>
                                </div>
                                <span class="border-light  border-bottom"></span>`

            scienceCard1 += scienceCard2;
        } else {
            return;
        }
    })
    scienceCard.innerHTML = scienceCard1;

}

function displayNews() {

    let main = document.querySelector("#main");
    if (main.style.display == "flex") {
        main.style.display = "none";
    }
    let newscard = document.querySelector("#newsCard");
    if (newscard.style.display == "block") {
        newscard.style.display = "none";
    }
    let newsInfo = document.querySelector("#newsInfo");
    if (newsInfo.style.display == "none") {
        newsInfo.style.display = "block";
    }

    const newsdetails = document.getElementById("newsdetails");

    let newsdetails1 = "";

    newsDataArr.forEach(news => {
        var date = news.publishedAt.split("T");

        let newsdetails2 = `<div class="card mb-3 border-light" style="max-width: 1000px;background:#111">
                                <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="${news.urlToImage}" class="img-fluid rounded-start p-3" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                    <h5 class="card-title"><a href ="${news.url}">${news.title}</a></h5>
                                    <p class="card-text">${news.description}</p>
                                    <p class="card-text"><small class="text-muted">${date[0]}</small></p>
                                    </div>
                                </div>
                                </div>
                            </div>`;
        newsdetails1 += newsdetails2;
    })
    newsdetails.innerHTML = newsdetails1;
    // var date = news.publishedAt.split("T");

    // var col = document.createElement('div');
    // col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

    // var card = document.createElement('div');
    // card.className = "p-2";

    // var image = document.createElement('img');
    // image.setAttribute("height", "matchparent");
    // image.setAttribute("width", "100%");
    // image.src = news.urlToImage;

    // var cardBody = document.createElement('div');

    // var newsHeading = document.createElement('h5');
    // newsHeading.className = "card-title";
    // newsHeading.innerHTML = news.title;

    // var dateHeading = document.createElement('h6');
    // dateHeading.className = "text-primary";
    // dateHeading.innerHTML = date[0];

    // var discription = document.createElement('p');
    // discription.className = "text-muted";
    // discription.innerHTML = news.description;

    // var link = document.createElement('a');
    // link.className = "btn btn-dark";
    // link.setAttribute("target", "_blank");
    // link.href = news.url;
    // link.innerHTML = "Read more";

    // cardBody.appendChild(newsHeading);
    // cardBody.appendChild(dateHeading);
    // cardBody.appendChild(discription);
    // cardBody.appendChild(link);

    // card.appendChild(image);
    // card.appendChild(cardBody);

    // col.appendChild(card);

    // newsdetails.appendChild(col);

    // });

}