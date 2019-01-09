const particleSettings = {
    alpha: {
        start: 1,
        end: 1
    },
    scale: {
        start: 2,
        end: 2,
        minimumScaleMultiplier: 1
    },
    color: {
        start: '#ffffff',
        end: '#ffffff'
    },
    speed: {
        start: 250,
        end: 250,
        minimumSpeedMultiplier: 1
    },
    acceleration: {
        x: 0,
        y: 0
    },
    maxSpeed: 0,
    startRotation: {
        min: 180,
        max: 360
    },
    noRotation: true,
    rotationSpeed: {
        min: 0,
        max: 0
    },
    lifetime: {
        min: 1,
        max: 2
    },
    blendMode: 'normal',
    frequency: 0.001,
    emitterLifetime: -1,
    maxParticles: 10,
    pos: {
        x: 0,
        y: 0
    },
    addAtBack: false,
    spawnType: 'circle',
    spawnCircle: {
        x: 0,
        y: 0,
        r: 0
    }
};

export default particleSettings;