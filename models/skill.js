const skills = [
    {id: 1001, type: "HTML", aquired: true},
    {id: 2002, type: "CSS", aquired: true},
    {id: 3003, type: "JavaScript", aquired: true},
    {id: 4004, type: "Node.js", aquired: true},
    {id: 5005, type: "Express", aquired: true},
    {id: 6006, type: "MongoDB", aquired: false},
    {id: 7007, type: "React", aquired: false},
    {id: 8008, type: "Python", aquired: false},
    {id: 9009, type: "Django", aquired: false},
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill){
    //add the id
    skill.id = Date.now() % 1000000;
    //New skill likely won't already be done
    skill.aquired = false;
    skills.push(skill); 
}

function deleteOne(id) {
     // Find the index based on the id of the skill object
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}