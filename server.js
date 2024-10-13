const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/total-value', (req, res) => {
    const products = req.body;

    if (!Array.isArray(products)) {
        return res.status(400).json({ error: 'Input should be an array of products.' });
    }

    let totalValue = 0;

    products.forEach(product => {
        const { price, quality } = product;

        if (typeof price === 'number' && typeof quality === 'number') {
            totalValue += price * quality;
        } else {
            return res.status(400).json({ error: 'Each product must have a numeric price and quality.' });
        }
    });

    return res.json({ totalValue });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
