const Skill = require('../models/skill');

function index (req, res, next){
    res.render('skills/index',{
        skills: Skill.getAll()
    });
};

function show (req,res, next) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create (req, res, next) {
    console.log(req.body)
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}

function edit(req, res, next) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    });
    
}

function update(req, res, next) {
    console.log(req.body);
    Skill.update(req.body)
    res.redirect('/skills/')
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}