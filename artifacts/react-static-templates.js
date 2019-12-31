

import React from 'react'
import universal, { setHasBabelPlugin } from '/home/agaripov/code/play/blog/react-static-blog/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/home/agaripov/code/play/blog/react-static-blog/src/pages/404.js'), universalOptions)
      t_0.template = '/home/agaripov/code/play/blog/react-static-blog/src/pages/404.js'
      
const t_1 = universal(import('/home/agaripov/code/play/blog/react-static-blog/src/pages/about.js'), universalOptions)
      t_1.template = '/home/agaripov/code/play/blog/react-static-blog/src/pages/about.js'
      
const t_2 = universal(import('/home/agaripov/code/play/blog/react-static-blog/src/pages/blog.js'), universalOptions)
      t_2.template = '/home/agaripov/code/play/blog/react-static-blog/src/pages/blog.js'
      
const t_3 = universal(import('/home/agaripov/code/play/blog/react-static-blog/src/pages/index.js'), universalOptions)
      t_3.template = '/home/agaripov/code/play/blog/react-static-blog/src/pages/index.js'
      
const t_4 = universal(import('/home/agaripov/code/play/blog/react-static-blog/src/containers/Post'), universalOptions)
      t_4.template = '/home/agaripov/code/play/blog/react-static-blog/src/containers/Post'
      

// Template Map
export default {
  '/home/agaripov/code/play/blog/react-static-blog/src/pages/404.js': t_0,
'/home/agaripov/code/play/blog/react-static-blog/src/pages/about.js': t_1,
'/home/agaripov/code/play/blog/react-static-blog/src/pages/blog.js': t_2,
'/home/agaripov/code/play/blog/react-static-blog/src/pages/index.js': t_3,
'/home/agaripov/code/play/blog/react-static-blog/src/containers/Post': t_4
}
// Not Found Template
export const notFoundTemplate = "/home/agaripov/code/play/blog/react-static-blog/src/pages/404.js"

