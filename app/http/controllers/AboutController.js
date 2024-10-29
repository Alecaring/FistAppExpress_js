class AboutController {

    index(req, res) {
        res.render('layouts/layout', { body: 'about', title: 'About' });
    }
    
}

module.exports = new AboutController();