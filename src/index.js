import React from "react";
import ReactDom from 'react-dom/client'
import App from './App'




let RenderFile = ReactDom.createRoot(document.getElementById('root'))

RenderFile.render(<App />)