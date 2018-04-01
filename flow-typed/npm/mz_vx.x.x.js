// flow-typed signature: 6adba83edf2873c9d3b63a5f20bb4907
// flow-typed version: <<STUB>>/mz_v^2.7.0/flow_v0.69.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'mz'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'mz' {
  declare module.exports: any;
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'mz/child_process' {
  declare module.exports: any;
}

declare module 'mz/crypto' {
  declare module.exports: any;
}

declare module 'mz/dns' {
  declare module.exports: any;
}

declare module 'mz/fs' {
  declare function readFile(
    path: string | Buffer | URL | number,
  ): Promise<Buffer>;
  declare function readFile(
    path: string | Buffer | URL | number,
    encoding: string,
  ): Promise<string>;
  declare function readFile(
    path: string | Buffer | URL | number,
    options: { encoding: string; flag?: string },
  ): Promise<string>;
  declare function readFile(
    path: string | Buffer | URL | number,
    options: { flag?: string },
  ): Promise<Buffer>;
  declare module.exports: any;
}

declare module 'mz/readline' {
  declare module.exports: any;
}

declare module 'mz/zlib' {
  declare module.exports: any;
}

// Filename aliases
declare module 'mz/child_process.js' {
  declare module.exports: $Exports<'mz/child_process'>;
}
declare module 'mz/crypto.js' {
  declare module.exports: $Exports<'mz/crypto'>;
}
declare module 'mz/dns.js' {
  declare module.exports: $Exports<'mz/dns'>;
}
declare module 'mz/fs.js' {
  declare module.exports: $Exports<'mz/fs'>;
}
declare module 'mz/index' {
  declare module.exports: $Exports<'mz'>;
}
declare module 'mz/index.js' {
  declare module.exports: $Exports<'mz'>;
}
declare module 'mz/readline.js' {
  declare module.exports: $Exports<'mz/readline'>;
}
declare module 'mz/zlib.js' {
  declare module.exports: $Exports<'mz/zlib'>;
}