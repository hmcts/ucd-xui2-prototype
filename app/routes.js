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
// Iteration/version: 4
// Located in: app/views/hearings/pages/iteration4
// Date updated: Jan 2023

// Start happy path and set venue default
router.post('/hearings/pages/iteration4/start-journey', function (req, res) {
  // Set default venue
  var venue = 'Birmingham Civil and Family Justice Centre'
  var region = 'London'
  req.session.data['venue'] = venue
  req.session.data['regionselection'] = region
  req.session.data['viewandchange'] = 'false'
  req.session.data['backtocheckanswers'] = 'false'
  req.session.data['status'] = 'new'
  req.session.data['changesallowed'] = 'true'
  req.session.data['changed-data'] = 'false'
  req.session.data['cf'] = '2parties'
  res.redirect('/hearings/pages/iteration4/hearing-requirements')
})

// Routing for Requirements > Additional facilities
router.post('/hearings/pages/iteration4/hearing-requirements-facilities', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration4/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration4/hearing-requirements-facilities')
  }
})

// Routing for Requirements > Stage
router.post('/hearings/pages/iteration4/hearing-stage', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration4/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration4/hearing-stage')
  }
})

// Routing for Stage > Attendance
router.post('/hearings/pages/iteration4/hearing-attendance-hybrid-many', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration4/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration4/hearing-attendance-hybrid-many')
  }
})

// Routing for Requirements > Venue
router.post('/hearings/pages/iteration4/hearing-venue', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration4/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration4/hearing-venue')
  }
})

//Routing for Venue > Judge
router.post('/hearings/pages/iteration4/hearing-judge', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration4/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration4/hearing-judge')
  }
})

// Routing for Panel > Duration
router.post('/hearings/pages/iteration4/hearing-duration', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration4/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration4/hearing-duration')
  }
})

// Get venues selected and redirect to hearing-venue to provide a summary of venue choice
router.post('/hearings/pages/iteration4/hearing-venue-summary', function (req, res) {
  // Get any venues
  var b = req.session.data['venues-selected']
  req.session.data['venue'] = b
  res.redirect('/hearings/pages/iteration4/hearing-venue')
})

// Route based on if a hearing panel is required
router.post('/hearings/pages/iteration4/hearing-panel-answer', function (req, res) {

  var hearingPanel = req.session.data['hearingPanel']

  // Check whether the variable matches a condition
  if (hearingPanel == "yes"){
    // Send user to Existing panel page
    res.redirect('/hearings/pages/iteration4/hearing-panel-new')
  } else {
    // check your answers conditional
    if(req.session.data['backtocheckanswers'] == 'true') {
      req.session.data['backtocheckanswers'] = 'false'
      res.redirect('/hearings/pages/iteration4/hearing-checkyouranswers')
    } else {
      // Send user to select judge page
      res.redirect('/hearings/pages/iteration4/hearing-duration')
    }
  }
})

// Routing for Hearing panel new
router.post('/hearings/pages/iteration4/hearing-panel-new', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration4/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration4/hearing-panel-new')
  }
})

// Routing for Hearing panel question
router.post('/hearings/pages/iteration4/hearing-panel', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration4/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration4/hearing-panel')
  }
})

// Routing for Welsh hearing > Additional
router.post('/hearings/pages/iteration4/hearing-additional-instructions', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration4/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration4/hearing-additional-instructions')
  }
})

// Wales check. If Welsh is required, present the Welsh question after Duration
router.post('/hearings/pages/iteration4/hearing-duration-check-wales', function (req, res) {

  var regionChoice = req.session.data['regionselection']

  // check your answers conditional
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration4/hearing-checkyouranswers')
  } else {
    // Check if Wales was selected as a venue region
    if (regionChoice == "Wales") {
      // Send user to Welsh question
      res.redirect('/hearings/pages/iteration4/hearing-welsh')
    } else {
      // Send user to check answers page
      res.redirect('/hearings/pages/iteration4/hearing-additional-instructions')
    }
  }
})

// Confirmation screen - submission conditional
router.post('/hearings/pages/iteration4/hearing-confirmation-answer', function (req, res) {

  // Check if listing or pending status are set
  if ((req.session.data['status'] == "listed") || (req.session.data['status'] == "pending")) {
    // Send user to Change request reason interstitial screen
    res.redirect('/hearings/pages/iteration4/hearing-change-reason')
  } else {
    // Send user to check answers page
    res.redirect('/hearings/pages/iteration4/hearing-confirmation')
  }
})


///////////////////////////////////////////////////////////////
// All routes for: Hearings Management
// Iteration/version: 3
// Located in: app/views/hearings/pages/iteration3
// Date updated: Oct 2021

// Start happy path and set venue default
router.post('/hearings/pages/iteration3/start-journey', function (req, res) {
  // Set default venue
  var venue = 'Birmingham Civil and Family Justice Centre'
  var region = 'London'
  req.session.data['venue'] = venue
  req.session.data['regionselection'] = region
  req.session.data['viewandchange'] = 'false'
  req.session.data['backtocheckanswers'] = 'false'
  req.session.data['status'] = 'new'
  req.session.data['changesallowed'] = 'true'
  req.session.data['changed-data'] = 'false'
  req.session.data['cf'] = '2parties'
  res.redirect('/hearings/pages/iteration3/hearing-requirements')
})

// Routing for Requirements > Additional facilities
router.post('/hearings/pages/iteration3/hearing-requirements-facilities', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration3/hearing-requirements-facilities')
  }
})

// Routing for Requirements > Stage
router.post('/hearings/pages/iteration3/hearing-stage', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration3/hearing-stage')
  }
})

