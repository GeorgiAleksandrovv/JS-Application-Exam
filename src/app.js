import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js'
import { layoutTemplate } from './views/layout.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { catalogPage } from './views/catalog.js';

//TODO chnage render root depending on project html structure
// const root = document,getElementById('wrapper')
const root = document.getElementById('wrapper')

page(decorateContext)
page('index.html','/');
page('/', homePage);
page('/catalog', catalogPage)
page('/login',loginPage);
page('/register',registerPage);
page('/logout',logoutAction)
page.start();


function decorateContext(ctx,next){
    ctx.render = renderView
    next();
}


//TODO inject dependencies
function renderView(content){
    const userData = getUserData();
    render(layoutTemplate(userData,content),root)
}

function logoutAction(ctx){
logout();
ctx.page.redirect('/')

}