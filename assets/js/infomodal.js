//Waiting for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

	openProjectModal(popupInfoData);
	closeProjectModal();

});

//Info popup data
const popupInfoData = [
	{
		img: './assets/images/popup/trivial.webp',
		title: 'Trivial',
		text: [
			'Trivial is USD fintech company.',
			'Trivial optimize 3PL billing with data-driven efficiency.',
			'I was working on the new innovative system for managing billing and invoicing and make whole process efficient.',
			'This was a very interesting project where I learned a lot about fintech.'
		],
		tech: [
			'JavaScript (ES6)',
			'Vue 3',
			'Vuex',
			'PrimeVue',
			'PrimeVue Flex',
			'GIT',
		]
	},
	{
		img: './assets/images/popup/trendseam.webp',
		title: 'TrendSeam',
		text: [
			'The Site Doctor - TSD is England e-commerce company.',
			'TrendSeam is Shopify app for analize e-commerce store data and represent that data in appealing visual form for clients.',
			'It was very challenging to work on the new TrendSeam app and to create it with Remix framework and integrate it with Shopify.',
			'In the end I have successfully finish this project and created new TrensSeam app.'
		],
		tech: [
			'JavaScript (ES6)',
			'Remix',
			'Polaris UI',
			'Shopify App',
			'Fly.io',
			'GIT',
		]
	},
	{
		img: './assets/images/popup/tsd.webp',
		title: 'TSD',
		text: [
			'The Site Doctor - TSD is England e-commerce company.',
			'The redesign and new website will help company to find more clients and present them in best possible light.',
			'Beside of the website this is also web app with many features like improved SEO and SSR.',
			'I was my pleasure working as frontend developer on this project from start to finish.'
		],
		tech: [
			'JavaScript (ES6)',
			'NUXTJS 3',
			'SCSS',
			'SEO',
			'Figma',
			'GIT',
		]
	},
	{
		img: './assets/images/popup/niota.webp',
		title: 'Niotix',
		text: [
			'Niota is enterprise application for IoT industry.',
			'The Internet of Things is the technology that is already fundamentally changing our world and our lives.',
			'The rapid development of the Internet of Things in recent years leads to a complexity in technology.',
			'I was working as frontend developer on IoT software and developing new features and options for the system.'
		],
		tech: [
			'JavaScript (ES6)',
			'VueJS',
			'Vuex & Vue Router',
			'Vuetify',
			'SASS',
			'GIT',
		]
	},
	{
		img: './assets/images/popup/examiz.webp',
		title: 'Examiz',
		text: [
			'Examiz is enterprise application for HR managers with powerful people analytics and unique set of exceptional capabilities.',
			'Hire Smarter: Find the best-matching talent faster.',
			'More Talent: Recruit more high-performers, while avoiding bad hires.',
			'Develop Potential: Understand and enable the true potential of your talents.',
			'Make the Right Decisions: make smarter, analytics-driven hiring decisions – eliminating bias and lowering your compliance risks.'
		],
		tech: [
			'JavaScript (ES6)',
			'VueJS',
			'Vuex & Vue Router',
			'Google Map API',
			'SCSS',
			'GIT',
		]
	},

	{
		img: './assets/images/popup/thefruitsofthevillage.webp',
		title: 'The Fruits Of The Village',
		text: [
			//'It\'s connecting small and large agricultural producers with suppliers and local markets, and help to build businesses and agricultural clusters.',
			'This application helps to promote local organic product and manufacturer. On this project I was working as frontend developer for ministry of agriculture, forestry and water management.'
		],
		tech: [
			'PUG & SASS',
			'JavaScript (ES6)',
			'VueJS',
			'Vuex & Vue Router',
			'Google Map API',
			'GIT',
		]
	},

	{
		img: './assets/images/popup/airquality.webp',
		title: 'Air Quality',
		text: [
			'This is one of my example application for monitoring air qualitiy in my hometown.',
			'With this project I wanted to help my neighbors and all city people to easily watch for air quality over winter days in our town.',
			'On this project I was learning about Nuxt.js.'
		],
		tech: [
			'PUG & SASS',
			'JavaScript (ES6)',
			'Nuxt.js',
			'Vuex & Vue Router',
			'Netlify',
			'GIT',
		]
	},

	{
		img: './assets/images/popup/keno.webp',
		title: 'Keno',
		text: [
			'This is a online bingo game.',
			'I was working on this project as a front end developer and as a part of the team.',
			'Also this is only sample of the game and it\'s not functional.'
		],
		tech: [
			'PUG & SASS',
			'JavaScript (ES6)',
			'VueJS',
			'Vuex & Vue Router',
			'Netlify',
			'GIT'
		]
	},
	{
		img: './assets/images/popup/prettyballerinas.webp',
		title: 'Pretty Ballerinas',
		text: [
			'Pretty Ballerinas is one of the biggest Spanish shoe brand and they have they stores all over the world.',
			'I was working there primarily as front end developer on this project, and I was part of the team.',
			'This e-commerc website is build using PrestShop system and solution'
		],
		tech: [
			'HTML & CSS',
			'JavaScript',
			'PHP & MySQL',
			'PrestaShop',
			'GIT',
			'JIRA'
		]
	},
	{
		img: './assets/images/popup/mascaro.webp',
		title: 'Mascaro',
		text: [
			'Mascaro is the oldest Spanish shoe brand and manufacturer with a long history of making shoes.',
			'I was working there primarily as front end developer on this project, and I was part of the team.',
			'This e-commerc website is build using PrestShop system and solution'
		],
		tech: [
			'HTML & CSS',
			'JavaScript',
			'PHP & MySQL',
			'PrestaShop',
			'GIT',
			'JIRA'
		]
	},
	{
		img: './assets/images/popup/aleabet.webp',
		title: 'Alea Control',
		text: [
			'Alea Control is IT company for creating online betting games and systems from Bosnia and Herzegovina.',
			'I was working there primarily as front end developer on online system for betting house.',
			'I had two projects that I was dedicated to, one was system of live online betting and second one was about creating betting lists for printing.'
		],
		tech: [
			'HTML & CSS',
			'JavaScript & AngularJS',
			'PHP & MySQL',
			'NodeJS',
			'GIT'
		]
	},

	{
		img: './assets/images/popup/aleabetlists.webp',
		title: 'AleaBet Lists',
		text: [
			'Aleabet lists is a project for betting house, I was working on web version and also on printing versions of those lists for daily or weekly sports events.',
			'Beside of aleabet lists I was working also on the admin panel for this lists, so that admin can configure output of the lists and some graphic elements.'
		],
		tech: [
			'HTML & CSS',
			'JavaScript & AngularJS',
			'PHP & MySQL',
			'NodeJS',
			'GIT'
		]
	},

	{
		img: './assets/images/popup/stealio.webp',
		title: 'Stealio',
		text: [
			'Stealio is project that I was building for Helium10 company from USA/California.',
			'Main goal of this project is to create cupon system for Amazon purches.',
			'I was mainly working on the front end part of the application, but also I was doing some backend and helping my team with PHP.'
		],
		tech: [
			'HTML & CSS',
			'JavaScript & jQuery',
			'PHP & MySQL',
			'Yii Framework',
			'GIT'
		]
	},

	{
		img: './assets/images/popup/bplace.webp',
		title: 'Bplace',
		text: [
			'This was my final project on my advance PHP & MySQL course.',
			'My main goal on this project it was to create custom CMS with admin panel and with the front end part of the app.',
			'Everything on this project was built with plain PHP, MySQL and with little bit of JavaScript.'
		],
		tech: [
			'HTML & CSS',
			'PHP & MySQL',
			'JavaScript',
			'AJAX'
		]
	},

	{
		img: './assets/images/popup/einfo.webp',
		title: 'Einfo',
		text: [
			'E-info is IT company based in Bosnia and Herzegovina, with focus on creating and maintaining large databases for their clients.',
			'I was there on Internship, learning about MSSQL servers and SQL language.',
			'Also I created this presentation website for them as a sign of gratitude for everything they learned me.'
		],
		tech: [
			'HTML & CSS',
			'JavaScript',
			'AJAX'
		]
	},

	{
		img: './assets/images/popup/oldportfolio.webp',
		title: 'Old Portfolio',
		text: [
			'This is my old portfolio website.',
			'I was in need for good portfolio website to show my current state of knowledge and projects.',
			'On this website you can find some of my first ever created apps and websites.'
		],
		tech: [
			'HTML & CSS',
			'JavaScript',
			'AJAX'
		]
	},

	{
		img: './assets/images/popup/dynamiclayout.webp',
		title: 'Dynamic Layout',
		text: [
			'This is one of my example project.',
			'Goal of this project is to create SPA and admin panel with options to change order of page elements and also other page features.',
			'On this project I was able to improve my JavaScript ES6 skills.'
		],
		tech: [
			'PUG & SASS',
			'JavaScript',
			'ES6',
			'Gulp',
			'GIT'
		]
	},

	{
		img: './assets/images/popup/chatty.webp',
		title: 'Chatty',
		text: [
			'This is one of my example project.',
			'In this project I created simple realtime chat for everyone to use for fun, this is only example show case.',
			'In process of creating this app I was learning about VueJS and Firebase.'
		],
		tech: [
			'HTML & CSS',
			'JavaScript (ES6)',
			'VueJS',
			'Firebase',
			'Webpack',
			'GIT'
		]
	},

	{
		img: './assets/images/popup/mondrian.webp',
		title: 'Mondrian',
		text: [
			'This is one of my example project.',
			'In this project I tried to recreate two art pieces from Mondrian using web technologies, especially CSS grid.',
			'This is join of programming and art.'
		],
		tech: [
			'HTML & CSS',
			'JavaScript (ES6)',
			'GIT'
		]
	},

	{
		img: './assets/images/popup/rhmzrs.webp',
		title: 'RHMZRS',
		text: [
			'I was working on this project for hydrometeorological institute of Republic of Srpska.',
			'On this project I was working mainly as a front end developer, focusing on integrating google maps with hydrometeorological, seismic, air quality and other kind of data.',
			'I learned a lot about google map API working on this project.'
		],
		tech: [
			'HTML & CSS',
			'JavaScript (ES6)',
			'jQuery',
			'PHP',
			'WordPress',
			'Google Map API',
			'GIT'
		]
	},

	{
		img: './assets/images/popup/b2b.webp',
		title: 'B2B Platform',
		text: [
			'KompITenz GmbH is German IT company with office in Banja Luka, Bosnia and Herzegovina.',
			'I was working with them on B2B platform for German dairy industry, that platform connecting producers with buyers of milk.',
			'My main task is to maintain front end part of the application.'
		],
		tech: [
			'HTML & CSS',
			'JavaScript (ES6)',
			'jQuery',
			'SASS',
			'PHP & MySQL',
			'Laravel & VueJS',
			'GIT'
		]
	},

	{
		img: './assets/images/popup/oomovers.webp',
		title: 'OOMovers',
		text: [
			'OOMovers is Canadian transportation company based in Vancouver.',
			'I working with them as a full stack web developer on their website and also for their transportation management system.',
			'As a full stack web developer I was working on variety of tasks.'
		],
		tech: [
			'HTML & CSS',
			'JavaScript (ES6)',
			'jQuery',
			'SASS',
			'PHP & YAML',
			'Silex',
			'GIT'
		]
	},

	{
		img: './assets/images/popup/jatheon.webp',
		title: 'Jatheon Cloud',
		text: [
			'This is a test project for Jatheon Cloud company.',
			'Main goal of this project was to create table with dynamic data and with options to manipulate with that data.',
			'On this project I was using JavaScript and VueJS framework for creating this project.'
		],
		tech: [
			'PUG & SASS',
			'JavaScript (ES6)',
			'VueJS',
			'Vuex',
			'Netlify',
			'GIT'
		]
	},

	{
		img: './assets/images/popup/nikom.webp',
		title: 'Nikom',
		text: [
			'Nikom is CNC company from Bosnia and Herzegovina.',
			'I created this presentational website for them with WordPress CMS.',
			'On this project I was mostly using WordPress and I was learning about new things from WP.'
		],
		tech: [
			'HTML & CSS',
			'PHP & MySQL',
			'JavaScript (ES6)',
			'jQuery',
			'WordPress'
		]
	}
];


