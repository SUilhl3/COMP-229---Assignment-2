const Project = require('../models/products');

exports.getAllProjects = async (res,req) =>{
    try{
        const projects = await Project.find();
        res.json(projects);
    }catch(error){
        res.status(500).json({message: error.message});
    }

}

exports.getAllProjectById = async (req,res) =>{
    try {
        const project = await Project.findById(req.params.id);

        if(project ===null){
            return res.status(404).json({message: 'Project not found'});
        }

        res.json(project);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

exports.createProject = async (req, res) =>{
    const project = new Project({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category
    });

    try{
        const newProject = await project.save();
        res.status(201).json(newProject);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

exports.updateProject = async (req, res) =>{
    try{
        const project = await Project.findById(req.param.id);

        if(project ===null){
            return res.status(404).json({message: 'Project not found'});
        }

        if(res.body.name != null){
            project.name = req.body.name;
        }

        if(res.body.description != null){
            project.description = req.body.description;
        }
        
        if(res.body.price != null){
            project.price = req.body.price;
        }
        
        if(res.body.quantity != null){
            project.quantity = req.body.quantity;
        }
        
        if(res.body.category != null){
            project.category = req.body.category;
        }
        
        const updateProject = await project.save();
        res.json(updateProject);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

exports.deleteProject = async (req, res) => {
    try{
        const project = await Project.findById(req.param.id);

        if(project ===null){
            return res.status(404).json({message: 'Project not found'});
        }

        await project.remove();
        res.json({message: 'Project deleted sucessfully'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
