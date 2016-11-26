# Stream bandwidth

This modules is useful to get the stream bandwidth over the time

[![NPM version](http://img.shields.io/npm/v/stream-bandwidth.svg?style=flat-square)](https://npmjs.org/package/stream-bandwidth)
[![npm version](https://badge.fury.io/js/stream-bandwidth.svg)](https://badge.fury.io/js/stream-bandwidth)
[![Build Status](https://snap-ci.com/pmarques/node-stream-bandwidth/branch/master/build_image)](https://snap-ci.com/pmarques/node-stream-bandwidth/branch/master)
[![Build Status](https://semaphoreci.com/api/v1/pmarques/node-stream-bandwidth/branches/master/badge.svg)](https://semaphoreci.com/pmarques/node-stream-bandwidth)
[![CircleCI](https://circleci.com/gh/pmarques/node-stream-bandwidth.svg?style=svg)](https://circleci.com/gh/pmarques/node- stream-bandwidth)
[![Build Status](https://drone.io/github.com/pmarques/node-stream-bandwidth/status.png)](https://drone.io/github.com/pmarques/node-stream-bandwidth/latest)
[![Run Status](https://api.shippable.com/projects/57c9d10be19a0f0f00f790be/badge?branch=master)](https://app.shippable.com/projects/57c9d10be19a0f0f00f790be)
[![Coverage Badge](https://api.shippable.com/projects/57c9d10be19a0f0f00f790be/coverageBadge?branch=master)](https://app.shippable.com/projects/57c9d10be19a0f0f00f790be)

## How to use it

You just use it as a PassThrough stream and listen 2 events **progress** and **done**

```javascript
var rs = fs.createReadStream('/dev/zero');
var ws = fs.createWriteStream('/dev/null');

var bw = new Bandwidth();

bw.on('done', function(data) {
    console.log(data);
})

bw.on('progress', function(data) {
    console.log(data);
})

rs.pipe(bw).pipe(ws);
```

## Events

### progress

This event is called every second with an Object with the number of bytes that
 was passed through the stream in the last second

```json
{
    "bytes": 123456
}
```

### done

This event is called when all the data is flushed with an object with the total
 bytes that was passed through the stream

```json
{
    "total_bytes": 123456
}
```

# License

MIT
