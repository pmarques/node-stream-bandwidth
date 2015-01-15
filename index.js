var Transform = require('stream').Transform;

var util = require('util');

function Bandwidth(options) {
    if (!(this instanceof Bandwidth))
        return new Bandwidth(options);

    Transform.call(this, options);

    this._counter = 0;
    this._total = 0;

    this._timer = setInterval(function () {
        this.emit('progress', {
            bytes: this._counter
        });

        this._counter = 0;
    }.bind(this), 1e3);
}

util.inherits(Bandwidth, Transform);

Bandwidth.prototype._transform = function (data, encoding, callback) {
    // TODO: count bytes if array or string and objects if Object
    this._counter += data.length;
    this._total += data.length;

    this.push(data);

    callback();
}

Bandwidth.prototype._flush = function(flushCompleted) {
    // Clear periodic information timer
    clearInterval(this._timer);

    this.emit('done', {
        total_bytes: this._total,
    });

    // everything is done!
    flushCompleted();
}

module.exports = Bandwidth;
