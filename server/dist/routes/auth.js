import { Router } from 'express';
const router = Router();
// Mock user data
const mockUsers = [
    { id: '1', email: 'user@example.com', fullName: 'Nguyễn Văn A', role: 'customer' },
    { id: '2', email: 'admin@example.com', fullName: 'Admin User', role: 'admin' },
];
// Register
router.post('/register', (req, res) => {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const newUser = {
        id: `user-${Date.now()}`,
        email,
        fullName,
        role: 'customer',
    };
    mockUsers.push(newUser);
    res.json({
        token: `mock-token-${newUser.id}`,
        user: newUser,
    });
});
// Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Missing email or password' });
    }
    const user = mockUsers.find(u => u.email === email);
    if (user) {
        res.json({
            token: `mock-token-${user.id}`,
            user,
        });
    }
    else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});
// Logout
router.post('/logout', (_req, res) => {
    res.json({ message: 'Logged out successfully' });
});
// Get current user
router.get('/me', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'No authorization header' });
    }
    // Mock: extract user id from token
    const userId = authHeader.replace('Bearer mock-token-', '');
    const user = mockUsers.find(u => u.id === userId);
    if (user) {
        res.json(user);
    }
    else {
        res.status(401).json({ error: 'Invalid token' });
    }
});
export default router;
//# sourceMappingURL=auth.js.map