// Routing for Stage > Attendance
router.post('/hearings/pages/iteration3/hearing-attendance-hybrid-many', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration3/hearing-attendance-hybrid-many')
  }
})

// Routing for Requirements > Venue
router.post('/hearings/pages/iteration3/hearing-venue', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration3/hearing-venue')
  }
})

//Routing for Venue > Judge
router.post('/hearings/pages/iteration3/hearing-judge', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration3/hearing-judge')
  }
})

// Routing for Panel > Duration
router.post('/hearings/pages/iteration3/hearing-duration', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration3/hearing-duration')
  }
})

// Route based on Hyrbid hearing Yes/No
// router.post('/hearings/pages/iteration3/hearing-attendance-answer', function (req, res) {
//
//   // Get the radio choice for Hybrid hearing question
//   var hybridHearing = req.session.data['hybridHearing']
//
//   if (hybridHearing == "yes"){
//     // Send user to the hybrid hearings page
//     res.redirect('/hearings/pages/iteration3/hearing-attendance-hybrid-few')
//   } else {
//     // Send user to the non-hybrid hearings page
//     res.redirect('/hearings/pages/iteration3/hearing-attendance-non-hybrid')
//   }
// })

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
    res.redirect('/hearings/pages/iteration3/hearing-panel-new')
  } else {
    // check your answers conditional
    if(req.session.data['backtocheckanswers'] == 'true') {
      req.session.data['backtocheckanswers'] = 'false'
      res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
    } else {
      // Send user to select judge page
      res.redirect('/hearings/pages/iteration3/hearing-duration')
    }
  }
})

// // Route from judge page if user selected yes to new panel
// router.post('/hearings/pages/iteration3/hearing-panel-judge', function (req, res) {
//
//   var hearingPanel = req.session.data['hearingPanel']
//   var panelSame = req.session.data['panelsame']
//
//   // check your answers conditional
//   if(req.session.data['backtocheckanswers'] == 'true') {
//       req.session.data['backtocheckanswers'] = 'false'
//       res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
//   } else {
//       // Check if they chose yes to hearing panel
//     if (panelSame == "No - select a new panel"){
//         // Send user to new panel
//         res.redirect('/hearings/pages/iteration3/hearing-panel-new')
//       } else {
//         // Send user to hearing duration
//         res.redirect('/hearings/pages/iteration3/hearing-duration')
//       }
//     //res.redirect('/hearings/pages/iteration3/hearing-panel')
//   }
// })

// Route from existing panel page
// router.post('/hearings/pages/iteration3/hearing-panel-existing-answer', function (req, res) {
//
//   var panelSame = req.session.data['panelsame']
//
//   // Check if the same panel required
//   if (panelSame == "Yes - use the same panel as most recent hearing"){
//       // check your answers conditional
//       if(req.session.data['backtocheckanswers'] == 'true') {
//           req.session.data['backtocheckanswers'] = 'false'
//           res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
//       } else {
//         // Send user to hearing duration
//         res.redirect('/hearings/pages/iteration3/hearing-duration')
//       }
//   // else if new panel
//   } else {
//       // If coming from check your answers page
//       if(req.session.data['backtocheckanswers'] == 'true') {
//
//         // check to see if a Judge has already been populated
//         if (req.session.data['specificjudge'] == "Yes" || req.session.data['specificjudge'] == "No") {
//           res.redirect('/hearings/pages/iteration3/hearing-panel-new')
//         } else {
//           req.session.data['backtocheckanswers'] = 'false'
//           res.redirect('/hearings/pages/iteration3/hearing-judge')
//         }
//       } else {
//         res.redirect('/hearings/pages/iteration3/hearing-judge')
//       }
//   }
// })

// Routing for Hearing panel new
router.post('/hearings/pages/iteration3/hearing-panel-new', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration3/hearing-panel-new')
  }
})

// Routing for Hearing panel question
router.post('/hearings/pages/iteration3/hearing-panel', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration3/hearing-panel')
  }
})

// Routing for Welsh hearing > Additional
router.post('/hearings/pages/iteration3/hearing-additional-instructions', function (req, res) {
  // If coming from check answers page then return there after clicking continue
  if(req.session.data['backtocheckanswers'] == 'true') {
    req.session.data['backtocheckanswers'] = 'false'
    res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
  }
  else {
    res.redirect('/hearings/pages/iteration3/hearing-additional-instructions')
  }
})

// Wales check. If Welsh is required, present the Welsh question after Duration
router.post('/hearings/pages/iteration3/hearing-duration-check-wales', function (req, res) {

  var regionChoice = req.session.data['regionselection']

  // check your answers conditional
  if(req.session.data['backtocheckanswers'] == 'true') {
      req.session.data['backtocheckanswers'] = 'false'
      res.redirect('/hearings/pages/iteration3/hearing-checkyouranswers')
  } else {
    // Check if Wales was selected as a venue region
    if (regionChoice == "Wales") {
      // Send user to Welsh question
      res.redirect('/hearings/pages/iteration3/hearing-welsh')
    } else {
      // Send user to check answers page
      res.redirect('/hearings/pages/iteration3/hearing-additional-instructions')
    }
  }
})

// Confirmation screen - submission conditional
router.post('/hearings/pages/iteration3/hearing-confirmation-answer', function (req, res) {

    // Check if listing or pending status are set
    if ((req.session.data['status'] == "listed") || (req.session.data['status'] == "pending")) {
      // Send user to Change request reason interstitial screen
      res.redirect('/hearings/pages/iteration3/hearing-change-reason')
    } else {
      // Send user to check answers page
      res.redirect('/hearings/pages/iteration3/hearing-confirmation')
    }
})


///////////////////*** End of hearings management routing ***//////////////////////

module.exports = router
