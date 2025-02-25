// See configurable parameters at: http://johnny-five.io/api/servo/

const controller = "PCA9685"
const address = "0x41"

const kDirect = 1;
const kInverse = -1;

const servoConfig_DrQP = {
    rightFront: {
        alpha: { id: 2, direction: kDirect },
        beta: { id: 4, direction: kDirect },
        gamma: { id: 6, direction: kDirect },
    },

    rightMiddle: {
        alpha: { id: 14, direction: kDirect },
        beta: { id: 16, direction: kDirect },
        gamma: { id: 18, direction: kDirect },
    },

    rightBack: {
        alpha: { id: 8, direction: kDirect },
        beta: { id: 10, direction: kDirect },
        gamma: { id: 12, direction: kDirect },
    },

    leftFront: {
        alpha: { id: 1, direction: kDirect },
        beta: { id: 3, direction: kInverse },
        gamma: { id: 5, direction: kInverse },
    },

    leftMiddle: {
        alpha: { id: 13, direction: kDirect },
        beta: { id: 15, direction: kInverse },
        gamma: { id: 17, direction: kInverse },
    },

    leftBack: {
        alpha: { id: 7, direction: kDirect },
        beta: { id: 9, direction: kInverse },
        gamma: { id: 11, direction: kInverse },
    },
}
const servoConfig = {
    rightMiddle: {
        alpha: { controller, pin: 6, address },
        beta: { controller, pin: 8, address },
        gamma: { controller, pin: 7, address },
    },

    rightFront: {
        alpha: { controller, pin: 15, address },
        beta: { pin: 3 },
        gamma: { pin: 5 },
    },

    leftFront: {
        alpha: { controller, pin: 13, address },
        beta: { controller, pin: 14, address },
        gamma: { controller, pin: 12, address },
    },

    leftMiddle: {
        alpha: { controller, pin: 10, address },
        beta: { controller, pin: 9, address },
        gamma: { controller, pin: 11, address },
    },

    leftBack: {
        alpha: { controller, pin: 2, address },
        beta: { controller, pin: 1, address },
        gamma: { controller, pin: 0, address },
    },

    rightBack: {
        alpha: { controller, pin: 5, address },
        beta: { controller, pin: 4, address },
        gamma: { controller, pin: 3, address },
    },
}

module.exports = { servoConfig, servoConfig_DrQP }
