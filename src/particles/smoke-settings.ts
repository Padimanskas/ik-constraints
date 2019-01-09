const particleSettings = {
    alpha: {
        start: 0.15,
        end: 0
    },
    scale: {
        start: 0.3,
        end: 1,
        minimumScaleMultiplier: 0.53
    },
    color: {
        start: '#ffffff',
        end: '#858585'
    },
    speed: {
        start: 50,
        end: 150,
        minimumSpeedMultiplier: 0.3
    },
    acceleration: {
        x: 0,
        y: 0
    },
    maxSpeed: 0,
    startRotation: {
        min: 260,
        max: 280
    },
    noRotation: false,
    rotationSpeed: {
        min: 0,
        max: 0
    },
    lifetime: {
        min: 0.5,
        max: 2
    },
    blendMode: 'normal',
    frequency: 0.037,
    emitterLifetime: -0.44,
    maxParticles: 150,
    pos: {
        x: 0,
        y: 0
    },
    addAtBack: false,
    spawnType: 'rect',
    spawnRect: {
        x: -1,
        y: 0,
        w: 0,
        h: 0
    }
};

export default particleSettings;