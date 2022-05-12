const addon = require('bindings')('async');
const calculations = process.argv[2] || 100000000;

function printResult(type, pi, ms){
    console.log(type, 'method: ');
    console.log('\tπ = ' + pi + ' (' + Math.abs(pi - Math.PI) + ' away from actual)');
    console.log('\tTook ' + ms + 'ms');
    console.log();
}

function runSync(){
    let start = Date.now();
    let result = addon.calculateSync(calculations);
    printResult('Sync', result, Date.now() - start);
}

function runAsync(){
    let batches = process.argv[3] || 16;
    let ended = 0;
    let total = 0;
    let start = Date.now();

    function done(err, result){
        total += result;

        if (++ended == batches){
            printResult('Async', total / batches, Date.now() - start);
        }
    }

    for (let i=0;i<batches;i++){
        addon.calculateAsync(calculations / batches, done);
    }
}

runSync();
runAsync();