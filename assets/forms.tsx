import { JSONParse } from "utils";

export const initForms = async () => {
  document.querySelectorAll("[data-form-type]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      if (!e.defaultPrevented) {
        form.classList.add("active");
        /*setTimeout(
          () => {
            form
              .querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
                "input,select,textarea"
              )
              .forEach((formElement) => {
                formElement.disabled = true;
              });
          },
          50
        );*/
      }
    });
  });

  document
    .querySelectorAll<HTMLSelectElement>("[data-address-select-country]")
    .forEach((select) => {
      const selectId = select.dataset.addressSelectCountry;
      const selectProvince = document.querySelector<HTMLSelectElement>(
        `[data-address-select-province="${selectId}"]`
      );
      const defaultProvince = selectProvince.dataset.selectValue;
      select.value = select.dataset.selectValue || select.value;
      if (!selectProvince) return;

      const handleChange = () => {
        const value = select.value;

        const option = select.querySelector<HTMLOptionElement>(`option[value="${value}"]`);
        const provinces = JSONParse(option?.dataset?.provinces) as [string, string][];

        selectProvince.innerHTML = "";
        if (provinces.length) {
          provinces.forEach(([value, name]) => {
            const option = document.createElement("option");
            option.value = value;
            option.innerHTML = name;
            option.selected = defaultProvince === value;
            selectProvince.appendChild(option);
          });
          if (defaultProvince) {
            selectProvince.value = defaultProvince;
          }
          selectProvince.parentElement.classList.remove("hidden");
        }
        if (!provinces.length) {
          selectProvince.parentElement.classList.add("hidden");
        }
      };

      handleChange();

      select.addEventListener("change", handleChange);
    });
};
