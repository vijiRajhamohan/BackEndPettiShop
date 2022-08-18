// // const jwt = require("jsonwebtoken");

// // const verifyToken = (req, res, next) => {
// //     const authHeader = req.headers.token;
// //     if (authHeader) {
// //         const token = authHeader.split(" ")[1];
// //         jwt.verify(token,"SecretKey", (err, user) => {
// //             if (err) res.status(403).json("Token is not valid!");
// //             req.user = user;
// //             next();
// //         });
// //     } else {
// //         return res.status(401).json("You are not authenticated!");
// //     }
// // };

// // const verifyTokenAndAuthorization = (req, res, next) => {
// //     verifyToken(req, res, () => {
// //         if (req.user.id === req.params.id || req.user.isAdmin) {
// //             next();
// //         } else {
// //             res.status(403).json("You are not alowed to do that!");
// //         }
// //     });
// // };

// // const verifyTokenAndAdmin = (req, res, next) => {
// //     verifyToken(req, res, () => {
// //         if (req.user.isAdmin) {
// //             next();
// //         } else {
// //             res.status(403).json("You are not alowed to do that!");
// //         }
// //     });
// // };

// // module.exports = {
// //     verifyToken,
// //     verifyTokenAndAuthorization,
// //     verifyTokenAndAdmin,
// // };









// // // const jwt =require("jsonwebtoken");


// // // const verifyToken = (req,res,next) =>{
// // //     const authHeader =req.headers.token;
// // //     if(authHeader){
// // //         const token =authHeader.split(" ")[1];
// // //         jwt.verify(token,"SecretKey",(err,user)=>{
// // //     if(err) res.status(403).json("Token is not valid");
// // // req.user=user;
// // // next();
// // // });
// // //     }else{
// // //         return res.status(401).json("You are  not Authenticated person");

// // //     }
// // // };

// // // const verifyTokenAndAuthorization =(req,res,next) =>{
// // //     verifyToken( req, res ,() => {
// // // if(req.user.id === req.params.id || req.user.isAdmin){
// // //     next();
// // // }else{
// // //     res.status(403).json("You are not allowed to do that");
// // // }
// // //     });
// // // };

// // // const verifyTokenAndAdmin = (req, res, next) => {
// // //     verifyToken(req, res, () => {
// // //         if (req.user.isAdmin) {
// // //             next();
// // //         } else {
// // //             res.status(403).json("You are not allowed to do that");
// // //         }
// // //     });
// // // };
// // // module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };




// [
//     {

//         "image": "https://www.trunaturals.co.in/images/media/2020/11/large1605856875XcM1Z20307.jpg",
//         "category": "Grocery",
//         "name": "Moong Dal",
//         "quantity": "1 Kg",
//         "price": "Rs.100",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659946569465"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659989368668"
//             }
//         }


//     }, {

//         "image": "https://5.imimg.com/data5/HG/SW/MY-38227625/chana-dal-250x250.jpg",
//         "category": "Grocery",
//         "name": "chenna Dal",
//         "quantity": "500 g",
//         "price": "Rs.70",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659946881819"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659946881819"
//             }
//         }


//     },
//     {

//         "image": "https://th.bing.com/th/id/OIP.KiBrewyyImyMBuZ8SRRDsQHaHE?pid=ImgDet&rs=1",
//         "category": "Grocery",
//         "name": "Cumin",
//         "quantity": "50 g",
//         "price": "Rs.25",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659946923145"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659946923145"
//             }
//         }


//     }, {

//         "image": "data:image/jpeg;base64,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",

//         "category": "Grocery",
//         "name": "Sunflower oil",
//         "quantity": " 1 l",
//         "price": "Rs.150",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659946983540"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659946983540"
//             }
//         }



//     },
//     {


//         "image": "https://th.bing.com/th/id/OIP.3Fg_dTQOYxE_AjWPMiXF5wHaFj?pid=ImgDet&rs=1",


//         "category": "Grocery",
//         "name": "Black rice",
//         "quantity": " 1 kg",
//         "price": "Rs.50",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659947492583"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659947492583"
//             }
//         }



//     }, {

//         "image": "https://th.bing.com/th/id/OIP.mlDv7bQbBNEwmGw7H_vPswHaJQ?pid=ImgDet&rs=1",

//         "category": "Chocolates",
//         "name": "Chocolate pops",
//         "quantity": "100 g",
//         "price": "Rs.200",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659948222883"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659948222883"
//             }
//         }

//     }, {

//         "image": "https://www.fnp.com/images/pr/l/v20220127134503/sweet-love-ferrero-rocher-box_1.jpg",

//         "category": "Chocolates",
//         "name": "Ferrero Rocher",
//         "quantity": "1 pieces",
//         "price": "Rs.60",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659948298783"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659948298783"
//             }
//         }

//     }, {

//         "image": "https://th.bing.com/th/id/OIP.kYQ7fiv42ud-yaaVv5eVZAHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",

//         "category": "Chocolates",
//         "name": "Nut Bar",
//         "quantity": "1 pieces",
//         "price": "Rs.80",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659948365358"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659948365358"
//             }
//         }

//     }, {

//         "image": "https://th.bing.com/th/id/OIP.kYQ7fiv42ud-yaaVv5eVZAHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",

//         "category": "HealthDrinks",
//         "name": "Nut Bar",
//         "quantity": "1 pieces",
//         "price": "Rs.80",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659948417146"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659948417146"
//             }
//         }

//     }, {

//         "image": "https://i5.walmartimages.com/asr/f08ab890-9ea6-446c-9fb7-37d645f981d7.30bba258227209ee7e18a5f09af81ee7.jpeg",

//         "category": "HealthDrinks",
//         "name": "Tetley",
//         "quantity": "100 g",
//         "price": "Rs.80",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659948560457"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659948560457"
//             }
//         }
//     }, {

//         "image": "https://www.bing.com/th?id=AMMS_82730e6617d29981d91833eb982e948c&w=164&h=248&rs=2&qlt=80&o=6&cdv=1&pid=16.1",

//         "category": "HomeMade",
//         "name": "Gulab Jamun",
//         "quantity": "500 g",
//         "price": "Rs.100",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659948613426"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659948613426"
//             }
//         }

