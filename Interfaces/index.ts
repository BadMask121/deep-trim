interface SignupPayload {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  organisation: {
    organisationname: string;
    organisationlocation: string;
  };
}
interface Login {
  email: string;
  password: string;
}

interface CreateItemProps {
  id: any;
  name: String;
  price: Float32Array;
  tax: Float32Array;
}

interface CreateInvoiceProps {
  id: any;
  client: String;
  issuedate: String;
  duedate: String;
  reference: String;
  item: Object;
  attachments: Array;
  quantity: Float64Array;
  amountPaid: Float64Array;
  type: String;
  invoiceStatus: String;
  description: String;
  totalInTax: Float64Array;
  totalExTax: Float64Array;
}

export {SignupPayload, Login, CreateItemProps, CreateInvoiceProps};
