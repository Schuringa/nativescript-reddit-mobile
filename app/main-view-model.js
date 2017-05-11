"use strict";
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var http = require("http");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        var _this = _super.call(this) || this;
        _this.posts = new observable_array_1.ObservableArray([]);
        _this.getPosts();
        return _this;
    }
    ViewModel.prototype.getPosts = function () {
        var _this = this;
        http.getJSON("https://reddit.com/r/aww.json")
            .then(function (response) {
            var children = response.data.children;
            children.forEach(function (item) {
                _this.posts.push({
                    title: item.data.title,
                    thumbnail: item.data.thumbnail,
                    user: item.data.author,
                    votes: item.data.ups,
                    url: item.data.url
                });
            });
        });
    };
    return ViewModel;
}(observable_1.Observable));
exports.ViewModel = ViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBMkM7QUFDM0MsMERBQXNEO0FBQ3RELDJCQUE2QjtBQUM3QjtJQUErQiw2QkFBVTtJQUdyQztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQUZHLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7SUFDcEIsQ0FBQztJQUVPLDRCQUFRLEdBQWhCO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQzthQUM1QyxJQUFJLENBQUMsVUFBQyxRQUFhO1lBQ2hCLElBQUksUUFBUSxHQUFlLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBRWxELFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUN0QixTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO29CQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO29CQUNwQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO2lCQUNyQixDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQTtRQUVOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUErQix1QkFBVSxHQTBCeEM7QUExQlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSBcImh0dHBcIjtcbmV4cG9ydCBjbGFzcyBWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwb3N0czogT2JzZXJ2YWJsZUFycmF5PGFueT5cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wb3N0cyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgICAgICB0aGlzLmdldFBvc3RzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRQb3N0cygpIHtcbiAgICAgICAgaHR0cC5nZXRKU09OKFwiaHR0cHM6Ly9yZWRkaXQuY29tL3IvYXd3Lmpzb25cIilcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IDxBcnJheTxhbnk+PnJlc3BvbnNlLmRhdGEuY2hpbGRyZW47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOiBpdGVtLmRhdGEudGh1bWJuYWlsLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBpdGVtLmRhdGEuYXV0aG9yLFxuICAgICAgICAgICAgICAgICAgICB2b3RlczogaXRlbS5kYXRhLnVwcyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBpdGVtLmRhdGEudXJsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbiJdfQ==