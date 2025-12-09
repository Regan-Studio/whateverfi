
require('dotenv').config();
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const connectDB = require('../config/db');
const Idea = require('../models/Idea');
const User = require('../models/User');
const Comment = require('../models/Comment');

connectDB();

const createUsers = async (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push({
            email: faker.internet.email(),
            password: 'password123', // Will be hashed by pre-save hook if creating via model, but insertMany skips hooks usually. 
            // NOTE: For seeder, we might need to manually hash or use create. 
            // For speed, we will use create for users to trigger hooks.
            name: faker.person.fullName(),
            bio: faker.person.bio(),
            reputation: faker.number.int({ min: 0, max: 500 }),
            plan: Math.random() > 0.8 ? 'pro' : 'free'
        });
    }
    
    // We use a loop with create to ensure password hashing works
    const createdUsers = [];
    for (const u of users) {
        const user = await User.create(u);
        createdUsers.push(user);
    }
    return createdUsers;
};

const createIdeas = async (users) => {
    const ideas = [];
    const categories = ['SaaS', 'AI/ML', 'Mobile App', 'Fintech', 'Health & Wellness', 'Education', 'Hardware'];
    
    for (let i = 0; i < 50; i++) {
        const author = users[Math.floor(Math.random() * users.length)];
        const category = categories[Math.floor(Math.random() * categories.length)];
        
        ideas.push({
            id: `idea-seed-${i}`,
            day: 365 - i,
            title: faker.company.catchPhrase(),
            description: faker.company.catchPhraseDescriptor() + " " + faker.lorem.sentence(),
            problem: faker.lorem.paragraph(),
            solution: faker.lorem.paragraph(),
            targetAudience: "General Public",
            region: "Global",
            category: category,
            tags: [category, 'Startup', 'Tech'],
            author: author._id,
            difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
            date: new Date().toISOString(),
            status: ['Open', 'Building', 'Shipped'][Math.floor(Math.random() * 3)],
            views: faker.number.int({ min: 10, max: 5000 }),
            marketAnalysis: {
                tam: "$10B",
                painSeverity: faker.number.int({ min: 20, max: 90 })
            },
            trendMetrics: {
                keyword: faker.word.sample(),
                volume: faker.number.int({ min: 100, max: 10000 }),
                growth: faker.number.int({ min: -20, max: 200 }),
                history: Array.from({length: 12}, () => faker.number.int({min: 10, max: 100}))
            }
        });
    }
    return await Idea.insertMany(ideas);
};

const importData = async () => {
    try {
        console.log('Clearing DB...');
        await Idea.deleteMany();
        await User.deleteMany();
        await Comment.deleteMany();

        console.log('Seeding Users...');
        const users = await createUsers(10);

        console.log('Seeding Ideas...');
        const ideas = await createIdeas(users);

        console.log('Seeding Interactions...');
        // Add random votes and comments
        for (const idea of ideas) {
            // Votes
            const voterCount = Math.floor(Math.random() * 5);
            for (let i = 0; i < voterCount; i++) {
                const voter = users[Math.floor(Math.random() * users.length)];
                if (!idea.voters.includes(voter._id)) {
                    idea.voters.push(voter._id);
                }
            }
            await idea.save();

            // Comments
            const commentCount = Math.floor(Math.random() * 3);
            for (let i = 0; i < commentCount; i++) {
                const commenter = users[Math.floor(Math.random() * users.length)];
                await Comment.create({
                    ideaId: idea.id,
                    user: commenter._id,
                    authorName: commenter.name || commenter.email.split('@')[0],
                    text: faker.lorem.sentence()
                });
            }
        }

        console.log('Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Idea.deleteMany();
        await User.deleteMany();
        await Comment.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
