import React from 'react';
import {Link} from 'react-router-dom';

const Cabecalho = props => {
    return (
        <div>

            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>                        
                        </button>
                        <Link className='navbar-brand' to="/">Logo</Link>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to="/">INICIO</Link></li>
                            <li><Link to="/servicos">SERVIÇOS</Link></li>
                            <li><Link to="/portfolios">PORTFOLIO</Link></li>
                            <li><Link to="/precos">PREÇOS</Link></li>
                            <li><Link to="/contato">CONTATO</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='jumbotron text-center'>
                    <h1>Company</h1> 
                    <p>We specialize in blablabla</p> 
                    <form>
                        <div className='input-group'>
                            <input type='email' className='form-control' size='50' placeholder='Email Address' required />
                            <div className='input-group-btn'>
                                <button type='button' className='btn btn-danger'>Subscribe</button>
                            </div>
                        </div>
                    </form>
            </div>
            
        </div>
    );
}

export default Cabecalho;