import React from 'react';
import ReactDom from 'react-dom';
import getRouter from './router/router';
/*热更新*/
if (module.hot) {
    module.hot.accept();
}


ReactDom.render(
    getRouter(),
    document.getElementById('app')
)

