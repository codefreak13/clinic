import { useForm, UseFormReturn } from "react-hook-form";
import { useCallback, useLayoutEffect, useMemo } from "react";
import { useNavigation } from "expo-router";
import { Button } from "@/components/Button";
import { defaultClinicFormData, ClinicFormData } from "./interfaces";
import { isFormFilled } from "@/utils/validation";

interface UseSettingsReturn {
  form: UseFormReturn<ClinicFormData>;
  canSave: boolean;
}

export function useSettings(): UseSettingsReturn {
  const navigation = useNavigation();
  const form = useForm<ClinicFormData>({
    defaultValues: defaultClinicFormData,
    mode: "onChange",
  });

  const { watch, reset } = form;
  const formValues = watch();
  const { isDirty } = form.formState;

  const canSave = useMemo(() => {
    return isDirty && isFormFilled(formValues);
  }, [isDirty, formValues]);

  const handleSave = useCallback(() => {
    reset(formValues);
  }, [formValues, reset]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Clinic Settings",
      headerRight: () => (
        <Button
          onPress={handleSave}
          disabled={!canSave}
          title="Save"
          size="medium"
        />
      ),
    });
  }, [navigation, canSave, handleSave]);

  return { form, canSave };
}
