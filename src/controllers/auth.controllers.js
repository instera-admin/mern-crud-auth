import {createAccessToken} from '../libs/jwt.js'

export const register = async (req,res) => {

    const token = await createAccessToken({id:"id_token"})

    res.cookie('token',token)
    res.json({
        message: 'User created successfully'
    });

};

export const login = async (req,res) => {

    const token = await createAccessToken({id:"id_token"})

    res.cookie('token',token)
    res.json({
        message: 'Login successfully'
    });
};

export const logout = (req,res) => {
    res.cookie('token', "", {
        expires:new Date(0)
    })
    return res.sendStatus(200);
};

export const profile = (req,res) => {
    res.send("Profile");
};