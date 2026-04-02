interface ClinicFormData {
  clinicName: string;
  phoneNumber: string;
  street: string;
  buildingNumber: string;
  apartmentNumber: string;
  postalCode: string;
  city: string;
}

const defaultClinicFormData: ClinicFormData = {
  clinicName: "",
  phoneNumber: "",
  street: "",
  buildingNumber: "",
  apartmentNumber: "",
  postalCode: "",
  city: "",
};

export { ClinicFormData, defaultClinicFormData };
