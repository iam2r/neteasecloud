import { debounce } from "lodash";
export const Debounce = (wait: number, options?: any) => (
  target: Object,
  propertyKey: string | symbol,
  descriptor: any
) => {
  options = options
    ? {
        ...{
          leading: true,
          trailing: false,
        },
        ...options,
      }
    : {
        leading: true,
        trailing: false,
      };
  descriptor.value = debounce(descriptor.value, wait, options);
  return descriptor;
};
