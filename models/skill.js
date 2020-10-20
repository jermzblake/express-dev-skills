const skills = [
    {id: 1001, type: "HTML", acquired: true},
    {id: 2002, type: "CSS", acquired: true},
    {id: 3003, type: "JavaScript", acquired: true},
    {id: 4004, type: "Node.js", acquired: true},
    {id: 5005, type: "Express", acquired: true},
    {id: 6006, type: "MongoDB", acquired: false},
    {id: 7007, type: "React", acquired: false},
    {id: 8008, type: "Python", acquired: false},
    {id: 9009, type: "Django", acquired: false},
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
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
    skill.acquired = false;
    skills.push(skill); 
}

function deleteOne(id) {
     // Find the index based on the id of the skill object
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

//can't figure out how to get this function to work as intended
function update(id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills[idx] = skill
}