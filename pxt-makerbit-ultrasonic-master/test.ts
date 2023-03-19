/**
 * Ultrasonic tests
 */

makerbit.connectUltrasonicDistanceSensor(DigitalPin.P14, DigitalPin.P15);
makerbit.onUltrasonicObjectDetected(10, DistanceUnit.CM, () => {});
const distance: number = makerbit.getUltrasonicDistance(DistanceUnit.CM);
const isNear = makerbit.isUltrasonicDistanceLessThan(10, DistanceUnit.CM);
