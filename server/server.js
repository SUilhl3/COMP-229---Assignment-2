const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());


const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})