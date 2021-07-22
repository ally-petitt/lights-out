export const MAKE_MOVE = "MAKE_MOVE";

export function makeMove(location) {
    console.log("makeMove")
    return {
        type: MAKE_MOVE,
        location // action payload
    }
}