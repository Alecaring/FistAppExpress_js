class HomeController {

    index(req, res) {
        res.render('layouts/layout', { body: 'index', title: 'Home' });
    }

    about(req, res) {
        res.render('layouts/layout', { body: 'about', title: 'About' });
    }
    
}

module.exports = new HomeController();