# test-aws-sdk-js-typescript-detection

Testing for TypeScript detection feature added in https://github.com/aws/aws-sdk-js-v3/pull/7786

## Setup

By default, the `md/tsc` is not populated in user agent.

```console
$ node --test src/getUserAgent.spec.cjs | grep 'md/tsc'
```

The `md/tsc` will be populated in user agent only when typescript is installed.

```console
$ npm install --save-dev typescript

$ node --test src/getUserAgent.spec.cjs | grep 'md/tsc'
    # Subtest: should return 'md/tsc' at index [5][0]
    ok 5 - should return 'md/tsc' at index [5][0]
```
