import AecAlertMessageModal from "./lib/AecAlertMessageModal";
import AecLocalNotification from "./lib/AecLocalNotification";

/**
 *
 * @type {{AecAlertMessageModal: *, AecLocalMessage: *}}
 */
module.exports = {
    get AecAlertMessageModal() {
        return require('./lib/AecAlertMessageModal').default;
    },
    get AecLocalNotification() {
        return require('./lib/AecLocalNotification').default;
    }
}
