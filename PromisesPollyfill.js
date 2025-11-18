function promiseAll(promisesArr) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        promisesArr.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completed++;

                    if (completed === promisesArr.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}


function promiseAllSettled(promisesArr) {
    return new Promise((resolve) => {
        const results = [];
        let completed = 0;

        promisesArr.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = { status: "fulfilled", value };
                })
                .catch(reason => {
                    results[index] = { status: "rejected", reason };
                })
                .finally(() => {
                    completed++;
                    if (completed === promisesArr.length) {
                        resolve(results);
                    }
                });
        });
    });
}


function promiseAny(promisesArr) {
    return new Promise((resolve, reject) => {
        const errors = [];
        let failed = 0;

        promisesArr.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(resolve)
                .catch(err => {
                    errors[index] = err;
                    failed++;

                    if (failed === promisesArr.length) {
                        reject(new AggregateError(errors, "All promises were rejected"));
                    }
                });
        });
    });
}


function promiseRace(promisesArr) {
    return new Promise((resolve, reject) => {
        promisesArr.forEach(promise => {
            Promise.resolve(promise).then(resolve).catch(reject);
        });
    });
}
