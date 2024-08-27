'use strict';
// creating container
const containerTag = document.createElement('div');
//set class for container
containerTag.classList.add('container');
//pustting container inside the  html
document.body.append(containerTag);
//inside the container we need a header
const headerTag = document.createElement('header');
//putting header inside the container
containerTag.append(headerTag)
//in order... we have (1*img , 1*nav , 1*div)
//creating img
const headerImg = document.createElement('img');
// following img needs an id
headerImg.id = ('siteName');
// putting img into header
headerTag.append(headerImg);
//creating nav
const navDiv = document.createElement('nav');
//putting nav into header
headerTag.append(navDiv);
//we need an ul tag inside the nav
const navUl = document.createElement('ul');
//putting it inside the nav tag
navDiv.append(navUl);
//inside the following ul we have a li and inside every li tag we need an a tag
////first li
///
//
const navUlLi1 = document.createElement('li');
//putting li itno ul
navUl.append(navUlLi1);
//its a tag(inside the tag) for first li
const navUlLi1a = document.createElement('a');
//putting a tag inside its li
navUlLi1.append(navUlLi1a);
//follow a needs an href attribute and text inside it
//adding href attribute to its a
navUlLi1a.setAttribute('href','#home');
//adding text inside a
navUlLi1a.textContent = 'Home';
////second li
///
//
const navUlLi2 = document.createElement('li');
//putting li itno ul
navUl.append(navUlLi2);
//its a tag(inside the tag) for li
const navUlLi2a = document.createElement('a');
//putting a tag inside its li
navUlLi2.append(navUlLi2a);
//follow a needs an href attribute and text inside it
//adding href attribute to its a
navUlLi2a.setAttribute('href','#aboutUs');
//adding text inside a
navUlLi2a.textContent = 'About Us';
////third li
///
//
const navUlLi3 = document.createElement('li');
//putting li itno ul
navUl.append(navUlLi3);
//its a tag(inside the tag) for li
const navUlLi3a = document.createElement('a');
//putting a tag inside its li
navUlLi3.append(navUlLi3a)
//follow a needs an href attribute and text inside it
//adding href attribute to its a
navUlLi3a.setAttribute('href','#');
//adding text inside a
navUlLi3a.textContent = '#IQ Test';
////forth li
///
//
const navUlLi4 = document.createElement('li');
//putting li itno ul
navUl.append(navUlLi4);
//its a tag(inside the tag) for li
const navUlLi4a = document.createElement('a');
//putting a tag inside its li
navUlLi4.append(navUlLi4a);
//follow a needs an href attribute and text inside it
//adding href attribute to its a
navUlLi4a.setAttribute('href','#contactUs');
//adding text inside a
navUlLi4a.textContent = 'Contact Us';
//nav ul li done
///inside the header and alongside of navbar we have a dive that contains an img
//cteating div
const divInsideHeader = document.createElement('div');
//putting div inside header
headerTag.append(divInsideHeader);
//divInsideHeader's img
const divInsideHeader_img = document.createElement('img');
//putting img inside the div
divInsideHeader.append(divInsideHeader_img);
//divInsideHeader_img has 2 attributes(id,src)
divInsideHeader_img.setAttribute('id','icon');
divInsideHeader_img.setAttribute('src','./docs/icon.img.png');
///header ends
//
///main begins:
//creating main tag
const mainTag = document.createElement('main');
//putting main inside container and after header tag
containerTag.append(mainTag);
//main tag has section*3 inside it
///first section
//
//creating first section with its id attribute
const mainTagFirstSection = document.createElement('section');
mainTagFirstSection.id = 'home';
//putting section inside main
mainTag.append(mainTagFirstSection);
//mainFirstSection has (a*4,img*1,div*1)
//creating first a tag and it has a href attribute and text inside it.. and putting it inside mainTagFirstSection
const mainTagFirstSectionA1 = document.createElement('a');
mainTagFirstSectionA1.setAttribute('href','#');
mainTagFirstSectionA1.textContent = ('TEST YOUR IQ');
mainTagFirstSection.append(mainTagFirstSectionA1);
//creating second a tag with 2 attributes (id,href) and 2 spans inside it..and putting it inside mainTagFirstSection
const mainTagFirstSectionA2 = document.createElement('a');
mainTagFirstSectionA2.setAttribute('href','#');
mainTagFirstSectionA2.id = ('quizNow');
mainTagFirstSection.append(mainTagFirstSectionA2);
const mainTagFirstSectionA2FirstSpan = document.createElement('span');
mainTagFirstSectionA2FirstSpan.textContent = ' QUIZ ';
mainTagFirstSectionA2.append(mainTagFirstSectionA2FirstSpan);
const mainTagFirstSectionA2SecondSpan = document.createElement('span');
mainTagFirstSectionA2SecondSpan.textContent = ' NOW ';
mainTagFirstSectionA2.append(mainTagFirstSectionA2SecondSpan);
//creating third a tag with an href attribute and text inside it... and putting it inside mainTagFirstSection
const mainTagFirstSectionA3 = document.createElement('a');
mainTagFirstSectionA3.setAttribute('href','#');
mainTagFirstSectionA3.textContent = 'in publishing and graphic design,Lore ipsum us a placeholder text commenlyused to demonstrate the visual form of a documnet or a typeface without relying on meaningful content.';
mainTagFirstSection.append(mainTagFirstSectionA3);
//creating forth a tag with href attribute and text inside it 
const mainTagFirstSectionA4 = document.createElement('a')
mainTagFirstSection.append(mainTagFirstSectionA4)
mainTagFirstSectionA4.setAttribute('href','#');
mainTagFirstSectionA4.textContent = ('Start Test');
//img for main firstsection that has id and src
const mainTagFirstSectionImg = document.createElement('img');
mainTagFirstSectionImg.id = 'mainImage';
mainTagFirstSectionImg.setAttribute('src','./doc/smain.img.png');
mainTagFirstSection.append(mainTagFirstSectionImg);
//last div in maintagfirstsection
const mainTagFirstSectionDiv = document.createElement('div');
mainTagFirstSectionDiv.id = ('mainList');
mainTagFirstSection.append(mainTagFirstSectionDiv);
//mainTagFirstSectionDiv(mainlist div) that has (a*1(has href att and text inside it) div*1(mainlist images))
const mainTagFirstSectionDivA = document.createElement('a');
mainTagFirstSectionDivA.setAttribute('href','#');
mainTagFirstSectionDivA.textContent = 'How Can I Check My IQ Level?';
mainTagFirstSectionDiv.append(mainTagFirstSectionDivA);
///mainTagFirstSectionDiv has a div mainListImg id that includes img*4 with their src and id
//div and its id
const mainTagFirstSectionDiv_Div = document.createElement('div');
mainTagFirstSectionDiv_Div.id = 'mainListImg';
mainTagFirstSectionDiv.append(mainTagFirstSectionDiv_Div);
///img*4 inside mainTagFirstSectionDiv_Div
//first img
const mainTagFirstSectionDiv_DivFirstImg = document.createElement('img');
mainTagFirstSectionDiv_DivFirstImg.id = 'listImage1';
mainTagFirstSectionDiv_DivFirstImg.setAttribute('src','./docs/main.image1.png');
mainTagFirstSectionDiv_Div.append(mainTagFirstSectionDiv_DivFirstImg);
//second img
const mainTagFirstSectionDiv_DivSecondImg = document.createElement('img');
mainTagFirstSectionDiv_DivSecondImg.id = 'listImage1';
mainTagFirstSectionDiv_DivSecondImg.setAttribute('src','./docs/main.image2.png');
mainTagFirstSectionDiv_Div.append(mainTagFirstSectionDiv_DivSecondImg);
//third img
const mainTagFirstSectionDiv_DivThirdImg = document.createElement('img');
mainTagFirstSectionDiv_DivThirdImg.id = '#';
mainTagFirstSectionDiv_DivThirdImg.setAttribute('src','#');
mainTagFirstSectionDiv_Div.append(mainTagFirstSectionDiv_DivThirdImg);
//forth img
const mainTagFirstSectionDiv_DivForthImg = document.createElement('img');
mainTagFirstSectionDiv_DivForthImg.id = 'listImage4';
mainTagFirstSectionDiv_DivForthImg.setAttribute('src','./docs/main.image4.png');
mainTagFirstSectionDiv_Div.append(mainTagFirstSectionDiv_DivForthImg);
///first section feautures and items are set
//
//
///Second Section (about_us section) started(has 2 divs inside it)
//
const mainTagSecondSection = document.createElement('section')
mainTagSecondSection.id = 'aboutUs'
mainTag.append(mainTagSecondSection)
//first div(about team)
const mainTagSecondSectionFirstDiv = document.createElement('div')
mainTagSecondSectionFirstDiv.id = 'ourTeam'
mainTagSecondSection.append(mainTagSecondSectionFirstDiv)
//first div have a*2 tag 
//first a tag of mainTagSecondSection that has text insidem it
const mainTagSecondSectionFirstDivA1 = document.createElement('a') 
mainTagSecondSectionFirstDivA1.id ='teamText1'
mainTagSecondSectionFirstDivA1.setAttribute('href','#')
mainTagSecondSectionFirstDivA1.textContent = 'Team'
mainTagSecondSectionFirstDiv.append(mainTagSecondSectionFirstDivA1)
//second a tag of mainTagSecondSection that has span*2 inside it
const mainTagSecondSectionFirstDivA2 = document.createElement('a')
mainTagSecondSectionFirstDivA2.id ='teamText2'
mainTagSecondSectionFirstDivA2.setAttribute('href','#')
//mainTagSecondSectionFirstDivA2's first span
const mainTagSecondSectionFirstDivA2Span1 = document.createElement('span')
mainTagSecondSectionFirstDivA2Span1.textContent = ' MEET OUR '
mainTagSecondSectionFirstDivA2.append(mainTagSecondSectionFirstDivA2Span1)
//mainTagSecondSectionFirstDivA2's second span
const mainTagSecondSectionFirstDivA2Span2 = document.createElement('span')
mainTagSecondSectionFirstDivA2Span2.textContent = ' TEAM '
mainTagSecondSectionFirstDivA2.append(mainTagSecondSectionFirstDivA2Span2)
mainTagSecondSectionFirstDiv.append(mainTagSecondSectionFirstDivA2)
///mainTagSecondSectionFirstDiv done!
//
///mainTagSecondSectionSecondDiv(id=introduce) begins
//
const mainTagSecondSectionSecondDiv = document.createElement('div')
mainTagSecondSectionSecondDiv.id = 'introduce'
mainTagSecondSection.append(mainTagSecondSectionSecondDiv)
///mainTagSecondSectionSecondDiv(id=introduce) generally has div*4
//for every one of them(4 divs), we need(div*1(witin p*2),and img*1)
///first intorducation
//
//mainTagSecondSectionSecondDiv_Intro1 div
const mainTagSecondSectionSecondDiv_Intro1 = document.createElement('div')
mainTagSecondSectionSecondDiv_Intro1.id = 'introduce1'
mainTagSecondSectionSecondDiv.append(mainTagSecondSectionSecondDiv_Intro1)
//mainTagSecondSectionSecondDiv_Intro1 div
const mainTagSecondSectionSecondDiv_Intro1_Div = document.createElement('div')
mainTagSecondSectionSecondDiv_Intro1_Div.id = 'hadi'
mainTagSecondSectionSecondDiv_Intro1.append(mainTagSecondSectionSecondDiv_Intro1_Div)
//mainTagSecondSectionSecondDiv_Intro1 first p tag(name)
const mainTagSecondSectionSecondDiv_Intro1_DivP1 = document.createElement('p')
mainTagSecondSectionSecondDiv_Intro1_Div.append(mainTagSecondSectionSecondDiv_Intro1_DivP1)
mainTagSecondSectionSecondDiv_Intro1_DivP1.id = 'name1'
mainTagSecondSectionSecondDiv_Intro1_DivP1.textContent = 'Hadi Bahadori'
//mainTagSecondSectionSecondDiv_Intro1 second p tag(description)
const mainTagSecondSectionSecondDiv_Intro1_DivP2 = document.createElement('p')
mainTagSecondSectionSecondDiv_Intro1_Div.append(mainTagSecondSectionSecondDiv_Intro1_DivP2)
mainTagSecondSectionSecondDiv_Intro1_DivP2.id = 'desc2'
mainTagSecondSectionSecondDiv_Intro1_DivP2.textContent = 'n publishing and graphic design, lorem ipsum is a placeholder text sommonly used to demonstrate the cisual form of n publishing and graphic design, lorem ipsum is a placeholder text sommonly used to demonstrate the cisual form of'
mainTagSecondSectionSecondDiv_Intro1_Div.append(mainTagSecondSectionSecondDiv_Intro1_Div)
///second intorducation
//


