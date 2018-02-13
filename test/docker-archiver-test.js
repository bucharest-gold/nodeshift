'use strict';

const test = require('tape');
const proxyquire = require('proxyquire');

// TODO: test the changing of BUILD LOCATION

test('test default build location', (t) => {
  const dockerArchiver = require('../lib/docker-archiver');
  t.equals(dockerArchiver.DEFAULT_BUILD_LOCATION, 'tmp/nodeshift/build', 'tmp/nodeshift/build should be the default directory');
  t.end();
});

test('test cleanup function', (t) => {
  const dockerArchiver = proxyquire('../lib/docker-archiver', {
    './helpers': {
      createDir: () => {
        return Promise.resolve();
      },
      cleanUp: () => {
        return Promise.resolve();
      }
    },
    tar: {
      create: () => {
        return Promise.resolve();
      }
    }
  });

  const config = {
    projectPackage: {}
  };

  dockerArchiver.archiveAndTar(config).then(() => {
    t.pass('should cleanup stuff');
    t.end();
  });
});

test('test cleanup function - failure', (t) => {
  const dockerArchiver = proxyquire('../lib/docker-archiver', {
    './helpers': {
      cleanUp: () => {
        return Promise.reject(new Error('error'));
      }
    }
  });

  dockerArchiver.archiveAndTar({}).catch(() => {
    t.pass('should fail with error');
    t.end();
  });
});

test('test error with create dir function', (t) => {
  const dockerArchiver = proxyquire('../lib/docker-archiver', {
    './helpers': {
      createDir: () => {
        return Promise.reject(new Error('error creating directory'));
      },
      cleanUp: () => {
        return Promise.resolve();
      }
    }
  });

  const config = {
    projectPackage: {}
  };

  dockerArchiver.archiveAndTar(config).catch((err) => {
    t.equals(err.message, 'error creating directory');
    t.end();
  });
});

test('test logger warning if no files prop', (t) => {
  const dockerArchiver = proxyquire('../lib/docker-archiver', {
    './helpers': {
      createDir: () => {
        return Promise.resolve();
      },
      cleanUp: () => {
        return Promise.resolve();
      }
    },
    tar: {
      create: () => {
        return Promise.resolve();
      }
    },
    './common-log': () => {
      return {
        warning: (warning) => {
          t.equal(warning, 'a file property was not found in your package.json, archiving the current directory.');
          return warning;
        },
        info: info => info
      };
    }
  });

  const config = {
    projectPackage: {}
  };

  dockerArchiver.archiveAndTar(config).then(() => {
    t.pass('should resolve');
    t.end();
  });
});

test('test logger warning if some files don\'t exist', (t) => {
  const dockerArchiver = proxyquire('../lib/docker-archiver', {
    tar: {
      create: () => {
        return Promise.resolve();
      }
    },
    './helpers': {
      createDir: () => {
        return Promise.resolve();
      },
      cleanUp: () => {
        return Promise.resolve();
      },
      normalizeFileList: () => {
        return {
          nonexistent: ['file1', 'file2'],
          existing: ['file3']
        };
      }
    },
    './common-log': () => {
      return {
        warning: (warning) => {
          t.equal(warning, 'The following files do not exist: file1,file2');
          return warning;
        },
        info: info => info
      };
    }
  });

  const config = {
    projectPackage: {
      files: ['file1', 'file2']
    }
  };

  dockerArchiver.archiveAndTar(config).then(() => {
    t.pass('should resolve');
    t.end();
  });
});

test('test logger no warning', (t) => {
  const dockerArchiver = proxyquire('../lib/docker-archiver', {
    tar: {
      create: () => {
        return Promise.resolve();
      }
    },
    './helpers': {
      createDir: () => {
        return Promise.resolve();
      },
      cleanUp: () => {
        return Promise.resolve();
      },
      normalizeFileList: () => {
        return {
          nonexistent: [],
          existing: ['file3']
        };
      }
    }
  });

  const config = {
    projectPackage: {
      files: ['file1', 'file2']
    }
  };

  dockerArchiver.archiveAndTar(config).then(() => {
    t.pass('should resolve');
    t.end();
  });
});

test('change in project location', (t) => {
  const config = {
    projectLocation: '/this/is/a/dir',
    projectPackage: {
      files: ['file1', 'file2']
    }
  };

  const dockerArchiver = proxyquire('../lib/docker-archiver', {
    './helpers': {
      createDir: () => {
        return Promise.resolve();
      },
      cleanUp: () => {
        return Promise.resolve();
      },
      normalizeFileList: (files, projectLocation) => {
        t.equal(projectLocation, config.projectLocation, 'projectLocation should be here');
        console.log(projectLocation);
        return {
          nonexistent: [],
          existing: ['file3']
        };
      }
    },
    tar: {
      create: (options) => {
        t.equal(options.cwd, config.projectLocation, 'project location should be here');
        t.equal(options.file, '/this/is/a/dir/tmp/nodeshift/build/archive.tar', 'project location should be on the path');
        return Promise.resolve();
      }
    }
  });

  dockerArchiver.archiveAndTar(config).then(() => {
    t.pass('should cleanup stuff');
    t.end();
  });
});
