const express = require('express');

const pool = require('../db/client');

const router = new express.Router();

router.get('/player/:id/combat', (req, res) => {
  // if (redis.getKey(`combatant-${id}`));

  pool.query('SELECT * FROM combatants WHERE id = $1', [req.params.id], (err, results) => {
    if (err || !results.rowCount) {
      res.status(404).json({ message: 'Could not find combat data' });
    } else {
      res.json({ data: results.rows[0] });
    }
  });
});

module.exports = router;