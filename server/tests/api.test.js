
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // Ensure server.js exports app
const User = require('../models/User');
const Idea = require('../models/Idea');

// Use a separate test DB if possible, or clear before use
beforeAll(async () => {
    // In a real env, connect to test DB here.
    // Assuming connected via server.js for simplicity in this artifact
});

describe('Full User Journey', () => {
    let token;
    let userId;
    let ideaId;

    it('1. Should register a new user', async () => {
        const res = await request(app)
            .post('/api/auth/signup')
            .send({
                email: 'test@example.com',
                password: 'password123'
            });
        
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('token');
        token = res.body.token;
        userId = res.body._id;
    });

    it('2. Should fail to register duplicate user', async () => {
        const res = await request(app)
            .post('/api/auth/signup')
            .send({
                email: 'test@example.com',
                password: 'password123'
            });
        
        expect(res.statusCode).toEqual(400);
    });

    it('3. Should login the user', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'test@example.com',
                password: 'password123'
            });
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
        token = res.body.token; // Refresh token just in case
    });

    it('4. Should create a new idea', async () => {
        const res = await request(app)
            .post('/api/ideas')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Test Idea',
                description: 'A test idea description',
                category: 'SaaS',
                difficulty: 'Easy',
                tags: ['test', 'api']
            });
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Test Idea');
        ideaId = res.body.id;
    });

    it('5. Should vote on the idea', async () => {
        const res = await request(app)
            .put(`/api/ideas/${ideaId}/vote`)
            .set('Authorization', `Bearer ${token}`);
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.votes).toBeGreaterThan(0);
    });
});

afterAll(async () => {
    // Cleanup
    await User.deleteOne({ email: 'test@example.com' });
    if (ideaId) await Idea.deleteOne({ id: ideaId });
    // mongoose.connection.close(); 
});
