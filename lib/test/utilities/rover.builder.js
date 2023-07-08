import { Orientations } from "../../src/topology/orientation";
import { PositionBuilder } from "./position.builder";
import { RoverWithState } from "../../src/rover/roverWithState";
export class RoverBuilder {
    constructor() {
        this._orientation = Orientations.North;
        this._position = PositionBuilder.origin();
    }
    havingForOrientation(orientation) {
        this._orientation = orientation;
        return this;
    }
    havingForPosition(position) {
        this._position = position;
        return this;
    }
    build() {
        return new RoverWithState(this._orientation, this._position);
    }
}
//# sourceMappingURL=rover.builder.js.map