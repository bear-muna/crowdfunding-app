const express = require('express');
const router = express.Router();
const { User, Project } = require('../models');

router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findAll();
        const projects = projectData.map((project) => project.get({ plain: true }));
        res.render('homepage', {projects});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error occurred getting home page", error });
    }
});

module.exports = router;