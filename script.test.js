let {checkSavedTrips, showOrHideNotification, checkHeartButtons, hasAttributeBeenSet} = require('./script')

// Test if notification should be displayed or not
describe('showOrHideNotification', function() {
    it("Should return false if no trips have been saved to the shopping cart", function() {
        const notificationStatus = showOrHideNotification()
        expect(notificationStatus).toBe(false)
    })
})

// Test if heart has not been clicked yet
describe('checkHeartButtons',  function() {
    it ('Should return false if heart has not been clicked yet', function() {
        let isAttributeSet = hasAttributeBeenSet
        checkHeartButtons()
        expect(isAttributeSet).toBe(false)
    })
})