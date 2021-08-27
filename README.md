# Invoice App Challenge

**DEMO LOGIN:** <br>
Email: mario@gmail.com<br>
Password: 123<br>
[Click Here for a Deployed Version](https://dazzling-mahavira-a0de3b.netlify.app/).<br>

This App uses the design and implement most of the functionality from the invoice challenge from **[Frontend Mentor](https://www.frontendmentor.io/)**.
The authentication and dashboard were added to this Frontend Mentor Invoice Challenge. <br>
The frontend uses React with ReactQuery for maintain server state on invoices, and styled components.
The backend uses Express with MongoDB native library to preform the CRUD operations.

## Authentication
The Authentication uses cookies. They are set by the backend once a user successfully authenticates.

### Frontend
The Frontend authentication uses the useContext hook(s) to keep a user authenticated. Once a user logged in/signed up, the user id, email and username are set in the app context. This context is then available throughout the app or being set using a custom hook (applying authentication from *[Kent C. Dodds blogpost](https://kentcdodds.com/blog/authentication-in-react-applications)*). Therefore, only when getting a response without an error will the auth context be set (see src/components/forms/AuthForm.js).

### Backend
The Backend authentication uses Json WebToken. Upon login/signup, the user will get a pair of tokens. For every protected route (all the routes for invoice operations), the token will be verified.<br>

## Portal
The Frontend portal has two pages for the user to access: the dashboard (landing page), and the invoices section.<br>

---
### Frontend Structure
The 'main parent' is the `PortalScreen`. Because the invoice data needs to be available for both the dashboard and the invoices section, the portal is the component where all the requests happen.
- App
    - Unauthenticated
        - Login / Signup Screen
    - Authenticated
        - Portal Screen:
            - Dashboard
            - Invoices Main (shows invoices summary or one invoice):
                - Invoices Summary (invoice list or no invoice)
                - Invoice (handles: edit, delete, change of status)
---

### Dashboard
The frontend dashboard uses the invoice data. The table is plain HTML table, the charts use Chart.js and React-chartjs-2. Data and labels use dynamic data taken from the props, therefore were placed inside the component.

### Invoices
As the Frontend Structure shows above, this portion is divided in two: `InvoicesSummary` and `Invoice`. The `Invoice` shows only if the `oneInvoice` props has data.<br>
`Invoice` handles all the actions that can be taken on one invoice: edit, delete, mark as paid, and show the one invoice.<br>
`InvoicesSummary` handles all the other actions: show a list of invoices, filter by status, add a new invoice, show the 'no invoice' component.<br>
ReactQuery was used to fetch the data, but also perform all the mutations: add new invoice, change the status, edit an invoice, and delete an invoice.<br> 
All mutations are used inside of hooks to perform the actions directly to the backend, and each hook is used in the appropriate component where the action is performed.

### Forms
The Authentication form uses the useState Hook for email, password and username fields. Depending on which `type` prop was passed, it will conditionally render a Login or a Signup form.<br>
The Invoice form being a longer form and the same form for *edit* and *new* invoice, uses Formik and Yup for validation (very little validation). <br>
Formik allowed to prefill the *edit* form with the invoice data in a much easier and cleaner way than doing it manually, and allowed for a cleaner form validation. 
