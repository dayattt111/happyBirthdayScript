        document.addEventListener('DOMContentLoaded', function() {
            // Set birthday person name
            const urlParams = new URLSearchParams(window.location.search);
            const name = urlParams.get('name') || 'Sahabatku';
            document.getElementById('birthdayName').textContent = name + '!';
            
            // Audio setup
            const audio = document.getElementById('birthdayAudio');
            const audioControl = document.getElementById('audioControl');
            let audioEnabled = false;
            
            audioControl.addEventListener('click', function() {
                audioEnabled = !audioEnabled;
                
                if (audioEnabled) {
                    audio.play();
                    audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
                    audioControl.style.backgroundColor = 'rgba(123, 44, 191, 0.9)';
                } else {
                    audio.pause();
                    audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
                    audioControl.style.backgroundColor = 'rgba(157, 78, 221, 0.5)';
                }
            });
            
            // Confetti effect
            const confettiContainer = document.getElementById('confettiContainer');
            
            function createConfetti() {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                
                // Random position
                const posX = Math.random() * window.innerWidth;
                confetti.style.left = `${posX}px`;
                
                // Random size
                const size = Math.random() * 10 + 5;
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size * 2}px`;
                
                // Random color
                const colors = ['#9d4edd', '#e0aaff', '#00f5d4', '#7b2cbf', '#5a189a'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.background = color;
                
                // Random rotation
                const rotation = Math.random() * 360;
                confetti.style.transform = `rotate(${rotation}deg)`;
                
                // Random animation
                const duration = Math.random() * 5 + 5;
                confetti.style.animation = `confetti-fall ${duration}s linear forwards`;
                
                confettiContainer.appendChild(confetti);
                
                // Remove confetti after animation completes
                setTimeout(() => {
                    confetti.remove();
                }, duration * 1000);
            }
            
            // Celebration button
            const celebrationBtn = document.getElementById('celebrationBtn');
            
            celebrationBtn.addEventListener('click', function() {
                // Add special effect
                celebrationBtn.innerHTML = '<i class="fas fa-sparkles"></i> Woohoo!';
                celebrationBtn.style.background = 'linear-gradient(45deg, #00f5d4, #00bbf9)';
                
                // Create lots of confetti
                for (let i = 0; i < 150; i++) {
                    setTimeout(() => {
                        createConfetti();
                    }, i * 20);
                }
                
                // Add sound effect
                if (audioEnabled) {
                    const celebrationSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-balloons-flying-away-1.mp3');
                    celebrationSound.play();
                }
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    celebrationBtn.innerHTML = '<i class="fas fa-birthday-cake"></i> Rayakan Lagi!';
                    celebrationBtn.style.background = 'linear-gradient(45deg, #7b2cbf, #9d4edd)';
                }, 3000);
            });
            
            // Initial confetti
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    createConfetti();
                }, i * 100);
            }
            
            // Animate eyes
            const eyes = document.querySelectorAll('.eye');
            
            function animateEyes() {
                eyes.forEach(eye => {
                    eye.style.transform = `scale(${1 + Math.random() * 0.3})`;
                });
                
                setTimeout(animateEyes, 1000 + Math.random() * 1000);
            }
            
            animateEyes();
            
            // Add floating effect to message container
            const messageContainer = document.querySelector('.message-container');
            
            function floatMessage() {
                const floatValue = Math.sin(Date.now() / 1000) * 5;
                messageContainer.style.transform = `translateY(${floatValue}px)`;
                requestAnimationFrame(floatMessage);
            }
            
            floatMessage();
            
            // Action buttons
            const gojoImage = document.getElementById('gojoImage');
            const domainEffect = document.getElementById('domainEffect');
            const infinityBtn = document.getElementById('infinityBtn');
            const domainBtn = document.getElementById('domainBtn');
            const poseBtn = document.getElementById('poseBtn');
            
            // Infinity Button
            infinityBtn.addEventListener('click', function() {
                // Add visual effect
                domainEffect.style.background = 'radial-gradient(circle, rgba(157, 78, 221, 0.4) 0%, transparent 70%)';
                domainEffect.style.opacity = '1';
                
                // Rotate infinity symbol
                const infinityIcon = infinityBtn.querySelector('i');
                infinityIcon.style.animation = 'infinity-rotate 2s linear infinite';
                
                // Change Gojo image
                gojoImage.style.animation = 'none';
                setTimeout(() => {
                    gojoImage.src = 'https://i.ibb.co/0mHhSJ3/gojo2.png';
                    gojoImage.style.animation = 'float 4s ease-in-out infinite';
                }, 300);
                
                // Add sound effect
                if (audioEnabled) {
                    const infinitySound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magic-sparkles-3006.mp3');
                    infinitySound.play();
                }
                
                // Reset after 3 seconds
                setTimeout(() => {
                    domainEffect.style.opacity = '0';
                    infinityIcon.style.animation = 'none';
                }, 3000);
            });
            
            // Domain Button
            domainBtn.addEventListener('click', function() {
                // Add visual effect
                domainEffect.style.background = 'radial-gradient(circle, rgba(0, 245, 212, 0.4) 0%, transparent 70%)';
                domainEffect.style.opacity = '1';
                domainEffect.style.animation = 'domain-expand 2s forwards';
                
                // Change Gojo image
                gojoImage.style.animation = 'none';
                setTimeout(() => {
                    gojoImage.src = 'https://i.ibb.co/0sBzR7r/gojo3.png';
                    gojoImage.style.animation = 'float 4s ease-in-out infinite';
                }, 300);
                
                // Add sound effect
                if (audioEnabled) {
                    const domainSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-ominous-drums-561.mp3');
                    domainSound.play();
                }
                
                // Reset after 3 seconds
                setTimeout(() => {
                    domainEffect.style.opacity = '0';
                    domainEffect.style.animation = 'none';
                }, 3000);
            });
            
            // Pose Button
            poseBtn.addEventListener('click', function() {
                // Add visual effect
                poseBtn.style.background = 'linear-gradient(45deg, #00f5d4, #00bbf9)';
                poseBtn.style.transform = 'scale(1.1)';
                
                // Change Gojo image with sliding animation
                gojoImage.style.animation = 'slide-out 0.5s forwards';
                
                setTimeout(() => {
                    const images = [
                        'https://i.ibb.co/5Rc7tQc/gojo1.png',
                        'https://i.ibb.co/0mHhSJ3/gojo2.png',
                        'https://i.ibb.co/0sBzR7r/gojo3.png',
                        'https://i.ibb.co/Zd8nM4s/gojo4.png'
                    ];
                    const randomImage = images[Math.floor(Math.random() * images.length)];
                    gojoImage.src = randomImage;
                    gojoImage.style.animation = 'slide-in 0.5s forwards';
                }, 500);
                
                // Add sound effect
                if (audioEnabled) {
                    const poseSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-quick-jump-arcade-game-239.mp3');
                    poseSound.play();
                }
                
                // Reset button after 1.5 seconds
                setTimeout(() => {
                    poseBtn.style.background = 'rgba(45, 11, 66, 0.7)';
                    poseBtn.style.transform = 'translateY(0)';
                }, 1500);
            });
        });