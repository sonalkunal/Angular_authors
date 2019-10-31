const mongoose = require('mongoose');
const Author = mongoose.model("Author");
const path = require('path');



module.exports = {

    index:(req,res) => {
        Author.find({}, (err,authors) => {
            if(err){
                res.json(err);
            } else {
                res.json(authors);
            }
        })

    },
    
    
    create: (req, res) => {
        console.log(req.body)
        Author.create(req.body, (err, author) => {
            if (err) {
                res.json(err);
            } else {
                res.json(author);
            }
        });
    },


    show: (req, res) => {
        Author.findOne({ _id: req.params.id }, (err,author) => {
            if (err) {
                res.json(err);
            } else {
                res.json(author);
            }
        })
    },

    edit: (req,res) => {
        Author.update({ _id: req.params.id}, {name: req.body.name, age:req.body.age}, {runValidators: true}, (err,author) => {
            if (err) {
                res.json(err);
            } else {
                res.json(author);
            }
        })


    },

    delete: (req, res) => {
        console.log("delete",req.params.id);
        Author.remove({_id: req.params.id}, (err) => {
            if (err) {
                res.json(err);
            } else {
                res.json("success");
            }
        })

    },

    path: (req,res,next) => {
       res.sendFile(path.resolve("./public/dist/public/index.html"))
    },

    
}


