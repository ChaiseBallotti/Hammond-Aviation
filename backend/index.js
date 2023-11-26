const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { exec } = require('child_process');

app.get('/video', (req, res) => {
    // Replace 'your-ffmpeg-command' with the actual FFmpeg command to capture video from your edge device
    const ffmpegCommand = 'your-ffmpeg-command';

    const ffmpegProcess = exec(ffmpegCommand);
    ffmpegProcess.stdout.pipe(res);

    // Handle the FFmpeg process errors, if any
    ffmpegProcess.on('error', (err) => {
        console.error('FFmpeg error:', err);
        res.status(500).send('Internal Server Error');
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});