//     }, {

//         "image": "data:image/jpeg;base64,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",

//         "category": "HomeMade",
//         "name": "Vadams",
//         "quantity": "200 g",
//         "price": "Rs.80",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659948691657"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659948691657"
//             }
//         }

//     }, {

//         "image": "https://5.imimg.com/data5/SELLER/Default/2020/8/AP/BW/HU/13127035/shutterstock-1063452425-500x500.jpg",

//         "category": "IceCream",
//         "name": "Pista Cone ",
//         "quantity": "1 cone",
//         "price": "Rs.40",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659948750594"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659948750594"
//             }
//         }

//     }, {

//         "image": "https://th.bing.com/th/id/R.ac3212c33eeadf92f7bdceb2d9b6c102?rik=LBeKmJlN5TqENA&riu=http%3a%2f%2fwww.unikai.com%2fwp-content%2fuploads%2f2016%2f02%2f150ML-VANILLA.png&ehk=wR29zn3V3OVQtJrZQWoGPkj9jocrqlUKHTM9hKAK6E4%3d&risl=&pid=ImgRaw&r=0",

//         "category": "IceCream",
//         "name": "Vanila Cup",
//         "quantity": "100 g",
//         "price": "Rs.40",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659948810396"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659948810396"
//             }
//         }

//     }, {

//         "image": "https://th.bing.com/th/id/R.e6f605f9b9d8ea3611172a77b99d2a2a?rik=Obz1o%2f3MRLdytQ&riu=http%3a%2f%2fhitnat.com%2fsites%2fdefault%2ffiles%2fstyles%2fw350%2fpublic%2fimages%2fproducts%2fkadala_mithai_1.png%3fitok%3duCktspG4&ehk=0CUIKWYYJ5sEkoLnJI0eYn82LcoJozqdUkpAxQTPfFs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",

//         "category": "Nostalgia",
//         "name": "KadalaiMittai",
//         "quantity": "100 g",
//         "price": "Rs.40",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659948870089"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659948870089"
//             }
//         }

//     }, {

//         "image": "https://th.bing.com/th/id/OIP.581bwjW6ZxkF7w-tvxDU0QHaEk?w=251&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",

//         "category": "Nostalgia",
//         "name": "Panjabi Kalkona",
//         "quantity": "100 g",
//         "price": "Rs.40",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659948916346"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659948916346"
//             }
//         }

//     }, {

//         "image": "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/9bb9d677791f8666003e194c8a94aeff/9/7/9724_panchamrit_a.png",

//         "category": "PersonalCare",
//         "name": "Soap",
//         "quantity": "100 g",
//         "price": "Rs.40",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659949111992"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659949111992"
//             }
//         }

//     }, {

//         "image": "https://khadijabeauty.com/wp-content/uploads/2019/05/IMG_20190528_130539665.jpg",

//         "itemcategory": "PersonalCare",
//         "name": "Face wash",
//         "quantity": "100 g",
//         "price": "Rs.140",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659949170809"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659949170809"
//             }
//         }

//     }, {

//         "image": "data:image/jpeg;base64,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",

//         "category": "PoojaItems",
//         "name": "Ranganadhar",
//         "quantity": "1 piece",
//         "price": "Rs.1200",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659949239426"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659949239426"
//             }
//         }

//     }, {

