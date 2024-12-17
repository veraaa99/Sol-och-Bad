const {checkSavedTrips, showOrHideNotification, heartButtonsList} = require('./script')

// Test if notification should be displayed or not
describe('showOrHideNotification', function() {
    it("Should return false if no trips have been saved to the shopping cart", function() {
        const notificationStatus = showOrHideNotification()
        expect(notificationStatus).toBe(false)
    })
})
