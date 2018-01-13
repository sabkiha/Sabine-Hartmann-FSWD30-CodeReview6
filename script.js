var media = [
            {
            author: 'David Walliams',
            title: 'The World\'s Worst Children',
            genre: 'Children\'s Books',
            publisher: 'HarperCollins',
            photo: "img/book01.jpg",    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
            },
            
            {
            author: 'David Walliams',
            title: 'The World\'s Worst Children 2',
            genre: 'Children\s Book',
            publisher: 'HarperCollins',
            photo: 'img/book02.jpg',    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
            },

            {
            author: 'David Walliams',
            title: 'Mr. Stink',
            genre: 'Children\s Book',
            publisher: 'HarperCollins',
            photo: 'img/book03.jpg',    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>'
            },

            {
            author: 'Marc Sleen',
            title: 'De Avonturen van Nero en Co: Beo De Verschrikkelijke',
            genre: 'Comic Book',
            publisher: 'Het Volk',
            photo: 'img/bd01.jpg',    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>',
            },

            {
            author: 'W.Vandersteen',
            title: 'Suske en Wiske: De Schat van Beersel',
            genre: 'Comic Book',
            publisher: 'Standaard Uitgeverij',
            photo: 'img/bd02.jpg',    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',

            },

            {
            author: 'Wirel',
            title: 'De Avonturen van Bessy: De Angst van Bessy',
            genre: 'Comic Book',
            publisher: 'Standaard Uitgeverij',
            photo: 'img/bd03.jpg',    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',

            },

            {
            author: 'Alex Garland',
            title: 'Ex_Machina',
            genre: 'SF',
            publisher: 'Universal',
            photo: 'img/dvd01.jpg',    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>',
            },

            {
            author: 'Pedro Almodovar',
            title: 'Volver',
            genre: 'Drama',
            publisher: 'Pathé',
            photo: 'img/dvd02.jpg',    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
            },

            {
            author: 'Godfrey Reggio',
            title: 'Koyaanisqatsi',
            genre: 'Documentary',
            publisher: 'MGM',
            photo: 'img/dvd03.jpg',    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
            },

            {
            author: 'Michael Nyman',
            title: 'Michael Nyman Live',
            genre: 'Minimal Music',
            publisher: 'Virgin Records',
            photo: 'img/cd01.jpg',    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
            },

            {
            author: 'Olla Vogala',
            title: 'Olla Vogala Live',
            genre: 'Live Recording',
            publisher: 'MAP Records',
            photo: 'img/cd02.jpg',    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>',
            },

            {
            author: 'Wim Mertens',
            title: 'The Belly of an Architect',
            genre: 'Minimal Music',
            publisher: 'Normal',
            photo: 'img/cd03.jpg',    
            rating: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>',
            },
];

var genre = [
      'Children\s Book', 
      'Comic Book', 
      'Film Score', 
      'Minimal Music', 
      'Live Recording',
      'Folk',
      'SF', 
      'Drama', 
      'Documentary', 
      'Comedy'
]; 

// Tried this but could not get it to work
// for (var i = 0; i < 12; i++) {
//       $("#title[i]").append(media[i].title);
//       $("#author[i]").append('Author: '+media[i].author);
//       $("#genre[i]").append('Genre: '+media[i].genre);
//       $("#publisher[i]").append('Publisher: '+media[i].publisher);
//       $('#image[i]').html('<img class="card-img-top" src='+media[i].photo+'>');
//       $("#rating[i]").append('Rating: '+media[i].rating+' stars');
// }

$("#title0").append(media[0].title);
$("#author0").append('Author: '+media[0].author);
$("#genre0").append('Genre: '+media[0].genre);
$("#publisher0").append('Publisher: '+media[0].publisher);
$('#image0').html('<img class="card-img-top" src='+media[0].photo+'>');
$("#rating0").append('Rating: '+media[0].rating);

$("#title1").append(media[1].title);
$("#author1").append('Author: '+media[1].author);
$("#genre1").append('Genre: '+media[1].genre);
$("#publisher1").append('Publisher: '+media[1].publisher);
$('#image1').html('<img class="card-img-top" src='+media[1].photo+'>');
$("#rating1").append('Rating: '+media[1].rating);

$("#title2").append(media[2].title);
$("#author2").append('Author: '+media[2].author);
$("#genre2").append('Genre: '+media[2].genre);
$("#publisher2").append('Publisher: '+media[2].publisher);
$('#image2').html('<img class="card-img-top" src='+media[2].photo+'>');
$("#rating2").append('Rating: '+media[2].rating);

$("#title3").append(media[3].title);
$("#author3").append('Author: '+media[3].author);
$("#genre3").append('Genre: '+media[3].genre);
$("#publisher3").append('Publisher: '+media[3].publisher);
$('#image3').html('<img class="card-img-top" src='+media[3].photo+'>');
$("#rating3").append('Rating: '+media[3].rating);

$("#title4").append(media[4].title);
$("#author4").append('Author: '+media[4].author);
$("#genre4").append('Genre: '+media[4].genre);
$("#publisher4").append('Publisher: '+media[4].publisher);
$('#image4').html('<img class="card-img-top" src='+media[4].photo+'>');
$("#rating4").append('Rating: '+media[4].rating);

$("#title5").append(media[5].title);
$("#author5").append('Author: '+media[5].author);
$("#genre5").append('Genre: '+media[5].genre);
$("#publisher5").append('Publisher: '+media[5].publisher);
$('#image5').html('<img class="card-img-top" src='+media[5].photo+'>');
$("#rating5").append('Rating: '+media[5].rating);

$("#title6").append(media[6].title);
$("#author6").append('Author: '+media[6].author);
$("#genre6").append('Genre: '+media[6].genre);
$("#publisher6").append('Publisher: '+media[6].publisher);
$('#image6').html('<img class="card-img-top" src='+media[6].photo+'>');
$("#rating6").append('Rating: '+media[6].rating);

$("#title7").append(media[7].title);
$("#author7").append('Author: '+media[7].author);
$("#genre7").append('Genre: '+media[7].genre);
$("#publisher7").append('Publisher: '+media[7].publisher);
$('#image7').html('<img class="card-img-top" src='+media[7].photo+'>');
$("#rating7").append('Rating: '+media[7].rating);

$("#title8").append(media[8].title);
$("#author8").append('Author: '+media[8].author);
$("#genre8").append('Genre: '+media[8].genre);
$("#publisher8").append('Publisher: '+media[8].publisher);
$('#image8').html('<img class="card-img-top" src='+media[8].photo+'>');
$("#rating8").append('Rating: '+media[8].rating);

$("#title9").append(media[9].title);
$("#author9").append('Author: '+media[9].author);
$("#genre9").append('Genre: '+media[9].genre);
$("#publisher9").append('Publisher: '+media[9].publisher);
$('#image9').html('<img class="card-img-top" src='+media[9].photo+'>');
$("#rating9").append('Rating: '+media[9].rating);

$("#title10").append(media[10].title);
$("#author10").append('Author: '+media[10].author);
$("#genre10").append('Genre: '+media[10].genre);
$("#publisher10").append('Publisher: '+media[10].publisher);
$('#image10').html('<img class="card-img-top" src='+media[10].photo+'>');
$("#rating10").append('Rating: '+media[10].rating);

$("#title11").append(media[11].title);
$("#author11").append('Author: '+media[11].author);
$("#genre11").append('Genre: '+media[11].genre);
$("#publisher11").append('Publisher: '+media[11].publisher);
$('#image11').html('<img class="card-img-top" src='+media[11].photo+'>');
$("#rating11").append('Rating: '+media[11].rating);