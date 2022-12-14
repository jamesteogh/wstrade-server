import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const login = async (req, res) => {
    const { email, password } = req.body;

    console.log(req.body);

    try {
        let user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(401).json({
                success: false,
                data: {},
                error: 'Invalid Credentials',
            });
        }

        // Match password

        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                data: {},
                error: 'Invalid Credentials',
            });
        }
        // Assign Token
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(payload,'my-secret',{expiresIn: 360000,},
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ success: true, data: user, token });
            }
        );
    } catch (err) {
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map((val) => val.message);
            res.status(400).json({ success: false, data: {}, error: message });
        }        
    }
};

export const createuser = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.json({
                success: false,
                data: {},
                error: 'User already exists',
            });
        }

        const newUser = new User(req.body);
        await newUser.save();

        // Assign Token
        const payload = {
            user: {
                id: newUser.id,
            },
        };

        jwt.sign(payload,'my-secret',{expiresIn: 360000,},
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ success: true, data: newUser, token });
            }
        );
    } catch (error) {
        if (error.name === 'ValidationError') {
            const message = Object.values(error.errors).map((val) => val.message);
    
            res.status(400).json({ success: false, data: {}, error: message });
        }
    }
};