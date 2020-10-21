
var movies = [
    {
        id: 0,
        name: "The Flash",
        type: "series",
        isPublished: false
    },{
        id: 1,
        name: "The",
        type: "series",
        isPublished: false
    }
];
const register =(req,res,next)=>{
  res.send(movies);
};
module.exports.register =register;