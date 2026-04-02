import type { ClinicFormData } from '@/features/settings/interfaces';

export function isFormFilled(formData: ClinicFormData): boolean {
  return Object.values(formData).every((value) => value.trim().length > 0);
}
