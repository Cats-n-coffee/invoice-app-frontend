import * as yup from 'yup';

export const schemaValidation = yup.object({
        biller_street: yup
                .string()
                .required("Required field")
                .max(150, "Maximum 150 characters"),
        biller_city: yup
                .string()
                .required("Required field")
                .max(100, "Maximum 100 characters"),
        biller_zipcode: yup
                .number("Only numbers allowed")
                .required("Required field"),
              
        biller_country: yup
                .string()
                .required("Required field")
                .max(50, "Maximum 50 characters"),
        client_name: yup
                .string()
                .required("Required field")
                .max(50, "Maximum 50 characters"),
        client_email: yup
                .string()
                .required("Required field")
                .max(50, "Maximum 50 characters"),
        client_street: yup
                .string()
                .required("Required field")
                .max(150, "Maximum 150 characters"),
        client_city: yup
                .string()
                .required("Required field")
                .max(50, "Maximum 50 characters"),
        client_zipcode: yup
                .number("Only numbers allowed")
                .required("Required field"),
             
        client_country: yup
                .string()
                .required("Required field")
                .max(50, "Maximum 50 characters"),
})