//         "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADhANcDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAYCAwQFBwEI/8QATBAAAgEDAwEFBgIGBQkFCQAAAQIDAAQRBRIhMQYTIkFRFDJhcYGhI5EHFTNCsdEkUoKiwTRDRGJyg5Lh8BYlU7PxVHOTo7LCw9Li/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QALxEAAgECBAMHBAMBAQAAAAAAAAECAxEEEiExE0FRIjJxgZGh0RRCUmEFsfDB4f/aAAwDAQACEQMRAD8A63SlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKVE+0GtajBdPaWLvEsCp30kSRyEu679p3KcYGKhOagrsnCDm7Ilde1zm11ztC80EQurlmuXjQM8RKxq7iMPjAA5zjPXA9ak9ze3qtb2ltc7Lq4jnmWWZVeOGC22b3deM5LIvwBJ/dwaI4mMm7LYnVpOkk2zf0qPWV/dX9na3YmuYu+jDmImDcjZIKkiPBwRwf+hfzdHreXf0eMfwSrOMipJtXN1StMO/H+l3Z6HmRf8Fr0tOf9IuPpKR/CnFR3KzcUrSuzKru9zOsaKzuzXEqhVUbixIPQDmsT9Z6SFZm1cBQkMhJu7j3JgDGwwfMEHj15xUozctkyLtHdklpUa/WWk7nQaruZXSN1F1dsQ7ymFVwp6lgR9Pzp/WWj+D/ALxkO9o1UNJqHiMjFVI3Y4yDz0qfb/F+hDPHqvUk9Kiz6loiO0T3uHDyRMjNeE70EjMpz6bG/L4jPiapocxCxXqSfhySAr7QV7uJJJGbdjGAEY9fL8+dv8WOJDbMvUlVKiR1TQUS2ka5wlzb+1wNsuSHg8Xi6cHwtwcHiqW1js8qO5uSFSNJSTDdDKudo27l5PmfhzS1R7QY4kFvJEvpUWhu9HuhdCGRJfZZBFPhJDsdgxA6ZIODyKr36YcfhA52N+wkPvdCcKai5STs4k001dNEmpUeW2sXVXW2iIYBgTFjr6gjNanX7WCOziulnmsxaXCSM1mHDyluFRY4kJZsgbfEuOTmoOt+hJOMcxN+vSvMgdSB8ziuXQX3aC8S1VYry5El3mR5La8R8tt2tLJbsqY4JA3nAwSR0OZp0XbaSaW3BWxhaeR5ZrmKGUmR+8crHmRnKZxggjr04IrnH/RRGtm2izouQfMfnQsq+8QM+pA/jUbtJZbi00+cr+JPbW0rhem90VmwB8c4qEyjUBdS5BNrLPdaaZJJlcZ37UZVzkbTtJP0quWKy8j0aOH4vM60CD0IOOuDmva5hoF9PBqOlyK8aR3UkcDqZFbvI5GCHAB8j0Pwrp9XUavFV7Fdalwna9xSlKuKRXL/ANIFqo1KFoluY5L2zJzbbytzNHlAsoHHhwmPn+XTyQMkkADJJPkPWub67rMWqStDNZo0VtNKLeWJh3qqp/aRzdfEACePLpWXFSUY6s04aMnLREQtL/UoLvT3F1e91FPYThEMjRSRb0yPivGfhk10u/a8kWHu5WSUzG0bc+xGt7jiVHJBIJ2gIQCQSOCCRUAeLSYFY+z37btxiR7pnG2d5A20DaOqtx9fn0GVYbezhDQC4keAPOspaQmGNAZZWXOTjjjjOfocWsdS3FTi43ZH5dW7R25/o8yi6jt373S7xLQgzeItJbdzulOMhgCRkKBgg8bXSdQunjke51Nbu5n7mUxNDHA1ovdL+EyIMBj1bnqeBgc3Y9MsZhHJNYaPM3LJJJalm2thwynceDwR61lpaRwsTDbabETnJjtmDEnJ94PmpZ21dHnwTUr7lZuHI94j4Agfwp38nHiPqaufjcf5L5ZxFLnn/eV5i45ObT6wzH/8tNS/P+izM7zw3EBlljWeKSJmhYLIgcbSUYjg/StR+obPaU9s1bbtSMZvGyiLjAXw+gx9T58jd7bvrvs/h+BLj/zq9xd8+OzzkZzBNj/zqtp1qtNWi7FU4wnrKNyOz6LpEblmfWC1xK8zezTzuodCXBfaOOvh58vhzWtppjsGU65vtou+BaS7gZ0R5JNgdsZ3FyCMg4HkBzupYbmRCGazKhlbCxXCnK/FLgGvO4uQ37a3z6FbvA5JJA9p888/8qu+sqtdpt+ZVw4p9mJpZIdOnunk7vtAk11dGc7fbYYUmlIRmB3BQowfhycdePDbacyFRH2g7pYpiRvvFGxt8TIFLZ8W9hjHQfAVumhuMOpktcEgn8O7zwu3r7Tnp8aGC4O3L23C+H/LtoBGMEe04qP1dTa79TnDX4o1aWljci3hMOsRpbwSxRC4lvIlEbuzc/icnxnaT5dOF4uDQtMCyBUuwJESNit3d5wrBuMP1OACfQYrZxpdx7iHtSp24BW6IULx4QZiB6mrm6+x/oec/wBS4wf/AJmai8TVb0k15k4whbWGvgWYEa2jaOASKrySSnO9mLyMXY7mycenPHTyq8Xuj1aXnke/gmvN+oDAPsPQ9Rc4B9Dl816Xvd3iNmRkkeGf/wDeqXKTd22XKSWiRTmc/wDiZ+O6vCJSOdxweOCeaqMl7nO6xxnzS5HB9fxK9El0AObMYyDlLgD/AMyuEuJ+i1ibHJc+WDu4HwzVLyzQRzSgyfhwTSqAWJJRCwAGPhxWPb61FMWWQJFKJ1hUOHCgHj8RTllby2k+fX0r/W8QQMwj2mQIrJNCRjJBc7ZGOAcc/wAueab3IfUQa0ZYtvaYLHT45nl3R2tqkzEuTvWNQ7H71zS4EU7rdqGj72Sa73EFCkoJZ1cHng8jjz+NdagvYJyyR3ETyjcxWLfgKCvQt1xkZP2FRTXbm4i1K9iw6RMyOjLa7l/EjVuXIIJznNVTjzuehg61noiPdnkt0vez0cVuz3MmoWmZd8bxkd6CrL4mPAyfdHTp5juNcftL6eCawuEeTvO+U7441M2zZyeB0zGyt8JK6npd+upWNteCMxmUNujbqjKxUg16FBZJSg9zPXlxIxmloZtKUrWZTw4OQeh4PyrjGqyjStRvrQaWJFgurhN7yyLvU7inIbdjBB6ef5doqD9sOzdtqV3a6h+sNOs3jiEMnt5CqxUlkYYPJ8sEeVZMTSzxTS2NWFqqnJ32Zz2+1i1KWifqmPKW+kmR0upizARysIzuJXgtjpznnOa6TeavZQGKcwbkntvZd3eOqoZD3oLnoEwWJOONvx4gWp9lNYtz3SSWl37SjW//AHcY5nCcSRvJuZSAuMAn4D57K2g7XLa2cLWSbrZVWN2miVsopQFlLnyOCOay1XlSFaKmuySBO0mnWkcEcun3FvGII5YnQCRHDpvWNMNnPOACOo8qv22uC7WUpYywLG6onf5LSAKCzgrgYycfSoi2l9qssEsbdI5Nwki76DuWBHHhBDceXi/Ksm2te2aBka0tmjAAjj9rVBEo4woyfuazcSfUywhUzWktCT3GoXAhmWGLMroyRkFwVdiE35BB4BJ9eK16anqryhmtZ0tmZRMkUsm8Yi8RjBk/rHjGMgHPQbsFl7UjANnaDA/9tXIPGOAleiPtQv8AodkATnHtnQ48vBmmd9T0aTyJrLczV1LXVMYeDOQSWUucTPbmM8bvcVhvHH73Tw0Op6wVJWKdZ8WyqsjyGAyGKZZCVLbdoYIRx0P5YTP2hVCTa6eCMYIuZmOScA7RHWPJP2jdVESWEeWIJDTOWJxjG+Py5/Ou531LlUTfcS9TevqdyscTpBdugaYzLlluT+CSio2TwW4z/wDbVC6pqAltDLDIEMy+1gLI6qveyDbEFOSu3aT8cdCSBoGl7VKcA2BOSuMSEhjwMfh+WR6/errntSMsY9PARtjBZbhgWJYeHC5xx5Z+9HN9TiyxVrJ+ptP1vqbG2XuZVQsDOTHNvBzPkZ2s2Md3jjGT154rTU9S7uXvFBdZLFN2wgm3kbMkqx4yGA8LDHUZArSo/aZmCxJpxd3KqCbvAAxw34YAx55PnV5x2vTAMWm+4ZMq1wVwGC5JAPPw9OfKo5n1OuUXtBGxOrakrTiNNwdrqOAyQsp7zuIBE0ihFAG4sck84x5VS+tathmjiKqU71SbdmcYtH/C2lc53jOSP3gPOtbjtY44isx3mCCPahztLZGUHpxx/GgXtSwkbbaHpysV6/ywQmCOnnXVN9TqnBb00bf9b6mi6gsqqzx2cslsyQEh5V7xcHC4JzsxwM8kDBq0+saosrKmGjUqI5DbIrSBriGPcFaMjzkHlwN3xOMlp2pkUSb9PCnKjK3St4TjzFVHT+1HvG5sBwP3Lk8YI64+NM76nFKCd+Gi8ms6oyqOQGtzI0gtAe7uhC8nsqpt5ydoyeeCM5ORk22panN7RJMAsaSMECxgSAq7qynA5X3cevJ6VrJdJ7Q3G1XvLRdjMRsS7QksNpOUIPSqf+z+uHn2u35POEvOec9A+KZ31JS4Uo2y2fh/6XmbX5rmR2MEUK71hQuZTtJ4aRgm5j57d6jJ6cVUbe9xGzXhV8t3xECSb1yhGxpACGGMZxjDEYx1y4tC7WToZUv7LbuAAWzbdnzKh5QOPnVN3o2vwOYv15avuA3MunYwT5D8Yj/1qWWSjmZ5Cw8L2epRa3E63O4PIgWyIcYI3GW4dlJI4PC8VD9c1K5bVtZkivLtAJnh8MRaMrEix4JcEEZBqTpo2uo8rrrFrlwi8WbKMICAPDJ8ST86iepaNc2VxcQz6qrt4HYrHJl+9w/Cg8Dk55PSuwWZ2ua6MVTu7GFBqGoydxvv7oRiPYArNhW2PKGCDj97aBj9/wCHHauyVvcW3Z/SUuRJ7RJHLcTd6QXLTStICdvHQiuX6fpekQ3PcapdyeyC4jjuZ42MQTehjHvA8AoQef4Zrs1qtsltapalTbJDEluUbevdKoVcNk54+NejRTc3IhWaUFFF+lKVqMpg6tdvYabqF4ilmghZwFBYjoN2FGeOvSuWXGuo8bRg3M13K6OGkDXKhTyVjWNA27OMkn1+ddV1K1tLyxvba7d0tpYiJXjcxyIFwwdGHIIIBFcV1LSriOWUafdTy2pcvCbhwkhTOR3m3IJ+lY8RJproaqEYyTvuS7TLuyW7tA4CfrVLm4QtKsjbLc+IbEbcviOOV5wecCs9JtGcWynV5zcXkUl3DE888RMW7xKgTCeHIAHXHPxqF6HonaKa+0+5toofZ7B5Y5XklXBM3iZAAd3III+PzxUnFhfs1t7JJYN+r5p4IyltdTKGWXxpIYyFyBhSAfI+vGCpdy0VybtBJN6mx7iDDYvZcNuP+Xy4z9ZKLFa5Ue2TElSMrf3Pp0JD1Z9k10rhpLASnqyafemPGOPC03X61XFY6qNm+SIkKN5SxmTL+ZG6XgVmcJrkWZoPmYlzc6Pam6WTUTvgjjkmBvrrcFkIAPvY4yM8+Y9a8e+0aNS8t9IEDzKZBc3zeOHYHXIO7w7gT+flWfJps0jAmOFskkbrHcQzbcnJlz5D8h6cWotK7wbo47Y4JiyLAKSEIXb4pBkDAA+Q9K6ov8SalT6mvXUNFIi23ty5mW8kj2XN5uZbUtv6sOoDFPUD87kVzp08piiu7tpNveODdXgKR4Uhn8WMHIAwT9uc8aO56x22N27/ACNAM4wGI7zGfjQ6NINjoltvTlCLVFYEBVGG3+iqP7I9OGR8os7mp9TXm+0hJJITqM3fRyNG0YvL3dvV0iAAB/eLKF9c+gOPDe6WBcyHULkLav3VwXu7te5lLbO6YOw54OcHgDOcVmnR5mZt9vbNwSSYIudxY43buT/OqTohZgXs4DtPB7m3bjJboX55J6+p9eWR/iwp0+pji6sZJBEl3dl1tkvJE9tu9ywSIXUlTJuB6ZGPT1q0NR0po0eKfUZN7pHGkdxeFnZrcXfgXvcHC8nn4deueukToFMdtErBJI+I4QdjhVZAwfOCAPy+HNB0F235trbH4O0bUH7OPus5D5yBwPhx0rnDl0Z1TpGt/WeglXPtV62IpLgBZ7wlo1AcuoMo8iD8ufLipb/SGe6jBvN1vbi5nLzXPhjKCUciYjOD08/LOOM9tAZySbe1GVMZxFCSY+77kry3mvh+XFeroEn4zdzZh5UMTsEUmRCoUrId2SOAKcKVtExxKRrW1Hs/HuWWS4jZMd4J/aQ0edzHcFlPOBk4zwR68XBddnlMyTm5SS3UTTxtDdGWKJjHh5B32AvjXzPnx4TjYx9n4lRle3gJLZ8AhC48eMhgxz4m/wCI+tXDoFvlcRAbMsp7yH3sqckmI+g6590enE1Sf4+44lLqYNs+h3SM0KTMqytEzMkyAkc7kLycjkYOPyxXlxHp6QytHFKropZHVJJWGPRQ5J/I/atnHowjSJFklREUKqpOm1V67QBCKuNpAKFRNMCQwDLPtcZGMqVj4P0rnCqX0RB1KZGD2knW1SwnW8nEXeyCPvYhIiMNwDuc5Vedu9ODxzgYwV1uGJ4SbO+kEDsUikvoyC8pwDtjiQ7cr0C8E+W6trNpem6fP3Etnd3SxxiQFdSMrAM2AWhdRjnz8uufOi3+kI8Qisz+HCwUozBo9qtlYzGD4c5ycj71pdOpLW1zypYqjB2lOz8C9peqX93JN7XZPCvc280MYMYykzSYbcMtzjkE/QeeFqs2lHUMXVjqzyd1btuivLKC3KKM+7Ohbjz55rOtb/T5ZZR+rb2W7liR2SCSVvw4Y8jHeNkjBz0HX61d1HsxoOoRLqK2HeSTRISQ91ukjmjVFJAkwCgx967TpTjK8loaaWJpVY2hK5GIr/S7e3lbudZR7gK6bJrGeRnwPGFEYUKMYHXJz1FdX0GCa30bSYpo2jlW1jaSNm3sjP4yrMOMjPNcxfQtMgmMoto4hCAB31wQ6hT0UO/Sun6Ld3F7YQzThO83PGTHnawTADc/863UpXkyVZJRSWxsqUpWozGBrEkMOmanJMVEa20oJf3VLDYCfqa5lBapJsYDTVQlV3y6jAitx0wZF6+XH1rqt1bw3dvcW02e6njaOTa207T1wa4jfaHMt7ewWg3QxSyxwyzxJ+LHFkbyqYGTjnjn0Gax4hapmqg1qrnRdGggsbK4BuLWFme5umeCaKYIViXLL3bMCVwP+ut+B9FtZoham3CzWVs08rXK4ZVjZ4nky4XO3ktjJ3DnFRjsxpPaHS4p1mSyihnMdxFFEW7yKQrtYOCuORjz6isq80y52uM2wEkt1mGSGKS1eKYx9U2ZUrtVQRxwPM8UKol2bFGJi08yJTLcWsMZlmmtYYv/ABJZ4kQjGeGdgD9KGRcDDLg9ORULTs7ed7AZYreS3iSWM2k6SvAu9tx7puGXJ5YbSD086key7GOMcDICgD5DiuOf6OUpSn3lY2Abk7pECckkFeFHJzk1pn1eaSEjuoRvMokDSsuLcojo+Q6sAQTuPPTisru7o/un8q87u7/qnqeTiqpTk9jZTlCPeVzHfV7hDIFSzIjdQ8Uch3wxiSRe7clsbiq7lOAOelVR6nduYEYWysY5RO+WdIrgmQxpw3QhcHnq3wq8EuvT86d3fZ4ZR1x72MfWoXl1LeLTt3EWDqGoBIstaoZIbSV5e7kdYe+WZiDGrlj7qr18/wAsqe6uka2ChTFNGjyOBho+7y8owWzkrgL6H1q2ItQz+0XHPr5/WncX2Th15wQcH+ddTkQdWLd8qLEWoXgMSXKOr91dA7IZpMy7Y3g5QEYwSGyeoqwmp6w4sCFkbeVa7/ojKIwZYVIIZFbgFuB6ZydtZrQX3ky4x0H+OTXnc6gBwUPI5Pl8iGqLUnzLI16afcRhNqOtbV/ot2MWkiuwgTIu2DyKwU84GAvu45rI9p1d7W4JV1uxfRxIIwigQYUMykgjaeTnB+1VC21BQqr3Soo2qo4wo6DkmvBbapzlocY4wTkH45NcSl1Z14iHKCMQXGukBj7Ssgty2Zlt47ZQLfJZ8nPeb+nl9KuxXMjtbNLeXUcPtUg2yXMHeG3EalDN3bH3nyB14wKqNpqzo6SNbMGUqwXeFZTxjl8/esddIvFG1Y7AKSGI2SjxryG8MoHB5HHn+bLJPmy1V4STTSXgjce36cuSbmEADdw6txkD90n1FXhcW/I5znnp1rS/qmbnYlkr4JB7oHax53Y3eoB+lXIrLV1RRPdW0sg4LxwmJSP9nvD9efyq9VJ80YZxh9rMjUrW11NIYp7q5it4tzGKFY2DyEjxvvyDgcAfGrFvpXZ+1khmAuppY92GuXMgJIwCYwQnAyAMYGfU5r02WoHI7+LkcHacfXxVQ1jfqrO1xFtUEtiNicD4Bs1PjT5Iyyw1FyzyWpsbYaTartghSFAGY91EgwNuCc5z0rEOs2tnoNtOI3kAtNP2xsu0ssndxckZA4Y1rLmC/khuYVuo4zNE8Xfd1kKJBsLY7zI4J61Rf6RPeW9vaJqDw7HhmVYrSEoyxriPJllBwOvQ9PhUlUn0IwlRcuy1Y0Euu3rS5B0yHLMWjNy8kituJC/ghf8AD6V0nsfcy3mg2VxIVLPJdAFARGVSVkXZknjAwOfKuZT9n47C4txq1xfR2txLsjubN7FfB4d4kDNkHnyB6/Cut6NNpEljBDpfdra2qJAkcbKwjUDgEqSDnrnPn61fQTbuzVXlG1oo2VKUrWZSJdv725s9CAt3Mctze28Ik8YVQoaU7ihB528c1zzQbp5dQUSFWeVrZM7nYn+kIW4YkcjNdF7b6LqWsabEbCR+/spGl9lG3Zcq+1WyG/eUZK8+o865hYaZrkV4kpjuoZ4jhB7FcwMrKcgtmMD5c1lrptMupuzOr+AMw7xAWJYl2IA+fWrdxbo63iG4hLTqijAd8wRopcAKP9ofNvjWgWW/nQSLIDuyeUYEMeuc1YuIdTkB3hmBUL+FG+8YOQV2jNZI3W6FaKlGyJKkiKBE0mHhjXvdyuoBVRnBYDPwqmO5gmWVkJKRkKzvhEOfQsfLz486hdza6pcBhLHLKxBCyBJu+BKkHBdD/wBelZMA1FgsZgfYqog/BbGAPPCheflXJJ8kZ6VWWfJLREvDgeEHPkPED048jXjyqiu7cKiuzEsoICjJ4J6+Q+fxqNdxqQBAWQDGOI5M4A6VS0WqNwRKVyjbe7kxlCGGePUA1xX6G5W6m+9vtQR4s7oIrhSjwkNHJjbjMmeSQOmMnGeeanv7aMyK/hdFyUaS33MRL3LKuZMZU4Lc9GB88CLnT7skk2/U5IMUuD7/AJY6eI8fy48NjfNktblicklo5idxYsWyRnJySTnJzXbfon2OpLPaAZDHFG0rLK0D91JakKyqWOd0oPIBxx5US6LxyS+zzrFEJe8du6OxokWR0Ko5ORnHpkdfMxI2t+HQiF98W3ae7mZl2BwDnGeNzY/2j60itdRTAggkXwqmI4ZgNoAjxjbjpgfIY8qeQtHqSSXVoYmeNre4M0cbyyRL3JZVCRygnD+YYEnoMHJ45Pq1tGgleN1iEskcjblIjWOVImkYD90btx9ADUY9k1Me7bS4KNG34E/Mbqqlfd6EBQfgAPKvVs9UG4eyzk5OR7NOfcHmSnl0rmvQlaBKF1S3kW3ZY5SJ7u6tEGOd0BcbiFDHDbSR8+ceVA1e2EME5icLLZJqDAsmY4GkSIfNst5enXkAxz2XWwUKW9yuHaRNsEwKySe8y+Dgt5/86p9i1tdoSyuRgjGy1lwpGAMYTHHH5fDhr0HYJAuuW8gkCwyb45YIZEMgzG0sqW45CHOH3ocDrE1X7fU4p5J4wsStCjsc3EZyUVWwQwBA55POMc4yN0XNp2hlAB0+8YFg3itZ+drFvFuT1JNBZdpQW26XdjggbbaUAAgBseHzwM/Ku69B2HsSNtU2nLQW6P7OJ3L3sGwDu4ZApkTPA3+I4wMDqHBqsamjvBGotR37MFd7pNkSiSVMz4HBOzgD1x+7zGf1b2qxhNHu8dAO5VQAeeM4xVmfSu2UoIGm6onvljFtBclduW5IOPLNEm+R20OpK7XUTc7yY4kiCglhOjsrGKKUKVwP656f1c/vcZnephsTQ7trYBlCc7TjxDBH51BhofbeTcRp2pjdt3Dv4owQAOCGkz5ZPzPrg0G37UWpW1On3M1wCQ0VvLBdT5JJJlS3dtv9rFScZLZEJQjLRMkkENxIkCSGFEDiW6LzxmSQrjEUIBOF68nk+ec85EQmtynuyxrgxskkSypweUWUFlOeSNxAzxjOBE71e1lhGJbvSL6GM4zJtR0A9HaJmA+tYcGp6lLIF7t44+O8lmfbHEn9Zj1+QHJ8vgdSUdZI82P8XTja0nc33bO50xtItGKXSyWuqm3VElhwJHti53OwwVIxn+Ne/o1uI5dS1ZYFEUT2SSywGUzOjLMFTx9MYJPX/wDmOT6f2n12CM2emXV1aJfXM0s0bp+1IChQrODkLj16/Cp3+j7s7e6PFq13fWzQXF1JDBCkoUSiCEFiTtYjxMx/4a10dUnYtacVaW5O6UpWkiKf9dTSlAKUpQClKUApSlAKUpQClK85oD2lW5JoIQDNLHGDyDI6p/8AUa10/aHs5b473VbL5RSiU/lFuNRc4x3ZJRb2RtaVGJu3HZmIkJJdTjOAYbdgCf8Aela1lx+kWwjyYtPlYccz3EUYBPr3YeqniKS+4uWGqv7SdV5XL7j9Jt1yIoLCLjqzSTEZ54IKj7VqJ+3vaK6yI7q42nPhsbTbjngbwN33qt4qPJN+RYsHN7tLzOw3F1ZWih7q5t4EIJDXEqRggcnBcio/f9r9BiIgtb5JJPaFgnlgjeaO2UkAsSFKk+QAz5nB24PJ7m+1PUJFlvI7mRo13rNeMGfwnlFDMWAKlqtlZ5O8cTAe1Wg7zk+CWISZHHnujG3/AGqoni5clY9PDfxdOazTk34HQL3tfoROGh1bVMMFVblorW0IHJPdKI939qM1it2+miQQafplraR45KqH2s3msSsif3qgdy8eRLJdSL38UUxRFiRV7xAzAM2T1zVsezvtKR3Ex4OWaaTIz89v2qh1astc3oR+mpReVq/iyS3nbDWp1KyalNtIKgBoYMg9QY7YL92atEro7DbFPNlmbwpJ3akjGVVQqCqY47lQxitoovPLiNSAfiuWqsrNtBmvFUeYVSfyLH/CqJO/ed/MvgsqtFWM+21HXbSGaG0mnsIZGDMkVwEDkjGQIyWBx55BroPY/tJPqAh0m4DXFza20sst4rZQxrIEjVwVB3YIGc8kH51yrvbFcr3jSNuX9/Iz/ZwtT/8ARzPGLrV7ctZoZYIJI4k2+0uYyd7ZUe6Ay5G7gnpzk6cM5qaXIy4qMHTcranSqUpXrniilYGpavpWkpE9/cCITFhENjuzlcZwEB6ZH51oZu3vZ+PPdxXsvmCEhRT9XkB+1VTrQhpJlsKU56xRLaVzq5/SZahtltaQ7uf2tx3jE+myFc5+tWP+1/bm8Aay0e72Nna9vpV0Y8eR7258FV/Uw+1N+Rb9LP7rLxZ0yvPX/HiuQXfaHtmxIudQS2IzlDf2UUnHXMVh3kv2rR3d7qc4Yvdvcuw3DPtJRzxwXuzGcD121XLFNfb6tFkcJf7vTU7dcato1rn2jULOMjqrTx7/APhBLfatRcdtey8HC3E859IIHH3l2j71xopqkhzuhTA6eJj+SA/xr02Vz4jNdyjkg92iReWT7xz9qoeLk+aXqzTHAx53fsdRm/SHpy5MNhM4zgGaeKMf3Q1aq5/SXOue5t7BOmC8kk2M/IoKgPsOmpgyvI52gne7t+e3aKF9EhI2RR+gJCZJPruy2frVTxE5bSfki5YWlHeK82SWf9Imuz+GK6ADH3bO2XIHwJVj961s/aTtPdhQ02ouvJ2zXBiTPl4S4P2rBF1vz3Vs7DHhKxSFeOAeePjVYkv+dsIjBzy7RqCw88Lk1XKcufuyyNOC2t5IpdtbmcM0UfiPieV3fJHkWwB968a3v8Dvb6BM9ViC5A8zkkn7UZbljl7gKMbsRoX5PTBYj68Vbb2FATLdSSt+8pdVwR0BEYzUPC3pcsseNDbpxNdXD/2sJ8On8q8CaWvKwPLjgkuzHPx21UssBJ7m0ZtuPF3eeuM+KT+dUtNdEcRRp0OHkHh9MKgNT7X+0OWiXVdhj2ewVAGycxxgYx/Wkx9eKuM2pPyWhiUcnLsccZwAoA+9Y+btgPxVUf6seDn1yx/wqgxZP4k7nOcguR9MKAKjZc/k6r8i66SLh5L4AxnftCKoYqc7SXYn4VlWgjV0lLboVuYZFfGR7PcMhbP0P8a1Ui2CE7iOR6D7dTWbaTRS6fcRRg4hjuID1Hh2SXMJPnwQy/QV2SeXT+rGvCTSm4vn/wAKRJCkQ2W/eSWlxLZAkKXChmdOSM498f8ArVBuNQfoI4gQeCxPXrwKqu323WthCipsiuFAHHMkfQf22FYIW5lGQtw4452iNceXifFTUFJXfuZajyyL7d62e8vGx6RKqD195qtZtFOQrStyCXZpOo6kE7arWzPBd1U4yVG5yB8S3H2qoJYg7QTKVBJClpMf2U4rqaWz9CpooW5l3bUjTaRgIRuz9E/nW10q91jTrpr+wCwzrC8SEqrcOApAjbIycDrWIhnGAsSxjnHeYGenBVMn5VQZNg3SXUigbsiMLGnGODnnH1qOZ7x0Z2yatLU7x2f1JtW0fS752RppoFFzsGFW4TwSqB5YINKxuyVi+n6Dp0UsLQ3Eoku7lGkMhEs7mQn0GeOBwPj1KvahdxVzwJpKTtsWe2Fpok2lm81W1uJ49PcSRi2maBwZSIiGkUjwnjPyFQAX3Z6I/wBA7KaYuB7+qSyXpPGdxE74ro3au5ubTRL2aC2t7lt8CPFdRGWAxtIATIm4DA46/lzXE54LyR3YywxF2eRgBuAJJbAA+3NedipuM0oux6ODgpQeZX8yRP2j1lFeKC6trKEnLR6XBFbqMjpuiRX/AL1am81P2jLXd1c3RGQWuZZJRz5Dv2atW1tAObi9lbgthcRjn514q6Tle7heY8dRJN9jxWTWW8mzclGPdikZTajp8WAuMKBtjVjtPrlYyFrz255P2Nm7HkAmMAc+eZMUTvF/YWIXgYLiOMA5zjru+1ey+1gfjXFvEcchFLlQOeS20VDLHp7/AATvLr7FJ/WrAHEUIPB7yXcSfkg/xrwwlQxmvcAk8RKkfXrguSassbPOZb6dsYXEfh8Pp4Rn71QrWfIhsnmOch5FZhn1JkJH2qxR6L2+SDl1/v4KyukHw75ZnHVTI7lj5cJx9qvRSLGALWx28Z3siRY+ZbmrZmv2XCx28K9WDNkjHwSrbNhfxbx/XEQSIenmC1Sab0b9/gaLX/e5lNNfNyWhjXPUkuQOnJ4FWDIrNh71nYchIAOueOUDGrG61yCsDSn1k3vnHT9pxV0PesvhVI19Tjp8B0+1MqX+S+Tt7lfdxttIhZi3Ja5lIB8xgEk/3auBo4hj+joeWxGuAB6Atj+FYxjfrLdY8/w8efq1WnOnpz+0bnl9zDOfPPFMubTc5exkG7twSF3O/oAWPywtO/uG9yELkkZkwo/LrVlJbibi1t2I8iq4X8zhPvV4WV24HfTpCCcYTMj+nPRfua64RjuM7exadpvEZJ1RiNrADnHPOTVoNA7FVM1w/PhjDHJ+SeVZZttLi94STP595ISfqiDH2q8ss23bFCsacbQQsaj4YXmmZLb4OWb3+TFS1vHA2wQW4x70zLvx67Vz9yKuxwtaR3UjS940oSFto2qAQ56Z+GRz5fGripNO/dLJLPKxAENnG0jg+mE3NWfL2b7RJazy/qTUkTdbzNJMp4jj3hi4Zi/G4eXTPHHElmltt4fJKnKMJptmM7FLq82oHYW91CzcfidxMjDk/QVZb2hg2940QE+e4jjOCTgfapvpP6PtXuJzLq0qWdsRNujtZElupDIU5VtpjUeEHzPJ6VMLLsT2Psyrfq1LqVf85qLvdsT67ZiUH0UVZDDSlq9CjEYympWjr4HGYIfan2WsF5fzjAK2kUtyw+kI2D86kFn2M7bXgXFhBYxEDxahOicf+6tw7/wrs0UMECLHBFHFGvupEiog+SqAKuVojhI/dqYZY2b7qsc1tP0YM+DqmtSsDjdFp0CxYx5CWYs390VI7HsL2NsGjkXTVuJkYMJb93uW3Dodsh2f3ak9K0RpxjsjNKtOW7PAAAABgDgADgCle0qwqI120vJLTQ7gLDHKt5KljKJFdiqTI+GRYzndkDH/ACrjNxAbaQLdx3ymVBLFHNFLExiYkKyqQDg4PPwr6KPmQMkdBxyfTJriet3mudqNSZ4tFu2mtg9iY7KKeRVEUjErNL7m5SSCcisGJhd5ru56GEnZONlYjeYIz+HZoG82mIz6/vZNXO9vXwBsQDyVSRn15wK2EekXLZMt5olmFOG7+8FxKCOo7qxWVs/UfOrVzZ6dEjhdVuJ5uNjR2a28APnkzSNKfh4VrE4/lbzPRUk9F7GEySnHe3BwACQCBj04Xz+tWWFip8bNI2BwW4Pyxn+NX1t7ccsJZenMr92nPoFA/gar328IIxGnH+bUDI+Z/lUVK2i+CdupYVnP7KzbpjcwCfUF+a9Ed9IDvkjT5ZcjPXngVTJqEQB2Ln4k7j9S3H2q0J766/ZRyOucZQEoOn7xwv3qxRm9bW8SDlFcy/7NFyJJZH4zhmwM/JP51Tvsoh7qbsYyCMnz+f3qn2C7YEzzxxA+W7vH+qoQP71V+zadCMymSRvR3CLz6KmCfzpps5X8Dl3yXqWjfLkLGhLngKoJJyfQc1UsOrTnOzulHQzEJ1+B8X2rJW52jba24RQP3EVFx8WNexR395J3Nusk0udvdWUT3EmTxg7VIH5UT/Feuov+TLK6dCBm5umYY/zQwBz5s27+Ar1TpsZxDbd4wLDJHfMOOhLeEVJrDsF2pvdhls0tYzk79SuBu9OIId7fQ4qV2X6NNNj2tqOoXVxgD8K1VbWHPmM5aT8mFXKlUnv8FEq9KH+uczkuJm2gskSnhQSCxOeMKP51srHs52k1PabbTb6SMgHvLlfZLc4PUGbbn6A12bT9A7P6UP6Bp1rC3nKEDzt/tTSZkP8AxVsquhhEt2Zp41vuo5fZfo31R8G+1C1tVIz3dnEbiQE/68mxM/2TUlsewHZS0IaeG4vnGDm/mLx59e5j2x/mpqWUrRGhCOyM0sRUluyxbWllZp3dpbW9vHx4LeJIl4+CAVfpSrrWKBSlKAUpSgFKUoBSlKA8qP6/rmgWNvfafdXckc89tJEYrOPfOizoV3DcO7B5zyf41IagPbbQ9DQy9obyK4uJC1nam1Fy1tasTlO8maEd6TjA4cVVVbUbotoqMpWkcylubeNnzM7qCQpUCPw54BAyfyNYbX+SVgjyfLau5/z5NZNwuj99PMsMSiSQvHArOYolY8JGuSxA8s5oLiQKRDbMqEHAIESgYxkbuftXjpRWqV/ZHuuUnuzF7vVZ8kju1Ocl2C8fIeL7VWunxDDXFyWPBYR4UAfNsn7Crg9plkVDMokbwrFbKZpjnyHU5+S1vNP7F9pdQKMumTIjEfjaq/syAHz7s5kP/wAOrY53pH2RVJwWs/c0QOmxHEUMbuACNwaZs/Nsj+FXGnu3CkIEXyaZgPifCOfvXRtP/RkAVfVNTIx/mNLjWNQPQzTAsfog/lKbDsf2T08q8OmQSyr0mvN11JnrkGcsB9AKuWGlLWXvqUSxcI932OMWek63qjKLO0vrsEjx2sJjgznHinbCf36lem/o21uYq97NZ2Cear/TLk/AkbUH/Ga6yqqoVVACqMAAYAHwA4qqtEcNFb6mWeLm+7oRGw/R/wBlrTa1zFNqEwIYtfSZjyPSCLbHj5g1KILa1tY1htoIYIlGFjgRI0A+CoAKvUrRGEY7IyynKXeZ5XtKVIiKUpQClKUApSlAKUpQClKUApSlAKUpQCtdrVnLf6VqlpEFM01s4hDBcGVfGnLDA5A58uvlWxpXGrqx1Ozucns/0e9ortnlvp7OwMjFn63ly5JHLFSqev75qS2f6OuzcO03kl7fsBgrPL3MJ/3dsF4+bGpnSqY4enHkXyxNSXMwrLTNJ05AlhY2lquMH2aGOMkf6zKMn6msyvaVdYzt3FKUroFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKA//9k=",

