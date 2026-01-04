// WriteWise Main JavaScript File
// Handles all interactive functionality and animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initTypewriter();
    initScrollAnimations();
    initTestimonialSlider();
    initInteractiveCharts();
    initMetricAnimations();
    initPiñataSurprises();
    
    console.log('WriteWise initialized with Piñata Protocol 🎉');
});

// Typewriter Effect for Hero Section
function initTypewriter() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Analyze your writing patterns with AI-powered insights.',
            'Get real-time feedback to improve clarity and engagement.',
            'Track your progress with comprehensive writing analytics.',
            'Complete daily challenges to build better writing habits.'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: false
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Stagger animation for multiple elements
                const siblings = entry.target.parentElement.querySelectorAll('.reveal-element');
                siblings.forEach((sibling, index) => {
                    if (sibling === entry.target) {
                        setTimeout(() => {
                            sibling.classList.add('revealed');
                        }, index * 100);
                    }
                });
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal-element').forEach(el => {
        observer.observe(el);
    });
}

// Testimonial Slider
function initTestimonialSlider() {
    const splide = new Splide('#testimonials-slider', {
        type: 'loop',
        perPage: 2,
        perMove: 1,
        gap: '2rem',
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        breakpoints: {
            768: {
                perPage: 1,
            }
        }
    });
    
    splide.mount();
}

// Interactive Charts using ECharts
function initInteractiveCharts() {
    const chartElement = document.getElementById('performance-chart');
    if (!chartElement) return;

    // Mock data for writing performance over time
    const performanceData = [
        { date: 'Week 1', clarity: 65, engagement: 58, consistency: 70 },
        { date: 'Week 2', clarity: 72, engagement: 68, consistency: 75 },
        { date: 'Week 3', clarity: 78, engagement: 74, consistency: 82 },
        { date: 'Week 4', clarity: 85, engagement: 81, consistency: 88 },
        { date: 'Week 5', clarity: 89, engagement: 86, consistency: 91 },
        { date: 'Week 6', clarity: 92, engagement: 89, consistency: 94 },
        { date: 'Week 7', clarity: 94, engagement: 92, consistency: 96 },
        { date: 'Week 8', clarity: 96, engagement: 94, consistency: 98 }
    ];

    const chart = echarts.init(chartElement);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#e5e7eb',
            borderWidth: 1,
            textStyle: {
                color: '#374151'
            }
        },
        legend: {
            data: ['Clarity', 'Engagement', 'Consistency'],
            bottom: 0,
            textStyle: {
                color: '#6b7280'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: performanceData.map(item => item.date),
            axisLine: {
                lineStyle: {
                    color: '#e5e7eb'
                }
            },
            axisLabel: {
                color: '#6b7280'
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            axisLine: {
                lineStyle: {
                    color: '#e5e7eb'
                }
            },
            axisLabel: {
                color: '#6b7280'
            },
            splitLine: {
                lineStyle: {
                    color: '#f3f4f6'
                }
            }
        },
        series: [
            {
                name: 'Clarity',
                type: 'line',
                smooth: true,
                data: performanceData.map(item => item.clarity),
                lineStyle: {
                    color: '#FF6B6B',
                    width: 3
                },
                itemStyle: {
                    color: '#FF6B6B'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(255, 107, 107, 0.3)' },
                            { offset: 1, color: 'rgba(255, 107, 107, 0.05)' }
                        ]
                    }
                }
            },
            {
                name: 'Engagement',
                type: 'line',
                smooth: true,
                data: performanceData.map(item => item.engagement),
                lineStyle: {
                    color: '#68D391',
                    width: 3
                },
                itemStyle: {
                    color: '#68D391'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(104, 211, 145, 0.3)' },
                            { offset: 1, color: 'rgba(104, 211, 145, 0.05)' }
                        ]
                    }
                }
            },
            {
                name: 'Consistency',
                type: 'line',
                smooth: true,
                data: performanceData.map(item => item.consistency),
                lineStyle: {
                    color: '#718096',
                    width: 3
                },
                itemStyle: {
                    color: '#718096'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(113, 128, 150, 0.3)' },
                            { offset: 1, color: 'rgba(113, 128, 150, 0.05)' }
                        ]
                    }
                }
            }
        ],
        animationDuration: 2000,
        animationEasing: 'cubicOut'
    };

    chart.setOption(option);
    
    // Make chart responsive
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// Animated metrics counters
function initMetricAnimations() {
    const progressCircle = document.getElementById('quality-progress');
    if (!progressCircle) return;

    // Animate the progress circle
    const circumference = 2 * Math.PI * 56; // radius = 56
    const targetPercentage = 78;
    const offset = circumference - (targetPercentage / 100) * circumference;

    // Start animation after a delay
    setTimeout(() => {
        anime({
            targets: progressCircle,
            strokeDashoffset: offset,
            duration: 2000,
            easing: 'easeOutCubic',
            delay: 500
        });
    }, 1000);
}

