export class InfiniteEmptyPlanet {
    normalizer(point) {
        return point;
    }
    dependingOnAccessibility(_point, _actionIfObstacle, actionIfFree) {
        return actionIfFree();
    }
}
//# sourceMappingURL=infiniteEmptyPlanet.js.map