//Function for opening project modal on info button click
function openProjectModal(allProjectsData) {

	let infoBtn = document.querySelectorAll('#infoBtn'),
		projectModal = document.querySelector('.infomodal');

	infoBtn.forEach(button => {
		button.addEventListener('click', function(event) {

			projectModal.classList.add('open');

			let projectName = event.target.dataset.projectName;

			let selectedProject = allProjectsData.filter(function(element) {
				return element.title === projectName;
			});

			addProjectModalContent(selectedProject[0]);
		});
	});
}

//Function for adding Project modal content
function addProjectModalContent(projectData) {

	let infoModalElements = document.querySelectorAll('.infomodal__card--img, .infomodal__card--content--title, .infomodal__card--content--textbox, .infomodal__card--content--list');

	infoModalElements[0].src = projectData.img;

	infoModalElements[1].textContent = projectData.title;

	(projectData.title == 'Stealio') ? infoModalElements[0].classList.add('img-contain') : infoModalElements[0].classList.remove('img-contain');

	let paragraphs = createNewElement('p', 'infomodal__card--content--textbox--text', projectData.text);
	infoModalElements[2].appendChild(paragraphs);

	let listItems = createNewElement('li', 'infomodal__card--content--list--item', projectData.tech);
	infoModalElements[3].appendChild(listItems);
}

//Function for creating new element and adding text to it
function createNewElement(element, elementClass, data) {
	let createdNodeElement = null,
		elementTextNode = null,
		elementsWrapper = document.createElement('span');

	data.forEach(function(item) {
		createdNodeElement = document.createElement(element);
		createdNodeElement.classList.add(elementClass);
		elementTextNode = document.createTextNode(item);
		createdNodeElement.appendChild(elementTextNode);
		elementsWrapper.appendChild(createdNodeElement);
	});

	return elementsWrapper;
}

//Function for closing project modal on modal background click
function closeProjectModal() {

	let closeBtn = document.querySelector('#modal-close'),
		projectModal = document.querySelector('.infomodal');

	closeBtn.addEventListener('click', function() {
		projectModal.classList.remove('open');
		clearPopupFields();
	});
}

//Function for clearing popup content for new popup content
function clearPopupFields() {
	let infoModalTextElements = document.querySelectorAll('.infomodal__card--content--title, .infomodal__card--content--textbox, .infomodal__card--content--list');

	infoModalTextElements.forEach(item => {
		item.innerHTML = '';
	});
}
