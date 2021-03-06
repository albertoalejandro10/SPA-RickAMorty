const path = require('path'); // Nos permite acceder a donde estamos en las carpetas. Ya sea en local o en la nube.

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Archivo necesario para trabajar con Html
const CopyWebpackPlugin = require('copy-webpack-plugin'); //

module.exports = { //Aqui se encuentra toda la configuracion de lo que va a suceder. Modulo para exportar

    entry: './src/index.js', // Punto de entrada con su direccion. Aqui vive el codigo inicial y de aqui parte al desarrollo

    output: { // Donde se envia el proyecto estructurado y compilado listo para produccion

        path: path.resolve(__dirname, 'dist'), // Creamos el lugar donde se exportara el proyecto

        filename: 'main.js' //Este es el nombre del archivo final para produccion
    },

    resolve: {

        extensions: ['.js'], // Extensiones que vamos a utilizar

    },
    module: { // Se crea un modulo con las reglas necesarias que vamos a utilizar

        rules: [ //Reglas

            {
                test: /\,js?$/, //Nos permite identificar los archivos segun se encuentran en nuestro entorno.

                exclude: /node_modules/, //Excluimos la carpeta de node_modules

                use: {

                    loader: 'babel-loader', //Utilizar un loader como configuracion establecida

                }
            }
        ]
    },
    
    plugins: [ // Establecemos los plugins que vamos a usar 

        new HtmlWebpackPlugin( // Permite trabajar con los archivos html
            {
                inject: true, //Como amos a inyectar un valor a un archivo html

                template: './public/index.html', // Direccion donde se encuentra el template principal

                filename: './index.html' //El nombre que tendra el archivo

            }
        ),
        new CopyWebpackPlugin({
            patterns:[{ from: './src/styles/styles.css', 
            to: ''}],
        })
    ]
}