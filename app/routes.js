const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

///////////////////////////////////////////////////////////////
// **** COPY AND PASTE THIS AS A HEADER FOR YOUR ROUTES **** //
// All routes for: <prototype name>
// Iteration/version: <number>
// Located in: <folder name>
// Date updated: <insert date>
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// All routes for: Hearings Management
// Iteration/version: 3
// Located in: app/views/hearings/pages/iteration3
// Date updated: Oct 2021

// Start happy path and set venue default
router.post('/hearings/pages/iteration3/start-journey', function (req, res) {
  // Set default venue
  var venue = 'EAST LONDON TRIBUNAL HEARING CENTRE'
  req.session.data['venue'] = venue
  res.redirect('/hearings/pages/iteration3/hearing-stage')
})

// Route based on Hyrbid hearing Yes/No
router.post('/hearings/pages/iteration3/hearing-attendance-answer', function (req, res) {

  // Get the radio choice for Hybrid hearing question
  var hybridHearing = req.session.data['hybridHearing']

  if (hybridHearing == "yes"){
    // Send user to the hybrid hearings page
    res.redirect('/hearings/pages/iteration3/hearing-attendance-hybrid-many')
  } else {
    // Send user to the non-hybrid hearings page
    res.redirect('/hearings/pages/iteration3/hearing-attendance-non-hybrid')
  }
})

// Get venues selected and redirect to hearing-venue to provide a summary of venue choice
router.post('/hearings/pages/iteration3/hearing-venue-summary', function (req, res) {
  // Get any venues
  var b = req.session.data['venues-selected']
  req.session.data['venue'] = b
  res.redirect('/hearings/pages/iteration3/hearing-venue')
})

// Route based on if a hearing panel is required
router.post('/hearings/pages/iteration3/hearing-panel-answer', function (req, res) {

  var hearingPanel = req.session.data['hearingPanel']

  // Check whether the variable matches a condition
  if (hearingPanel == "yes"){
    // Send user to Existing panel page
    res.redirect('/hearings/pages/iteration3/hearing-panel-existing')
  } else {
    // Send user to select judge page
    res.redirect('/hearings/pages/iteration3/hearing-judge')
  }
})

// Route from judge page if user selected yes to new panel
router.post('/hearings/pages/iteration3/hearing-panel-judge', function (req, res) {

  var hearingPanel = req.session.data['hearingPanel']

  // Check if they chose yes to hearing panel
  if (hearingPanel == "yes"){
    // Send user to new panel
    res.redirect('/hearings/pages/iteration3/hearing-panel-new')
  } else {
    // Send user to hearing duration
    res.redirect('/hearings/pages/iteration3/hearing-duration')
  }
})

// Route from existing panel page
router.post('/hearings/pages/iteration3/hearing-panel-existing-answer', function (req, res) {

  var panelSame = req.session.data['panelsame']

  // Check if they want the same panel
  if (panelSame == "Yes - use the same panel as most recent hearing"){
    // Send user to hearing duration
    res.redirect('/hearings/pages/iteration3/hearing-duration')
  } else {
    // Send user to judge (and then panel subsequently)
    res.redirect('/hearings/pages/iteration3/hearing-judge')
  }
})

///////////////////*** End of hearings management routing ***//////////////////////

module.exports = router
