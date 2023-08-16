const { hashPassword, comparePassword } = require("../helpers/authHashPassword");
const UserModel = require("../models/userSchema");
const jwt = require('jsonwebtoken')


//register user
const RegisterUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);

        //validation name
        if (!name) {
            return res.json({
                error: "Name is required!"
            });
        }
        //validation email
        if (!email) {
            return res.json({ error: "Email is required! " });
        }
        const existEmail = await UserModel.findOne({ email });
        if (existEmail) {
            return res.json({ error: "Email is taken already!" });
        }

        //validation password
        if (password === '') {
            return res.json({ error: "Password is required! " });
        } else if (password.length < 6) {
            return res.json({ error: "Password should be at least 6 characters long!" });
        }
        const tohashedPassword = await hashPassword(password);

        const user = await UserModel.create({
            name, password: tohashedPassword, email
        });

        return res.json(user);


    } catch (error) {
        console.log("error" + error);
    }
}


//login user
const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //validation mail, pass
        if (email === '') {
            return res.json({ error: "Email is required!" });
        } else if (password === '') {
            return res.json({ error: "Password is required!" });
        }

        const existUser = await UserModel.findOne({ email });

        //check exists user
        if (!existUser) {
            return res.json({ error: "No user found!" });
        }

        //check password match
        const matchPassword = await comparePassword(password, existUser.password);
        if (!matchPassword) {
            return res.json({ error: "Email or password do not match" });
        } else if (matchPassword) {
            const tokenAuth = jwt.sign({
                id: existUser._id,
                email: existUser.email,
                name: existUser.name,
                password: existUser.password
            }, process.env.JWT_SECRET, {});
            res.cookie('TOKEN_AUTH', tokenAuth, {
                expires: new Date(Date.now() + 50000)
            }).json({
                user: {
                    id: existUser._id,
                    name: existUser.name,
                    email: existUser.email
                }, tokenAuth
            })
        }

    } catch (error) {
        console.log(error)
    }
};

//get profile

const GetDataProfile = (req,res)=>{
    try {
        res.json(req.user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}




module.exports = { 
    RegisterUser, 
    LoginUser, 
    GetDataProfile 
}