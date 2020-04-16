// 1) Get all posts
function answer1(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(data){
	console.log(data);
});
}
// 2) Get post with id of 10
function answer2(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10', function(data){
	console.log(data);
});
}

// 3) Get the comments from post with id of 12
function answer3() {
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12/comments', function(data){
	console.log(data);
});
}
// 4) Get all the posts from user with id of 2
function answer4() {
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/2/posts', function(data){
	console.log(data);
});
}

// 5) Create a new post and log the id generated for it by the server
function answer5(){
$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{
	userId: 1,
	title: "New Post",
	body: "Stuff in body"
}, function(data){
	console.log(data.id)
})
}
// 6) Replace the post with id of 12
function answer6(){
$.ajax({
	method: 'PUT',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
	data: {userId: 1, title: "New Post", body: "New post added"},
	complete: function(response){
	}
})
}
// 7) Update the title field of the post with id of 12
function answer7(){
$.ajax({method: 'PATCH', url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',data: {title: "patched it"},
	complete: function(response){
	}
})
}
// 8) Delete the post with id of 12
function answer8(){
$.ajax({
	method: 'DELETE',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
	complete: function(response){
		console.log(response.statusText);
	}
})
}