module.exports={
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }
    
        return config
    },
    
    images:{
        domains:["links.papareact.com", "fakestoreapi.com"],
    },

    env:{
      stripe_public_key : process.env.STRIPE_PUBLIC_KEY
    }
};