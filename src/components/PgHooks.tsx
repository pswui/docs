import useMutable from "@/utils/useMutable";
import { useMemo } from "react";
import type { TEMPLATE } from "./LoadedCode";
import type { ControlTemplate, Template } from "./Playground";

export function usePgProps<T extends TEMPLATE>(
  t: Template,
): [T, ControlTemplate] {
  const [props, mutate] = useMutable(t);

  return useMemo(() => {
    const rawProps: TEMPLATE = {};
    const controlTemplate: ControlTemplate = {};

    for (const [componentName, prop] of Object.entries(props)) {
      const pre: ControlTemplate[string] = {};
      const vals: TEMPLATE[string] = {};

      for (const [propKey, propMeta] of Object.entries(prop)) {
        pre[propKey] = {
          ...propMeta,
          onChange(value: string | boolean) {
            mutate((state) => {
              state[componentName][propKey].value = value;
            });
          },
        };
        vals[propKey] = propMeta.value;
      }

      controlTemplate[componentName] = pre;
      rawProps[componentName] = vals;
    }

    return [rawProps as T, controlTemplate];
  }, [props, mutate]);
}
