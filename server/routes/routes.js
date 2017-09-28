
const EntriesController = require('../controllers/entry_controller');

module.exports = (app) => {

  app.post('/entries', EntriesController.add),
  app.get('/entries', EntriesController.getEntries),
  app.get('/init', EntriesController.getInitData)
};
