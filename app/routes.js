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

router.post('/hearings/pages/iteration3/hearing-attendance-answer', function (req, res) {

  var hybridHearing = req.session.data['hybridHearing']

  // Check whether the variable matches a condition
  if (hybridHearing == "yes"){
    // Send user to next page
    res.redirect('/hearings/pages/iteration3/hearing-attendance-hybrid-many')
  } else {
    // Send user to ineligible page
    res.redirect('/hearings/pages/iteration3/hearing-attendance-non-hybrid')
  }

})

router.post('/hearings/pages/iteration3/start-journey', function (req, res) {
  // Set default venue
  var venue = 'ROMFORD COUNTY COURT AND FAMILY COURT'
  req.session.data['venue'] = venue
  res.redirect('/hearings/pages/iteration3/hearing-stage')
})

router.post('/hearings/pages/iteration3/hearing-venue-summary', function (req, res) {
  // get any venues
  var b = req.session.data['venues-selected']
  req.session.data['venue'] = b
  res.redirect('/hearings/pages/iteration3/hearing-venue')
})

router.post('/hearings/pages/iteration3/hearing-panel-answer', function (req, res) {

  var hearingPanel = req.session.data['hearingPanel']

  // Check whether the variable matches a condition
  if (hearingPanel == "yes"){
    // Send user to next page
    res.redirect('/hearings/pages/iteration3/hearing-panel-existing')
  } else {
    // Send user to ineligible page
    res.redirect('/hearings/pages/iteration3/hearing-judge')
  }
})

router.post('/hearings/pages/iteration3/hearing-panel-judge', function (req, res) {

  var hearingPanel = req.session.data['hearingPanel']

  // Check whether the variable matches a condition
  if (hearingPanel == "yes"){
    // Send user to next page
    res.redirect('/hearings/pages/iteration3/hearing-panel-new')
  } else {
    // Send user to ineligible page
    res.redirect('/hearings/pages/iteration3/hearing-duration')
  }
})

router.post('/hearings/pages/iteration3/hearing-panel-existing-answer', function (req, res) {

  var panelSame = req.session.data['panelsame']

  // Check whether the variable matches a condition
  if (panelSame == "Yes - use the same panel as most recent hearing"){
    // Send user to next page
    res.redirect('/hearings/pages/iteration3/hearing-duration')
  } else {
    // Send user to ineligible page
    res.redirect('/hearings/pages/iteration3/hearing-judge')
  }
})

///////////////////////////////////////////////////////////////

module.exports = router
