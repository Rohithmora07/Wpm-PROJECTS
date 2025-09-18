const homelist = (req, res) => {
  res.render('locations-list', { title: 'Home' });
};

const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Location Info' });
};              
const addReview = (req, res) => {
  // Sample location object
  const location = {
    id: req.params.id,
    name: "Starcups"
  };

  res.render('location-review-form', {
    title: 'Add Review',
    location: location
  });
};


const aboutPage = (req, res) => {
  res.render('about', { title: 'About' }); // or create about.jade separately
};
module.exports = {
  homelist,
  locationInfo,
  addReview
};
