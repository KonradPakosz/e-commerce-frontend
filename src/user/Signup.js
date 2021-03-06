import React from 'react';
import Layout from '../core/layout';
import { API } from '../config';

const Signup = () => {
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value});
    };

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" />
            </div>
            <button className="btn btn-primary">
                Submit
            </button>
        </form>
    );

    return (
        <Layout 
        title="Signup Page" 
        description="Signup to Node React E-commerce App"
        className="container col-md-8 offset-md-2">
            {signUpForm()}
            {JSON.stringify(values)}
        </Layout>
    )
};

export default Signup;