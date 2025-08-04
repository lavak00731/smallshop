const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const passwordRegex = /^(?!.*\s)(?=(?:.*[A-Z]){2,})(?=.*\d).{8,}$/;

//blue print for users
const dataTemplate = {
    "username": null,
    "name": null,
    "email": null,
    "password": null,
    "favorites": [],
    "sitepref": {
        "darkmode": "false",
        "isrecievingNotifications": "false"
    },
    "address": { "street": null, "zipcode": null, "city": null, "state": null },
    "invoiceaddress": { "street": null, "zipcode": null, "city": null, "state": null },
    "telephone": null
}

module.exports = { emailRegex, passwordRegex, dataTemplate }