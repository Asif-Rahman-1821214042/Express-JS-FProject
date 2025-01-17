export const greeting=async (req,res) => {
    return res.json({ message: "Hello World" });
}

export const cc=async (req,res) => {
    return res.json({ message: "I am post body" });
}

const JWT_SECRET = '203045';

export const token=async (req, res) => {
    // Payload for the token
    const payload = {
        user: 'Ratul',
        role: 'admin',
    };

    // Token expiration time (e.g., 1 hour)
    const options = {
        expiresIn: '2h',
    };

    // Generate the token
    const token = jwt.sign(payload, JWT_SECRET, options);

    // Send the token in the response
    res.json({
        success: true,
        token: token,
    });
}