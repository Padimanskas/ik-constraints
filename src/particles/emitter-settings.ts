const particleSettings = {
	'alpha': {
		'start': 1,
		'end': 1
	},
	'scale': {
		'start': 2.5,
		'end': 2,
		'minimumScaleMultiplier': 1
	},
	'color': {
		'start': '#ffffff',
		'end': '#ffffff'
	},
	'speed': {
		'start': 10,
		'end': 150,
		'minimumSpeedMultiplier': 10
	},
	'acceleration': {
		'x': 0,
		'y': 0
	},
	'maxSpeed': 0,
	'startRotation': {
		'min': 180,
		'max': 180
	},
	'noRotation': true,
	'rotationSpeed': {
		'min': 0,
		'max': 0
	},
	'lifetime': {
		'min': 0.001,
		'max': 0.3
	},
	'blendMode': 'normal',
	'frequency': 0.015,
	'emitterLifetime': -0.1,
	'maxParticles': 100,
	'pos': {
		'x': 0,
		'y': 0
	},
	'addAtBack': false,
	'spawnType': 'ring',
	'spawnCircle': {
		'x': 0,
		'y': 0,
		'r': 100,
		'minR': 100
	}
};

export default particleSettings;