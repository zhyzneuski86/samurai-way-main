import React from 'react';
import './index.css';
import {renderTree} from "./render";
import store from "./redux/state";



store.subscriber(renderTree)
renderTree()
