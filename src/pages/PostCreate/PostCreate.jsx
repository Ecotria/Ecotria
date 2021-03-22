import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';


class PostCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titlePost:'',
            suscriberID:'',
            category:'',
            price:'',
            descriptionPost:'',
            address:'',
            email:'',
            phoneNumber:'',
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { titlePost, category, price, descriptionPost, address, email, phoneNumber } = this.state;
        if ( titlePost && category && price && descriptionPost && address && email && phoneNumber ) {
            this.props.createpost(titlePost, category, price, descriptionPost, address, email, phoneNumber);
        }
    }

    render() {
        const { creatingpost } = this.props
        const { titlePost, category, price, descriptionPost, address, phoneNumber, submitted } = this.state;
        return (
        <div className="create-post-page">    
                <div className ="form-group-input">

                    <h1>Crear Anuncio</h1>

                    <form onSubmit={this.handleSubmit} >

                        <div className="create-post-page">
                            <div className="form-group-input">
                                <input 
                                    type="text" 
                                    name="titlePost" 
                                    id="titlePost"
                                    placeholder="Título" 
                                    value={titlePost}
                                    onChange={this.handleChange}/>
                            </div>

                            <div className="form-group-input">
                                <select 
                                    name="category" 
                                    id="category" 
                                    placeholder="Categoría" 
                                    value={category}
                                    onChange={this.handleChange}> 
                                    <option value="Productor">Productor</option>
                                    <option value="Transporte">Transporte</option>
                                    <option value="Industria">Industria</option>
                                    <option value="Servicios">Servicios</option>
                                    <option value="Comprador">Comprador</option>
                                    <option value="Distribuidor">Distribuidor</option>
                                </select>
                            </div>    

                            <div className="form-group-input">
                                <input 
                                    type="text" 
                                    name="price" 
                                    id="price" 
                                    placeholder="Precio"
                                    value={price}
                                    onChange={this.handleChange}/>
                            </div>       

                            <div className="form-group-input">
                                <input 
                                    type="text" 
                                    name="descriptionPost" 
                                    id="descriptionPost" 
                                    placeholder="Ingrese una descripción de su oferta de negocio"
                                    value={descriptionPost} 
                                    onChange={this.handleChange} />
                            </div>        
                                
                            <div className="form-group-input">        
                                <input 
                                    type="text" 
                                    name="address" 
                                    id="address" 
                                    value={address}
                                    onChange={this.handleChange} 
                                    placeholder="Dirección"/>
                            </div>        

                            <div className="form-group-input">
                            <input 
                                type="tel" 
                                name="phoneNumber" 
                                id="phoneNumber" 
                                value={phoneNumber} 
                                onChange={this.handleChange} 
                                placeholder="Teléfono"/>
                        </div>


                        </div>
                
                        <div className="form-group-button">                  
                                <div className="form-group">
                                    <button className="btn-submit">Crear Anuncio</button>
                                    {creatingpost &&
                                        <img alt="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                    <Link to="/">Regresar al Mercado</Link>
                                </div>
                            </div>
                
                    </form>
                </div>
            </div>    
        );
    }
}

function mapState(state) {
    const { creatingpost } = state.authentication;
    return { creatingpost };
}


const actionCreators = {
    createpost: userActions.createpost
}

const connectedPostCreatePage = withRouter( connect(mapState, actionCreators)(PostCreate));
export { connectedPostCreatePage as PostCreate };


