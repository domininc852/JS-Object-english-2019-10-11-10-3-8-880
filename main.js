//1.
var user={};
user.name="John"
user.surname="Mike";
user.name="Peter";
delete user.name;

//2
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
var num=0;
for(x in fruit ){
  num+=fruit[x];
}
console.log(num);