// Piñata Protocol - Surprise and Delight Elements
function initPiñataSurprises() {
    // Random writing prompts that appear during interaction
    const surprisePrompts = [
        "💡 Quick tip: Start with a question to boost engagement!",
        "🎯 Try using active voice instead of passive voice",
        "✨ Add a personal story to make your content more relatable",
        "📊 Posts with numbers in the first line get 36% more engagement",
        "🚀 Use shorter sentences for better readability",
        "💭 End with a question to encourage comments"
    ];

    // Mystery achievements that unlock based on behavior
    const hiddenAchievements = [
        { id: 'early_bird', name: 'Early Bird', description: 'Completed writing before 7 AM', unlocked: false },
        { id: 'night_owl', name: 'Night Owl', description: 'Wrote after 10 PM', unlocked: false },
        { id: 'streak_master', name: 'Streak Master', description: '7-day writing streak', unlocked: false },
        { id: 'perfectionist', name: 'Perfectionist', description: 'Achieved 95%+ writing score', unlocked: false }
    ]

    // Show random tips on button clicks
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            if (Math.random() < 0.3) { // 30% chance
                showSurpriseTip(surprisePrompts[Math.floor(Math.random() * surprisePrompts.length)]);
            }
        });
    });

    // Easter egg: Konami code unlocks special feature
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            unlockEasterEgg();
            konamiCode = [];
        }
    });

    // Confetti celebration for achievements
    function triggerConfetti() {
        // Create confetti particles
        for (let i = 0; i < 50; i++) {
            createConfettiParticle();
        }
    }

    // Create individual confetti particle
    function createConfettiParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = '-10px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.backgroundColor = ['#FF6B6B', '#68D391', '#FFD93D', '#6BCF7F'][Math.floor(Math.random() * 4)];
        particle.style.zIndex = '9999';
        particle.style.pointerEvents = 'none';
        particle.style.borderRadius = '50%';
        
        document.body.appendChild(particle);
        
        anime({
            targets: particle,
            translateY: '100vh',
            translateX: (Math.random() - 0.5) * 200,
            rotate: Math.random() * 360,
            scale: [1, 0],
            duration: 3000,
            easing: 'easeOutCubic',
            complete: () => {
                particle.remove();
            }
        });
    }

    // Show surprise tip
    function showSurpriseTip(tip) {
        const tipElement = document.createElement('div');
        tipElement.className = 'fixed top-20 right-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg z-50 max-w-sm';
        tipElement.innerHTML = `
            <div class="flex items-start space-x-3">
                <div class="text-2xl">🎉</div>
                <div>
                    <p class="font-semibold text-gray-900 mb-1">Surprise Tip!</p>
                    <p class="text-sm text-gray-600">${tip}</p>
                </div>
            </div>
            <button class="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onclick="this.parentElement.remove()">
                <span class="text-lg">×</span>
            </button>
        `;
        
        document.body.appendChild(tipElement);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (tipElement.parentNode) {
                tipElement.remove();
            }
        }, 5000);
        
        // Animate in
        anime({
            targets: tipElement,
            translateX: [300, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutCubic'
        });
    }

    // Unlock easter egg
    function unlockEasterEgg() {
        const easterEggElement = document.createElement('div');
        easterEggElement.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        easterEggElement.innerHTML = `
            <div class="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
                <div class="text-6xl mb-4">🎊</div>
                <h3 class="font-display text-2xl font-bold text-gray-900 mb-2">Easter Egg Unlocked!</h3>
                <p class="text-gray-600 mb-6">You've discovered the secret "Pro Writer Mode" which unlocks advanced analytics and hidden features!</p>
                <button class="bg-red-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors duration-200" 
                        onclick="this.parentElement.parentElement.remove()">
                    Awesome!
                </button>
            </div>
        `;
        
        document.body.appendChild(easterEggElement);
        triggerConfetti();
        
        // Animate modal in
        anime({
            targets: easterEggElement.querySelector('div'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutBack'
        });
    }

    // Track user interactions for hidden achievements
    let writingSessions = 0;
    let peakPerformanceTime = null;
    
    // Simulate tracking writing sessions
    document.addEventListener('click', function(e) {
        if (e.target.textContent.includes('Start') || e.target.textContent.includes('Try')) {
            writingSessions++;
            
            // Check for streak achievement
            if (writingSessions >= 7 && !hiddenAchievements.find(a => a.id === 'streak_master').unlocked) {
                unlockAchievement('streak_master');
            }
            
            // Check time-based achievements
            const hour = new Date().getHours();
            if (hour < 7 && !hiddenAchievements.find(a => a.id === 'early_bird').unlocked) {
                unlockAchievement('early_bird');
            } else if (hour >= 22 && !hiddenAchievements.find(a => a.id === 'night_owl').unlocked) {
                unlockAchievement('night_owl');
            }
        }
    });

    // Unlock achievement function
    function unlockAchievement(achievementId) {
        const achievement = hiddenAchievements.find(a => a.id === achievementId);
        if (achievement && !achievement.unlocked) {
            achievement.unlocked = true;
            showAchievementNotification(achievement);
            triggerConfetti();
        }
    }

    // Show achievement notification
    function showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
        notification.innerHTML = `
            <div class="flex items-center space-x-3">
                <span class="text-2xl">🏆</span>
                <div>
                    <p class="font-bold">Achievement Unlocked!</p>
                    <p class="text-sm">${achievement.name}: ${achievement.description}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        anime({
            targets: notification,
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutBack'
        });
        
        // Auto-remove after 4 seconds
        setTimeout(() => {
            anime({
                targets: notification,
                translateY: [0, -50],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeInBack',
                complete: () => {
                    notification.remove();
                }
            });
        }, 4000);
    }

    // Random celebration messages
    const celebrationMessages = [
        "🎉 Your writing is improving!",
        "✨ Another great session completed!",
        "🚀 You're on fire today!",
        "💪 Keep up the excellent work!",
        "⭐ You're becoming a writing master!"
    ];

    // Show random celebration
    function showRandomCelebration() {
        if (Math.random() < 0.2) { // 20% chance
            const message = celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)];
            showSurpriseTip(message);
        }
    }

    // Add celebration triggers
    document.addEventListener('click', function(e) {
        if (e.target.textContent.includes('Free') || e.target.textContent.includes('Trial')) {
            setTimeout(showRandomCelebration, 1000);
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for global access
window.WriteWise = {
    showSurpriseTip: function(tip) {
        // This can be called from anywhere to show surprise tips
        const tipElement = document.createElement('div');
        tipElement.className = 'fixed top-20 right-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg z-50 max-w-sm';
        tipElement.innerHTML = `
            <div class="flex items-start space-x-3">
                <div class="text-2xl">💡</div>
                <div>
                    <p class="font-semibold text-gray-900 mb-1">Did you know?</p>
                    <p class="text-sm text-gray-600">${tip}</p>
                </div>
            </div>
            <button class="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onclick="this.parentElement.remove()">
                <span class="text-lg">×</span>
            </button>
        `;
        
        document.body.appendChild(tipElement);
        
        setTimeout(() => {
            if (tipElement.parentNode) {
                tipElement.remove();
            }
        }, 5000);
    }
};