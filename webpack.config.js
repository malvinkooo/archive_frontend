var path = require("path");
var copyWebpackPlugin = require("copy-webpack-plugin");
var miniCssExtractPlugin = require("mini-css-extract-plugin");

var NODE_ENV = process.env.NODE_ENV || "development";
var isDev = NODE_ENV === "development";

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    mode: NODE_ENV,
    devtool: isDev && "eval-source-map",
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                    miniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: isDev ? ("[local]__[hash:base64:5]") : ("[hash:base64:15]")
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name]/[name][ext]',
                }
            },
            {
                test: /\.(jpeg|jpg|png|gif)/,
                type: "asset/resource",
                generator: {
                    filename: './images/[name][ext]',
                }
            }
        ]
    },
    plugins: [
        new copyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, "src", "static"),
                to: path.resolve(__dirname, "dist")
            }]
        }),
        new miniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        compress: true,
        port: 9090
    }
}