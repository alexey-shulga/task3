const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/table', require('./routes/table.routes'));
app.use('/api/status', require('./routes/status.routes'));

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'), {
        });
    } catch(e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start();

app.listen(PORT, () => console.log('APP STARTED ON PORT ' + PORT));