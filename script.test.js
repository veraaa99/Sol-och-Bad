let {showOrHideNotification, checkHeartButtons, hasAttributeBeenSet} = require('./script')

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

const { setupButtonListener, getSent } = require('./script');

describe('test the sent variable', () => {
  let subscribeBtn;

  beforeEach(() => {
    //setup DOM
    document.body.innerHTML = `
      <section id="subscribed">
        <button id="subscribeBtn">Prenumerera</button>
      </section>
    `;
    subscribeBtn = document.getElementById('subscribeBtn');

    //setup event listener for the subscribeBtn
    setupButtonListener();
  });

  it('should set sent to true, after the subscribe button is clicked and welcome-message is added', () => {
    //sent shoukd be false, no message is sent
    expect(getSent()).toBe(false);

    //click-simulation
    subscribeBtn.click();

    expect(getSent()).toBe(true);
  });

  it('should not change sent if it is already true', () => {
    // sent should be true, message has been displayed
    sent = true;
    expect(getSent()).toBe(true);

    subscribeBtn.click();

    expect(getSent()).toBe(true);
  });
});