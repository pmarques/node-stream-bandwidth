# Stream bandwidth

This modules is useful to get the stream bandwidth over the time

[![Build Status](https://snap-ci.com/pmarques/node-stream-bandwidth/branch/master/build_image)](https://snap-ci.com/pmarques/node-stream-bandwidth/branch/master)

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
