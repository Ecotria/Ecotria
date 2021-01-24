import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions';


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
        const { titlePost, category, price, descriptionPost, address, phoneNumber } = this.state;
        return (
            <div className ="post-create-form">
                <h1>Nuevo Listado</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group-input">
                        <input 
                            type="text" 
                            name="titlepost" 
                            id="titlepost"
                            placeholder="Título" 
                            value={titlePost}
                            onChange={this.handleChange}/>
                       
                        <select 
                            name="categorias" 
                            id="categorias" 
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

                        <input 
                            type="text" 
                            name="price" 
                            id="price" 
                            value={price}
                            onChange={this.handleChange}/>
                        <input 
                            type="text" 
                            name="descriptionpost" 
                            id="descriptionpost" 
                            value={descriptionPost} 
                            onChange={this.handleChange} 
                            placeholder="Ingrese una descripción de su oferta de negocio"/>
                        <input 
                            type="text" 
                            name="address" 
                            id="address" 
                            value={address}
                            onChange={this.handleChange} 
                            placeholder="Dirección"/>
                        <input 
                            type="tel" 
                            name="phonenumber" 
                            id="phonenumber" 
                            value={phoneNumber} 
                            onChange={this.handleChange} 
                            placeholder="Teléfono"/>

                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { creatingpost } = state.postcreation;
    return { creatingpost };
}


const actionCreators = {
    createpost: userActions.createpost
}

export default connect(mapState, actionCreators)(PostCreate);