//         "category": "PoojaItems",
//         "name": "Incense Dhoop",
//         "quantity": "100 g",
//         "price": "Rs.120",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659949309182"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659949309182"
//             }
//         }

//     }, {

//         "image": "https://in.images.search.yahoo.com/images/view;_ylt=AwrKBJ356_BiHroRS769HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzBkYjRjYTQxZTAxOTdmZDBlOTVkOGIzYTZkYzNlOTYzBGdwb3MDNDIEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dkrishna%2B%2Bdress%26ei%3DUTF-8%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dsb-top-in.images.search%26tab%3Dorganic%26ri%3D42&w=3000&h=4000&imgurl=i.pinimg.com%2Foriginals%2Fff%2Fe4%2F21%2Fffe421a323f70c6fd9ca700a1b07259f.jpg&rurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2F525021269064562695%2F&size=1210.0KB&p=krishna+dress&oid=0db4ca41e0197fd0e95d8b3a6dc3e963&fr2=sb-top-in.images.search&fr=mcafee&tt=The+dress+set+up+%7C+Baby+krishna%2C+Set+dress%2C+Krishna+janmashtami&b=0&ni=100&no=42&ts=&tab=organic&sigr=mQ19iq3138bJ&sigb=YR0PYKwi4rNL&sigi=v2ZpUS4y0GmQ&sigt=hvddkL0Sgtpg&.crumb=XQakofsTLx9&fr=mcafee&fr2=sb-top-in.images.search&type=E211IN826G0",

//         "category": "PoojaItems",
//         "name": "Vasthram",
//         "quantity": "1 set",
//         "price": "Rs.220",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1659956318539"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1659956318539"
//             }
//         }

//     },
//     {

//         "image": "https://in.images.search.yahoo.com/images/view;_ylt=AwrKErMIQeZiAiEQ6O…",
//         "category": "IceCream",
//         "name": "RAMA DEVI",
//         "quantity": "100 g",
//         "price": "Rs.200",
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1660236863722"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1660236863722"
//             }
//         }

//     }]