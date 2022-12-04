import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import SAMPLE_DOGS from './dogs.json' // a sample list of dogs (model)

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)
