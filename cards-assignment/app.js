function cards(){
    let wrapper = document.querySelector('.wrapper');
    let modal = document.querySelector('.wrapper');
    let images = [ 
        "/download (29).svg", "/download (30).svg", "/download (31).svg", 
        "/download (32).svg", "/download (33).svg", "/download (34).svg", 
        "/download (35).svg", "/download (36).svg", "/download (37).svg", 
        "/download (38).svg", "/download (39).svg", "/download (40).svg", 
        "/download (41).svg", "/download (42).svg", "/download (43).svg", 
        "/download (44).svg", "/download (45).svg", "/download (46).svg", 
        "/download (47).svg", "/download (48).svg", "/download (49).svg", 
        "/download (50).svg", "/download (51).svg", "/download (52).svg", 
        "/download (53).svg", "/download (54).svg", "/download (55).svg", 
        "/download (56).svg", "/download (57).svg", "/download (58).svg", 
        "/download (59).svg", "/download (60).svg", "/download (61).svg", 
        "/download (62).svg", "/download (63).svg", "/download (64).svg", 
        "/download (65).svg", "/download (66).svg", "/download (67).svg", 
        "/download (68).svg", "/download (69).svg", "/download (70).svg", 
        "/download (71).svg", "/download (72).svg", "/download (73).svg", 
        "/download (74).svg", "/download (75).svg", "/download (76).svg", 
        "/download (77).svg", "/download (78).svg", "/download (79).svg", 
        "/download (80).svg"
      ];

    for(let i= 0; i < images.length; i++){
        wrapper.innerHTML +=`<div class = "img-wrapper"><img src = "./images${images[i]}"></div>`;

    }
    
}
cards();

