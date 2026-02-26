// dino-pudim.js — jogo estilo 'Dino' com um pudim como personagem
(function(){
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const startBtn = document.getElementById('startBtn');
    const restartBtn = document.getElementById('restartBtn');
    const scoreEl = document.getElementById('score');

    let width = canvas.width;
    let height = canvas.height;

    // responsive canvas: adapt to container width while preserving height ratio
    function resize() {
      const rect = canvas.getBoundingClientRect();
      const devicePixelRatio = window.devicePixelRatio || 1;
      // keep internal size fixed for game physics but scale drawing
      canvas.style.width = Math.min(rect.width, 900) + 'px';
      // set actual drawing buffer to CSS pixels * DPR
      canvas.width = Math.floor(Math.min(window.innerWidth - 40, 900) * devicePixelRatio);
      canvas.height = Math.floor(200 * devicePixelRatio);
      width = canvas.width;
      height = canvas.height;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    // load pudim image
    const pudimImg = new Image();
    pudimImg.src = 'pudim.png';
    let pudimLoaded = false;
    pudimImg.onload = () => pudimLoaded = true;
    pudimImg.onerror = () => { pudimLoaded = false; };

    // game state
    let running = false;
    let animationId = null;
    let score = 0;
    let highScore = Number(localStorage.getItem('pudim_highscore') || 0);
    let speed = 6; // base speed
    let spawnTimer = 0;
    let spawnInterval = 90; // frames
    const obstacles = [];

    const groundY = 150; // y position of ground baseline (CSS pixels)

    const player = {
      x: 60,
      y: groundY,
      vy: 0,
      w: 48,
      h: 48,
      jumping: false,
      jumpPower: -12,
      gravity: 0.6
    };

    function reset() {
      score = 0;
      speed = 6;
      spawnTimer = 0;
      obstacles.length = 0;
      player.y = groundY;
      player.vy = 0;
      player.jumping = false;
      scoreEl.textContent = score;
      restartBtn.style.display = 'none';
    }

    function start() {
      if (running) return;
      running = true;
      reset();
      startBtn.style.display = 'none';
      restartBtn.style.display = 'none';
      loop();
    }

    function stopGame() {
      running = false;
      cancelAnimationFrame(animationId);
      restartBtn.style.display = 'inline-block';
      startBtn.style.display = 'none';
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('pudim_highscore', String(highScore));
      }
    }

    function jump() {
      if (!player.jumping) {
        player.vy = player.jumpPower;
        player.jumping = true;
      }
    }

    function spawnObstacle() {
      const h = 20 + Math.random() * 35; // height
      const w = 14 + Math.random() * 22; // width
      obstacles.push({ x: width / (window.devicePixelRatio || 1) + w + 10, y: groundY + (player.h - h), w, h });
    }

    function update() {
      // player physics
      player.vy += player.gravity;
      player.y += player.vy;
      if (player.y >= groundY) {
        player.y = groundY;
        player.vy = 0;
        player.jumping = false;
      }

      // obstacles
      for (let i = obstacles.length -1; i >= 0; i--) {
        const o = obstacles[i];
        o.x -= speed;
        // off screen
        if (o.x + o.w < -50) obstacles.splice(i,1);
      }

      // spawn logic
      spawnTimer++;
      if (spawnTimer > spawnInterval) {
        spawnTimer = 0;
        spawnInterval = 60 + Math.floor(Math.random() * 80 / (speed/6));
        spawnObstacle();
      }

      // score and difficulty
      score += 1;
      if (score % 200 === 0) speed += 0.5; // ramp
      scoreEl.textContent = score + (highScore ? ` (best ${highScore})` : '');

      // collision detection
      const playerBox = { x: player.x, y: player.y - player.h, w: player.w, h: player.h };
      for (const o of obstacles) {
        const obsBox = { x: o.x, y: o.y, w: o.w, h: o.h };
        if (rectIntersect(playerBox, obsBox)) {
          // collision!
          stopGame();
        }
      }
    }

    function rectIntersect(a,b) {
      return !(a.x + a.w < b.x || a.x > b.x + b.w || a.y + a.h < b.y || a.y > b.y + b.h);
    }

    function draw() {
      // clear
      ctx.clearRect(0,0, width / (window.devicePixelRatio || 1), height / (window.devicePixelRatio || 1));

      // ground
      ctx.fillStyle = '#f3e9e2';
      ctx.fillRect(0, groundY + player.h, width / (window.devicePixelRatio || 1), 6);

      // draw pudim (player)
      const px = player.x;
      const py = player.y - player.h;
      if (pudimLoaded) {
        ctx.drawImage(pudimImg, px - 6, py - 6, player.w + 12, player.h + 12);
      } else {
        // fallback: draw a rounded pudim-like shape
        drawPudim(px, py, player.w, player.h);
      }

      // obstacles
      for (const o of obstacles) {
        drawObstacle(o.x, o.y, o.w, o.h);
      }

      // score small in top-right of canvas
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.font = '12px Inter, system-ui, Arial';
      ctx.textAlign = 'right';
      ctx.fillText('Pontos: ' + score, (width / (window.devicePixelRatio || 1)) - 10, 18);
    }

    function drawPudim(x,y,w,h) {
      // simple pudding: rounded rectangle + top caramel
      ctx.save();
      // body
      roundRect(ctx, x, y + 6, w, h - 6, 8);
      ctx.fillStyle = '#ffdca8';
      ctx.fill();
      // caramel top
      ctx.beginPath();
      ctx.moveTo(x, y + 8);
      ctx.bezierCurveTo(x + w*0.25, y-6, x + w*0.75, y+18, x+w, y+8);
      ctx.lineTo(x+w, y+8 + 6);
      ctx.lineTo(x, y+8 + 6);
      ctx.closePath();
      ctx.fillStyle = '#d98e43';
      ctx.fill();
      ctx.restore();
    }

    function drawObstacle(x,y,w,h) {
      ctx.save();
      ctx.fillStyle = '#7b4b2a'; // chocolate/brown
      roundRect(ctx, x, y, w, h, 4);
      ctx.fill();
      ctx.restore();
    }

    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function loop() {
      update();
      draw();
      if (running) animationId = requestAnimationFrame(loop);
    }

    // controls
    function onKey(e) {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (!running) start();
        jump();
      }
    }

    function onClick(e) {
      // start or jump
      if (!running) start();
      else jump();
    }

    // touch support: tap to jump
    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); onClick(); });
    canvas.addEventListener('mousedown', onClick);
    window.addEventListener('keydown', onKey);

    restartBtn.addEventListener('click', () => {
      reset();
      start();
    });

    startBtn.addEventListener('click', () => start());

    // expose for debugging
    window.pudimGame = { start, stopGame, reset };
  });
})();
