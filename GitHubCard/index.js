/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
	.get('https://api.github.com/users/raythurman2386')
	.then((response) => {
		// create card node
		return cardCreator(response);
	})
	.catch((error) => {
		console.log('Error: ', error);
	});

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

const followersArray = [
	'twilday09',
	'mikeyjwilliams',
	'nickdurbin',
	'tetondan',
	'dustinmyers',
];

followersArray.forEach((user) => {
	axios
		.get(`https://api.github.com/users/${user}`)
		.then((response) => {
			// create card node
			return cardCreator(response);
		})
		.catch((error) => {
			console.log('Error: ', error);
		});
});

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

function cardCreator(obj) {
	console.log('Creating', obj);
	// Create the card div
	let newCard = document.createElement('div');
	newCard.classList.add('card');

	// Create the image
	let cardImg = document.createElement('img');
	cardImg.src = obj.data.avatar_url;

	// Create the card-info div
	let cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	// Card-info content
	let cardName = document.createElement('h3');
	cardName.classList.add('name');
	cardName.textContent = `Name: ${obj.data.name}`;

	let userName = document.createElement('p');
	userName.classList.add('username');
	userName.textContent = `Username: ${obj.data.login}`;

	let location = document.createElement('p');
	location.textContent = `Location: ${obj.data.location}`;

	let profile = document.createElement('p');
	profile.textContent = `Profile: ${obj.data.html_url}`;

	let followers = document.createElement('p');
	followers.textContent = `Followers: ${obj.data.followers}`;

	let following = document.createElement('p');
	following.textContent = `Following: ${obj.data.following}`;

	let bio = document.createElement('p');
	bio.textContent = `Bio: ${obj.data.bio}`;

	// Attach to the inner card
	cardInfo.appendChild(cardName);
	cardInfo.appendChild(userName);
	cardInfo.appendChild(location);
	cardInfo.appendChild(profile);
	cardInfo.appendChild(followers);
	cardInfo.appendChild(following);
	cardInfo.appendChild(bio);

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
