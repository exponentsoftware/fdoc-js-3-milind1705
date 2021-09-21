const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: true
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];

    const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}
];

// solution to signup the user
function signUp(users, userdetails) {
    //const user = {...users}
    var user = users.find(elm => elm.email === userdetails.email);

    if(user){
        return "user is already exist"
    }
   
    users.push(userdetails)
    return "user signup successfully"
}

const user1 ={
    _id: 'sdfsfg',
    username: 'Milind',
    email: 'milind@thomas.com',
    password: '123333',
    createdAt:'17/05/2019 10:00 AM',
    isLoggedIn: false
}
//console.log(signUp(users, user1))

//logIn in the user
function logIn (users, userDetails){
    const user = users.find(elm => elm.email === userDetails.email);
    if(!user){
        return "user does not exist please signup"
    }

    const userValidation = users.find(elm => elm.email === userDetails.email && elm.password === userDetails.password);

    if(!userValidation){
        return "passowrd is incorrect"
    }
    user.isLoggedIn = true
     return user;
}

let user2 =  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt:'17/05/2019 9:50 AM',
    isLoggedIn: false
}
//console.log(logIn(users, user2))

//rate a product
function rateProduct(products, users, ratings){
    const userValidate = users.find(elm => elm._id === ratings.userId && elm.isLoggedIn == true);
    const Product = products.find(item => item._id == ratings.productId);
    const userId = ratings.userId;
    const Rating = ratings.rating
    
    if(userValidate){
        Product.ratings.push({userId, Rating})
        return Product;
    }
    else {return "User is not log in"
    } 
}

let rating1 = {
    userId : "eefamr",
    productId : "aegfal",
    rating : 5
}

//console.log(rateProduct(products, users, rating1))

// liking an object

function likeProduct(products, users, like){
    const userValidate = users.find(elm => elm._id === like.userId && elm.isLoggedIn == true);
    const Product = products.find(item => item._id == like.productId);
    const userId = like.userId;
    if(userValidate){
        Product.likes.push(userId)
        return Product;
    } else{
        return "user must be log in"
    }

}

let like1 = {
    userId : "eefamr",
    productId : "aegfal",
}
console.log(likeProduct(products, users, like1))