const path = require('path');

module.exports = [
    {
        name: "code",
        entry: {example1: __dirname + '/src/code.ts'},
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'code.js'
        }
    },
    {
        name: "example1",
        entry: {example1: __dirname + '/src/example1.ts'},
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'example1.js'
        }
    },
    {
        name: "example2",
        entry: {example1: __dirname + '/src/example2.ts'},
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'example2.js'
        }
    }
    ,
    {
        name: "example3",
        entry: {example1: __dirname + '/src/example3.ts'},
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'example3.js'
        }
    },
    {
        name: "example4",
        entry: {example1: __dirname + '/src/example4.ts'},
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'example4.js'
        }
    }
    ,
    {
        name: "example5",
        entry: {example1: __dirname + '/src/example5.ts'},
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'example5.js'
        }
    },
    {
        name: "example6",
        entry: {example6: __dirname + '/src/example6.ts'},
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'example6.js'
        }
    },
    {
        name: "example7",
        entry: {example7: __dirname + '/src/example7.ts'},
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'example7.js'
        }
    },
    {
        name: "example8",
        entry: {example8: __dirname + '/src/example8.ts'},
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'example8.js'
        }
    },
    {
        name: "example9",
        entry: {example9: __dirname + '/src/example9.ts'},
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'example9.js'
        }
    }
];
