/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const getData = (user) => {
	axios
		.get(`https://api.github.com/users/${user}`)
		.then((response) => {
			// create card node
			return cardCreator(response);
		})
		.catch((error) => {
			console.log('Error: ', error);
		});
};

// Get my card
getData('raythurman2386');

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [ 'twilday09', 'mikeyjwilliams', 'nickdurbin', 'tetondan', 'dustinmyers' ];

// Get followers cards
setTimeout(
	followersArray.forEach((user) => {
		getData(user);
	}),
	100,
);

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardCreator(object) {
	const obj = object.data;
	// console.log('Creating', obj.name);
	// Create the card div
	let newCard = document.createElement('div');
	newCard.classList.add('card');

	// Create the image
	let cardImg = document.createElement('img');
	cardImg.src = obj.avatar_url;

	// Create the card-info div
	let cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const elements = [
		{
			id: 'cardName',
			element: 'h3',
			className: 'name',
			text: `Name: ${obj.name}`,
		},
		{
			id: 'userName',
			element: 'p',
			className: 'username',
			text: `Username: ${obj.login}`,
		},
		{
			id: 'profile',
			element: 'p',
			className: 'profile',
			text: `Profile: ${obj.html_url}`,
		},
		{
			id: 'followers',
			element: 'p',
			className: 'followers',
			text: `Followers: ${obj.followers}`,
		},
		{
			id: 'following',
			element: 'p',
			className: 'follower',
			text: `Following: ${obj.following}`,
		},
		{
			id: 'cardName',
			element: 'h3',
			className: null,
			text: `Bio: ${obj.bio}`,
		},
	];

	// Card-info content
	const contentCreator = (o) => {
		// console.log(o.element, 'function');
		let item = document.createElement(o.element);
		item.classList.add(o.className);
		item.textContent = o.text;
		return cardInfo.appendChild(item);
	};

	// Loop over elements to create the content
	elements.forEach((item) => {
		// console.log(item, 'for each');
		contentCreator(item);
	});

	// Attach the items to the main card
	newCard.appendChild(cardImg);
	newCard.appendChild(cardInfo);

	// Add to the dom
	const entry = document.querySelector('.cards');

	entry.appendChild(newCard);
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
