var path=require('path');

module.exports={
    entry:'./script2.jsx',
    output:{
        path:path.resolve(__dirname,''),
        filename:'r.js'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                query:{
                    presets:['es2015','react']
                }
            }
        ]

    }

}